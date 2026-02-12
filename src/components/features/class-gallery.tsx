"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ClassGalleryProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    className?: string;
}

export function ClassGallery({ images, className }: ClassGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const goPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    if (images.length === 0) return null;

    return (
        <>
            {/* Gallery Grid */}
            <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4", className)}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className={cn(
                            "relative aspect-[4/3] overflow-hidden group cursor-pointer",
                            "border border-white/10 hover:border-white/30 transition-all duration-300",
                            // First image spans 2 columns on larger screens
                            index === 0 && images.length >= 3 && "md:col-span-2 md:row-span-2 md:aspect-[4/3]"
                        )}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Caption overlay on hover */}
                        {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm font-medium">{image.caption}</p>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        className="absolute left-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        className="absolute right-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Main image */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                            fill
                            className="object-contain"
                        />
                        {images[selectedIndex].caption && (
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                                <p className="text-white text-lg">{images[selectedIndex].caption}</p>
                            </div>
                        )}
                    </div>

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                                className={cn(
                                    "w-16 h-12 relative overflow-hidden border-2 transition-all",
                                    i === selectedIndex ? "border-white" : "border-white/30 opacity-60 hover:opacity-100"
                                )}
                            >
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
