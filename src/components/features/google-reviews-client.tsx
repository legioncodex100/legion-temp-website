"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
    author_name: string;
    rating: number;
    text: string;
    relative_time_description: string;
    profile_photo_url: string | null;
}

export function GoogleReviewsClient({ reviews }: { reviews: Review[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full group">
            {/* Scroll Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                <button
                    onClick={() => scroll("left")}
                    className="w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                <button
                    onClick={() => scroll("right")}
                    className="w-12 h-12 rounded-full bg-zinc-900/80 backdrop-blur-md border border-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Gradient Masks (Subtler for interactivity) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none md:w-32" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none md:w-32" />

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-32 scrollbar-hide select-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {reviews.map((review, idx) => (
                    <div
                        key={`${review.author_name}-${idx}`}
                        className="snap-center bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 w-[300px] md:w-[400px] shrink-0 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-500 group/card rounded-sm"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center font-bold text-amber-500/80 group-hover/card:text-amber-400 transition-colors overflow-hidden">
                                    {review.profile_photo_url ? (
                                        <Image
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        review.author_name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm group-hover/card:text-amber-500 transition-colors">{review.author_name}</div>
                                    <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">{review.relative_time_description}</div>
                                </div>
                            </div>
                            <div className="bg-[#fbce07]/10 p-1.5 rounded-sm opacity-50 group-hover/card:opacity-100 transition-opacity">
                                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}`} />
                            ))}
                        </div>

                        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4 group-hover/card:text-zinc-300 transition-colors">
                            "{review.text}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
