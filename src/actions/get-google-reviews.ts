"use server";

export async function getGoogleReviews() {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    // Fallback Mock Data if keys act up or for development
    const MOCK_REVIEWS = [
        {
            id: 1,
            author_name: "Sarah Jenkins",
            rating: 5,
            text: "Legion changed my life. I was nervous about starting BJJ as a woman, but the Ladies program is incredibly supportive. The coaches are world-class.",
            relative_time_description: "2 weeks ago",
            profile_photo_url: null
        },
        {
            id: 2,
            author_name: "Michael Chen",
            rating: 5,
            text: "Best grappling gym in East London. The wrestling instruction is top tier - verified catch wrestling techniques that actually work.",
            relative_time_description: "1 month ago",
            profile_photo_url: null
        },
        {
            id: 3,
            author_name: "David Miller",
            rating: 5,
            text: "Great atmosphere, no egos. Just hard work and technical training. Highly recommend for anyone wanting to learn properly.",
            relative_time_description: "3 months ago",
            profile_photo_url: null
        },
        {
            id: 4,
            author_name: "Emma Thompson",
            rating: 5,
            text: "My daughter loves the Girls Judo class. Her confidence has grown so much. The coaches are amazing with the kids.",
            relative_time_description: "1 month ago",
            profile_photo_url: null
        },
        {
            id: 5,
            author_name: "James Wilson",
            rating: 5,
            text: "Dropped in while visiting London. Welcoming crew and high level rolls. Will be back.",
            relative_time_description: "5 months ago",
            profile_photo_url: null
        }
    ];

    if (!API_KEY || !PLACE_ID) {
        console.warn("Google Places API Key or Place ID missing. Using mock data.");
        return MOCK_REVIEWS;
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        const data = await response.json();

        if (data.status !== "OK" || !data.result) {
            console.error("Google Places API Error:", data.status, data.error_message);
            return MOCK_REVIEWS;
        }

        // Return the reviews array from the result
        return data.result.reviews || MOCK_REVIEWS;

    } catch (error) {
        console.error("Failed to fetch Google Reviews:", error);
        return MOCK_REVIEWS;
    }
}
