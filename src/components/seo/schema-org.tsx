import Script from "next/script";

export function SchemaOrg() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        "name": "Legion Grappling Academy",
        "image": "https://legiongrappling.com/images/hero_1.jpg",
        "description": "Premier Brazilian Jiu Jitsu, Wrestling, and MMA academy in East London.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Unit 3, 15 Argall Avenue",
            "addressLocality": "London",
            "postalCode": "E10 7QE",
            "addressCountry": "UK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5676,
            "longitude": -0.0385
        },
        "url": "https://legiongrappling.com",
        "telephone": "+447000000000",
        "priceRange": "££",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "17:00",
                "closes": "21:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "14:00"
            }
        ]
    };

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
