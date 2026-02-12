
import { CLASSES } from "./classes";

export interface HeroSlide {
    image: string;
    title: string;
    alt: string;
}

// 1. Get base slides from CLASSES
const baseSlides: HeroSlide[] = CLASSES.filter(c => c.image).map(c => ({
    image: c.image,
    title: c.name,
    alt: c.name
}));

// 2. Additional slides for specific programs
const extraSlides: HeroSlide[] = [
    // Boys Wrestling
    { image: "/images/boys-wrestling/boys-wrestling-class_1.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_2.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_3.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_4.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_5.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_6.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_7.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_8.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-class_9.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Class" },
    { image: "/images/boys-wrestling/boys-wrestling-competition_1.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Competition" },
    { image: "/images/boys-wrestling/boys-wrestling-competition_2.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Competition" },
    { image: "/images/boys-wrestling/boys-wrestling-competition_3.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Competition" },
    { image: "/images/boys-wrestling/boys-wrestling-competition_4.jpeg", title: "Boys Wrestling", alt: "Boys Wrestling Competition" },

    // Boys BJJ
    { image: "/images/boys-bjj/hero.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Class" },
    { image: "/images/boys-bjj/sparring.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Sparring" },
    { image: "/images/boys-bjj/competition.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Competition" },
    { image: "/images/boys-bjj/grading-1.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Grading" },
    { image: "/images/boys-bjj/grading-2.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Grading" },
    { image: "/images/boys-bjj/class-2.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Class" },
    { image: "/images/boys-bjj/class-3.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Class" },
    { image: "/images/boys-bjj/class-4.jpg", title: "Boys Jiu-Jitsu", alt: "Boys BJJ Class" },

    // Girls BJJ
    { image: "/images/girls-bjj/girls-bjj-class_1.jpeg", title: "Girls Jiu-Jitsu", alt: "Girls BJJ Class" },
    { image: "/images/girls-bjj/girls-bjj-class_2.jpeg", title: "Girls Jiu-Jitsu", alt: "Girls BJJ Class" },
    { image: "/images/girls-bjj/girls-bjj-class_4.jpeg", title: "Girls Jiu-Jitsu", alt: "Girls BJJ Class" },
    { image: "/images/girls-bjj/girls-bjj-class_5.jpeg", title: "Girls Jiu-Jitsu", alt: "Girls BJJ Class" },

    // Men's Wrestling
    { image: "/images/mens-wrestling/mens-wrestling-class_1.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-class_2.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-class_3.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-class_4.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-class_5.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-class_6.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Class" },
    { image: "/images/mens-wrestling/mens-wrestling-competition_1.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Competition" },
    { image: "/images/mens-wrestling/mens-wrestling-competition_2.jpeg", title: "Men's Wrestling", alt: "Men's Wrestling Competition" },

    // Men's BJJ
    { image: "/images/mens-bjj/mens-bjj-class_1.jpeg", title: "Men's BJJ", alt: "Men's BJJ Class" },
    { image: "/images/mens-bjj/mens-bjj-class_2.jpeg", title: "Men's BJJ", alt: "Men's BJJ Class" },
    { image: "/images/mens-bjj/mens-bjj-class_3.jpeg", title: "Men's BJJ", alt: "Men's BJJ Class" },
    { image: "/images/mens-bjj/mens-bjj-class_4.jpeg", title: "Men's BJJ", alt: "Men's BJJ Class" },
    { image: "/images/mens-bjj/mens-bjj-class_5.jpeg", title: "Men's BJJ", alt: "Men's BJJ Class" },

    // Girls Judo
    { image: "/images/girls-judo/girls-judo-class_1.jpeg", title: "Girls Judo", alt: "Girls Judo Class" },

    // Women's BJJ
    { image: "/images/womens-bjj/womens-bjj-class_1.jpeg", title: "Women's BJJ", alt: "Women's BJJ Class" },

    // Women's Judo
    { image: "/images/womens-judo/womens-judo-class_1.jpeg", title: "Women's Judo", alt: "Women's Judo Class" },

    // Men's No-Gi (Using actual class names)
    { image: "/images/mens-no-gi/mens-no-gi-class_1.jpeg", title: "Men's No-Gi", alt: "Men's No-Gi Class" },
    { image: "/images/mens-no-gi/mens-no-gi-class_2.jpeg", title: "Men's No-Gi", alt: "Men's No-Gi Class" },
    { image: "/images/mens-no-gi/mens-no-gi-class_3.jpeg", title: "Men's No-Gi", alt: "Men's No-Gi Class" },
    { image: "/images/mens-no-gi/mens-no-gi-class_4.jpeg", title: "Men's No-Gi", alt: "Men's No-Gi Class" },
    { image: "/images/mens-no-gi/mens-no-gi-class_5.jpeg", title: "Men's No-Gi", alt: "Men's No-Gi Class" },

    // Men's MMA
    { image: "/images/mens-mma/mens-mma-class_1.jpeg", title: "Men's MMA", alt: "Men's MMA Class" },
    { image: "/images/mens-mma/mens-mma-class_2.jpeg", title: "Men's MMA", alt: "Men's MMA Class" },
    { image: "/images/mens-mma/mens-mma-class_3.jpeg", title: "Men's MMA", alt: "Men's MMA Class" },
];

// Combine and deduplicate (by image path)
const allSlides = [...baseSlides, ...extraSlides];
const uniqueSlides = Array.from(new Map(allSlides.map(item => [item.image, item])).values());

// Export shuffled version (optional, but good for variety)
// For now, let's keep them somewhat ordered or interleaved
export const HERO_SLIDES = uniqueSlides;
