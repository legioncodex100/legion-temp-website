"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageCyclerProps {
    images: { src: string; alt: string }[];
    interval?: number;
    className?: string;
    imageClassName?: string;
}

export function ImageCycler({ images, interval = 4000, className, imageClassName }: ImageCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        className={cn("object-cover", imageClassName)}
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
