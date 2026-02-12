export interface ClassDetail {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string; // Placeholder for now
    features: string[];
    schedule: string;
    targetAudience: "Adults" | "Kids" | "Women Only";
    gallery?: { src: string; alt: string; caption?: string }[];
}

export const CLASSES: ClassDetail[] = [
    {
        id: "mens-wrestling",
        name: "Men's Wrestling",
        slug: "mens-wrestling",
        description: "Our flagship wrestling program focuses on takedowns, control, and dominance. Whether you are training for MMA or pure grappling, this class builds the fundamental skills required to dictate where the fight takes place.",

        image: "/images/mens-wrestling/mens-wrestling-class_1.jpeg",
        features: ["Takedown Mechanics", "Clinch Work", "Mat Control", "High Intensity Conditioning"],
        schedule: "Mon, Wed, Fri - 7:00 PM",
        targetAudience: "Adults",
    },
    {
        id: "mens-bjj",
        name: "Men's BJJ (Gi)",
        slug: "mens-bjj",
        description: "Traditional Brazilian Jiu-Jitsu training in the Gi. Focus on technique, leverage, and submissions. Ideally suited for self-defense and sport competition.",
        image: "/images/mens-bjj/mens-bjj-class_1.jpeg",
        features: ["Technical Drilling", "Positional Sparring", "Submission Attacks", "Gi Chokes & Grips"],
        schedule: "Tue, Thu - 7:00 PM",
        targetAudience: "Adults",
    },
    {
        id: "mens-nogi",
        name: "Men's No-Gi",
        slug: "mens-no-gi",
        description: "Fast-paced submission grappling without the Gi. Integrates wrestling and BJJ for a complete ground game suitable for MMA and ADCC-style competition.",
        image: "/images/mens-no-gi/mens-no-gi-class_2.jpeg",
        features: ["Leg Locks", "Wrestling integration", "Dynamic Scrambles", "Submission Hunting"],
        schedule: "Sat - 11:00 AM",
        targetAudience: "Adults",
    },
    {
        id: "womens-bjj",
        name: "Ladies-Only Jiu Jitsu",
        slug: "womens-bjj",
        description: "Master the art of Brazilian Jiu Jitsu in a strictly male-free, closed-mat environment. A structured, technical program designed for empowerment and elite-level fitness.",
        image: "/images/womens-bjj/womens-bjj-class_1.jpeg",
        features: ["Self Defense Focus", "Sport BJJ", "Strictly Private", "Technical Mastery"],
        schedule: "Mon, Wed - 6:00 PM",
        targetAudience: "Women Only",
    },
    {
        id: "womens-judo",
        name: "Ladies-Only Judo",
        slug: "womens-judo",
        description: "Master the 'Gentle Way' in a dedicated, strictly male-free environment. Build physical confidence and elite coordination through the traditional art of Judo.",
        image: "/images/womens-judo/womens-judo-class_1.jpeg",
        features: ["Throws & Trips", "BJA Syllabus", "Falling Safety (Ukemi)", "Strictly Private"],
        schedule: "Tue - 6:00 PM",
        targetAudience: "Women Only",
    },
    {
        id: "boys-wrestling",
        name: "Boys Wrestling",
        slug: "boys-wrestling",
        description: "Building strong, confident, and disciplined young men through the sport of wrestling. We focus on discipline, respect, and hard work.",
        image: "/images/boys-wrestling/boys-wrestling-competition_3.jpeg",
        features: ["Discipline & Respect", "Physical Fitness", "Coordination", "Competition Prep"],
        schedule: "Tue, Thu - 5:00 PM",
        targetAudience: "Kids",
    },
    {
        id: "boys-jiu-jitsu",
        name: "Boys Jiu-Jitsu",
        slug: "boys-jiu-jitsu",
        description: "Teaching children the gentle art. Helps with focus, problem solving, and looking after one another on the mats.",
        image: "/images/boys-bjj/hero.jpg",
        features: ["Focus & Discipline", "Body Awareness", "Safe Play", "Problem Solving"],
        schedule: "Mon, Wed - 5:00 PM",
        targetAudience: "Kids",
        gallery: [
            { src: "/images/boys-bjj/hero.jpg", alt: "Legion student receiving yellow belt", caption: "Belt promotion ceremony" },
            { src: "/images/boys-bjj/sparring.jpg", alt: "Kids sparring on the mats", caption: "Live rolling practice" },
            { src: "/images/boys-bjj/competition.jpg", alt: "Legion students on the podium", caption: "Grappling Industries 2025 - 1st, 2nd & 3rd place" },
            { src: "/images/boys-bjj/grading-1.jpg", alt: "Coach tying belt", caption: "Coach Khalid with new orange belt" },
            { src: "/images/boys-bjj/grading-2.jpg", alt: "Belt grading ceremony", caption: "Progress through the ranks" },
        ],
    },
    {
        id: "girls-bjj",
        name: "Girls-Only Jiu Jitsu",
        slug: "girls-bjj",
        description: "Empowering the next generation. A dedicated, strictly male-free environment where girls build life-long strength and problem-solving skills.",
        image: "/images/girls-bjj/girls-bjj-class_1.jpeg",
        features: ["Confidence Building", "Self Defense", "Strictly Private", "Social Skills"],
        schedule: "Fri - 5:00 PM",
        targetAudience: "Kids",
    },
    {
        id: "mens-mma",
        name: "Mixed Martial Arts",
        slug: "mens-mma",
        description: "The complete combat athlete. Blending Muay Thai striking, Freestyle Wrestling, and Submission Grappling into a unified fighting system.",
        image: "/images/mens-mma/mens-mma-class_2.jpeg", // Updated image
        features: ["Cage Wrestling", "Striking Integration", "Ground & Pound", "Fight Strategy"],
        schedule: "Mon/Wed/Fri - 8:00 PM",
        targetAudience: "Adults",
    },
    {
        id: "girls-judo",
        name: "Girls-Only Judo",
        slug: "girls-judo",
        description: "Developing balance, coordination, and resilience through the art of throwing. A dedicated male-free environment following the BJA syllabus.",
        image: "/images/girls-judo/girls-judo-class_1.jpeg",
        features: ["Throws (Tachi-waza)", "BJA Syllabus", "Strictly Private", "Balance"],
        schedule: "Sat - 10:00 AM",
        targetAudience: "Kids",
    },
];

export function getClassBySlug(slug: string): ClassDetail | undefined {
    return CLASSES.find((c) => c.slug === slug);
}
