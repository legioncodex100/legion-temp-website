"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ClassItem {
    id: string;
    name: string;
    href: string;
    description: string;
    image: string;
}

const CLASS_CATEGORIES = {
    mens: {
        label: "Men's",
        classes: [
            { id: "mens-wrestling", name: "Wrestling", href: "/classes/mens-wrestling", description: "Takedowns, control, dominance", image: "/images/mens-wrestling/mens-wrestling-class_1.jpeg" },
            { id: "mens-bjj", name: "BJJ (Gi)", href: "/classes/mens-bjj", description: "Traditional Jiu-Jitsu in the Gi", image: "/images/mens-bjj/mens-bjj-class_1.jpeg" },
            { id: "mens-nogi", name: "No-Gi", href: "/classes/mens-no-gi", description: "Fast-paced submission grappling", image: "/images/mens-no-gi/mens-no-gi-class_2.jpeg" },
            { id: "mens-mma", name: "Mixed Martial Arts", href: "/classes/mens-mma", description: "Striking, wrestling & submissions", image: "/images/mens-mma/mens-mma-class_2.jpeg" },
        ]
    },
    womens: {
        label: "Women's",
        classes: [
            { id: "womens-bjj", name: "Ladies BJJ", href: "/classes/womens-bjj", description: "Strictly private, male-free environment", image: "/images/womens-bjj/womens-bjj-class_1.jpeg" },
            { id: "womens-judo", name: "Judo", href: "/classes/womens-judo", description: "Traditional Judo, male-free", image: "/images/womens-judo/womens-judo-class_1.jpeg" },
        ]
    },
    boys: {
        label: "Boys",
        classes: [
            { id: "boys-wrestling", name: "Wrestling", href: "/classes/boys-wrestling", description: "Discipline through wrestling", image: "/images/boys-wrestling/boys-wrestling-competition_3.jpeg" },
            { id: "boys-jiujitsu", name: "Jiu-Jitsu", href: "/classes/boys-jiu-jitsu", description: "Focus, problem solving, respect", image: "/images/boys-bjj/sparring.jpg" },
        ]
    },
    girls: {
        label: "Girls",
        classes: [
            { id: "girls-bjj", name: "Jiu Jitsu", href: "/classes/girls-bjj", description: "Empowerment in a private environment", image: "/images/girls-bjj/girls-bjj-class_1.jpeg" },
            { id: "girls-judo", name: "Girls Judo", href: "/classes/girls-judo", description: "Strictly private, BJA syllabus", image: "/images/girls-judo/girls-judo-class_1.jpeg" },
        ]
    },
};

type CategoryKey = keyof typeof CLASS_CATEGORIES;

export function BentoGrid() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("mens");
    const scrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 380;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
            setTimeout(checkScroll, 300);
        }
    };

    const categories = Object.keys(CLASS_CATEGORIES) as CategoryKey[];
    const currentClasses = CLASS_CATEGORIES[activeCategory].classes;

    const tabsRef = useRef<HTMLDivElement>(null);
    const [canScrollTabsLeft, setCanScrollTabsLeft] = useState(false);
    const [canScrollTabsRight, setCanScrollTabsRight] = useState(true);

    const checkTabsScroll = () => {
        if (tabsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
            setCanScrollTabsLeft(scrollLeft > 0);
            setCanScrollTabsRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px tolerance
        }
    };

    useEffect(() => {
        checkTabsScroll();
        window.addEventListener("resize", checkTabsScroll);
        return () => window.removeEventListener("resize", checkTabsScroll);
    }, []);

    const scrollTabs = (direction: "left" | "right") => {
        if (tabsRef.current) {
            const scrollAmount = 200;
            tabsRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
            // Check scroll state after animation (approximate)
            setTimeout(checkTabsScroll, 300);
        }
    };

    return (
        <section className="w-full bg-black py-24 px-6 lg:px-12 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/30">
                    Programs / 01
                </span>
                <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-[-0.05em] text-white leading-none">
                    Select Your <br />
                    Discipline.
                </h2>
            </div>

            {/* Category Tabs Wrapper */}
            <div className="relative group/tabs mb-10 w-full max-w-3xl">
                {/* Left Arrow */}
                {canScrollTabsLeft && (
                    <button
                        onClick={() => scrollTabs("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-8 w-8 bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 md:hidden animate-in fade-in zoom-in duration-300"
                    >
                        <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollTabsRight && (
                    <button
                        onClick={() => scrollTabs("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-8 w-8 bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 active:scale-95 md:hidden animate-in fade-in zoom-in duration-300"
                    >
                        <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                )}

                {/* Gradient Fades for Mobile */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none md:hidden transition-opacity duration-300", canScrollTabsLeft ? "opacity-100" : "opacity-0")} />
                <div className={cn("absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none md:hidden transition-opacity duration-300", canScrollTabsRight ? "opacity-100" : "opacity-0")} />

                {/* Tabs Container */}
                <div
                    ref={tabsRef}
                    onScroll={checkTabsScroll}
                    className="flex items-center gap-1 border-b border-white/10 pb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 overflow-x-auto scrollbar-hide w-full scroll-smooth"
                >
                    {categories.map((key, idx) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={cn(
                                "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shrink-0 whitespace-nowrap",
                                activeCategory === key
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white/50 hover:text-white border border-white/10 hover:border-white/30"
                            )}
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            {CLASS_CATEGORIES[key].label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Cards */}
            <div className="relative group/container">


                {/* Scroll Buttons */}
                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-black/90 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:scale-110",
                        !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}
                >
                    <ChevronLeft className="h-6 w-6 text-white hover:text-black" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className={cn(
                        "absolute right-0 top-1/2 -translate-y-1/2 z-20 h-14 w-14 bg-black/90 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:scale-110",
                        !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
                    )}
                >
                    <ChevronRight className="h-6 w-6 text-white hover:text-black" />
                </button>

                {/* Gradient Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {currentClasses.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group relative flex-shrink-0 w-[340px] h-[400px] border border-white/10 bg-zinc-950 overflow-hidden transition-all duration-500 hover:border-white/40 hover:scale-[1.02] animate-in fade-in slide-in-from-right-8 duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover opacity-40 grayscale group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                            </div>

                            {/* Number Badge */}
                            <div className="absolute top-6 left-6 text-[10px] font-black text-white/30 tracking-tighter z-10 group-hover:text-accent transition-colors duration-500">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Arrow */}
                            <div className="absolute top-6 right-6 h-12 w-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-white/10 z-10">
                                <ArrowUpRight className="h-5 w-5 text-white group-hover:rotate-45 transition-transform duration-300" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <h3 className="font-heading text-4xl font-black uppercase tracking-[-0.02em] text-white leading-[0.95] mb-3 group-hover:translate-x-2 transition-transform duration-500">
                                    {item.name}
                                </h3>
                                <p className="text-white/50 text-sm mb-6 group-hover:text-white/80 transition-colors duration-500 max-w-[280px]">
                                    {item.description}
                                </p>

                                {/* Animated Line */}
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors duration-500">
                                        Explore
                                    </span>
                                    <div className="h-[2px] w-0 bg-accent group-hover:w-20 transition-all duration-700" />
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.15),transparent_60%)]" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 animate-in fade-in duration-700 delay-500">
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
                    * All classes guided by certified instructors
                </p>
                <Link href="/timetable" className="group text-white font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2 hover:text-accent transition-colors">
                    Full Timetable
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </section>
    );
}
