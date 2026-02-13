"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data - Replace with API or more curated reviews later
const REVIEWS = [
    {
        id: 1,
        author: "Sarah Jenkins",
        rating: 5,
        text: "Legion changed my life. I was nervous about starting BJJ as a woman, but the Ladies program is incredibly supportive. The coaches are world-class.",
        date: "2 weeks ago",
        initial: "S"
    },
    {
        id: 2,
        author: "Michael Chen",
        rating: 5,
        text: "Best grappling gym in East London. The wrestling instruction is top tier - verified catch wrestling techniques that actually work.",
        date: "1 month ago",
        initial: "M"
    },
    {
        id: 3,
        author: "David Miller",
        rating: 5,
        text: "Great atmosphere, no egos. Just hard work and technical training. Highly recommend for anyone wanting to learn properly.",
        date: "3 months ago",
        initial: "D"
    },
    {
        id: 4,
        author: "Emma Thompson",
        rating: 5,
        text: "My daughter loves the Girls Judo class. Her confidence has grown so much. The coaches are amazing with the kids.",
        date: "1 month ago",
        initial: "E"
    },
    {
        id: 5,
        author: "James Wilson",
        rating: 5,
        text: "Dropped in while visiting London. Welcoming crew and high level rolls. Will be back.",
        date: "5 months ago",
        initial: "J"
    }
];

export function GoogleReviews() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPos = 0;
        const speed = 0.5; // Pixels per frame

        const scroll = () => {
            if (!isHovered && scrollContainer) {
                scrollPos += speed;
                // Reset if reached end of original content (since we duplicate for infinite loop)
                if (scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollPos = 0;
                }
                scrollContainer.scrollLeft = scrollPos;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered]);

    return (
        <section className="bg-zinc-950 py-24 px-6 border-b border-white/10 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white p-1.5 rounded-sm">
                            {/* Google 'G' Logo SVG */}
                            <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                            Excellent
                        </span>
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3 h-3 text-[#fbce07] fill-[#fbce07]" />
                            ))}
                        </div>
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Member<br />Experiences
                    </h2>
                </div>

                <div className="text-right hidden md:block">
                    <div className="text-4xl font-black text-white">4.9</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Based on 120+ Reviews</div>
                </div>
            </div>

            {/* Scrolling Review Cards */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-hidden"
                    style={{ width: "100%" }}
                >
                    {/* Render reviews twice for infinite scroll Loop */}
                    {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className="bg-zinc-900/50 border border-white/10 p-8 w-[350px] md:w-[400px] shrink-0 hover:border-white/20 transition-colors duration-300 group select-none cursor-default"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center font-bold text-white/50 group-hover:text-white transition-colors">
                                        {review.initial}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{review.author}</div>
                                        <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">{review.date}</div>
                                    </div>
                                </div>
                                <div className="bg-[#fbce07]/10 p-1.5 rounded-sm">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 opacity-80" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#fbce07] fill-[#fbce07]" />
                                ))}
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4 group-hover:text-zinc-300 transition-colors">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
