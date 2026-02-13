"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

{ src: "/images/boys-wrestling/boys-wrestling-competition_3.jpeg", alt: "Boys Wrestling Competition" },
{ src: "/images/boys-bjj/sparring.jpg", alt: "Boys BJJ Sparring" },
{ src: "/images/girls-bjj/girls-bjj-class_1.jpeg", alt: "Girls Jiu Jitsu Class" },
{ src: "/images/girls-bjj/girls-bjj-class_2.jpeg", alt: "Girls Jiu Jitsu Drill" },
{ src: "/images/boys-bjj/grading-1.jpg", alt: "Boys BJJ Grading" },
];

export function YouthImageCycler() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={IMAGES[currentIndex].src}
                        alt={IMAGES[currentIndex].alt}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Optional: Add a subtle overlay or gradient if needed to clear text contrast, 
                but since this is a side image, it might not be needed. 
                Keeping it simple as per original design. */}
        </div>
    );
}
