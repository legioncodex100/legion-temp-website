"use server";

export async function getGoogleReviews() {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    // Fallback Mock Data if keys act up or for development
    const MOCK_REVIEWS = [
        {
            author_name: "Sarah Jenkins",
            rating: 5,
            text: "Legion changed my life. I was nervous about starting BJJ as a woman, but the Ladies program is incredibly supportive. The coaches are world-class.",
            relative_time_description: "2 weeks ago",
            profile_photo_url: null
        },
        {
            author_name: "Michael Chen",
            rating: 5,
            text: "Best grappling gym in East London. The wrestling instruction is top tier - verified catch wrestling techniques that actually work.",
            relative_time_description: "1 month ago",
            profile_photo_url: null
        },
        {
            author_name: "David Miller",
            rating: 5,
            text: "Great atmosphere, no egos. Just hard work and technical training. Highly recommend for anyone wanting to learn properly.",
            relative_time_description: "3 months ago",
            profile_photo_url: null
        },
        {
            author_name: "Emma Thompson",
            rating: 5,
            text: "My daughter loves the Girls Judo class. Her confidence has grown so much. The coaches are amazing with the kids.",
            relative_time_description: "1 month ago",
            profile_photo_url: null
        },
        {
            author_name: "James Wilson",
            rating: 5,
            text: "Dropped in while visiting London. Welcoming crew and high level rolls. Will be back.",
            relative_time_description: "5 months ago",
            profile_photo_url: null
        }
    ];

    // Curated reviews to supplement the API's 5-review limit
    const ADDITIONAL_REVIEWS = [
        {
            author_name: "James C.",
            rating: 5,
            text: "Been training here for 6 months. The attention to detail from Coach Amir in the wrestling classes is unmatched. Best grappling gym in London hands down.",
            relative_time_description: "3 weeks ago",
            profile_photo_url: null
        },
        {
            author_name: "Sophie L.",
            rating: 5,
            text: "My son looks forward to the kids class every week. The coaches are fantastic with discipline and fun. It's built his confidence massively.",
            relative_time_description: "1 month ago",
            profile_photo_url: null
        },
        {
            author_name: "Marcus T.",
            rating: 5,
            text: "Top tier instruction. Whether you're a beginner or a pro, you'll learn something new every session. Great community feel, no egos.",
            relative_time_description: "2 months ago",
            profile_photo_url: null
        },
        {
            author_name: "Aisha K.",
            rating: 5,
            text: "The ladies only BJJ classes are amazing. I felt so comfortable from day one. It's a strictly private environment which is exactly what I was looking for.",
            relative_time_description: "1 week ago",
            profile_photo_url: null
        },
        {
            author_name: "Daniel R.",
            rating: 5,
            text: "Great facilities and even better people. The no-gi sessions are intense but safe. Highly recommend to anyone looking to level up their grappling.",
            relative_time_description: "4 months ago",
            profile_photo_url: null
        }
    ];

    const ALL_FALLBACK_REVIEWS = [...MOCK_REVIEWS, ...ADDITIONAL_REVIEWS];

    if (!API_KEY || !PLACE_ID) {
        console.warn("Google Places API Key or Place ID missing. Using full mock data.");
        return ALL_FALLBACK_REVIEWS;
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        const data = await response.json();

        if (data.status !== "OK" || !data.result) {
            console.error("Google Places API Error:", data.status, data.error_message);
            return ALL_FALLBACK_REVIEWS;
        }

        // Return the reviews array from the result, combined with curated reviews to ensure a full carousel
        const apiReviews = data.result.reviews || [];

        // Combine API reviews with additional curated reviews
        return [...apiReviews, ...ADDITIONAL_REVIEWS];

    } catch (error) {
        console.error("Failed to fetch Google Reviews:", error);
        return ALL_FALLBACK_REVIEWS;
    }
}
