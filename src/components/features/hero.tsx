"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "@/data/hero-slides";

import React, { memo } from "react";

// Memoized Healcode Widget to prevent re-renders when parent state changes (e.g., image slider)
const HealcodeWidget = memo(() => (
    <div
        className="[&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:hover:bg-black [&_.healcode-pricing-option-text-link]:hover:text-white [&_.healcode-pricing-option-text-link]:border [&_.healcode-pricing-option-text-link]:border-white [&_.healcode-pricing-option-text-link]:h-12 [&_.healcode-pricing-option-text-link]:px-6 [&_.healcode-pricing-option-text-link]:text-[10px] [&_.healcode-pricing-option-text-link]:font-black [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:tracking-[0.2em] [&_.healcode-pricing-option-text-link]:rounded-none [&_.healcode-pricing-option-text-link]:transition-all [&_.healcode-pricing-option-text-link]:duration-300 [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center"
        dangerouslySetInnerHTML={{
            __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="START A FREE TRIAL (16+)" />`
        }}
    />
));
HealcodeWidget.displayName = "HealcodeWidget";

const MobileHealcodeWidget = memo(() => (
    <div
        className="[&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:hover:bg-black [&_.healcode-pricing-option-text-link]:hover:text-white [&_.healcode-pricing-option-text-link]:border [&_.healcode-pricing-option-text-link]:border-white [&_.healcode-pricing-option-text-link]:h-14 [&_.healcode-pricing-option-text-link]:w-full [&_.healcode-pricing-option-text-link]:px-6 [&_.healcode-pricing-option-text-link]:text-[10px] [&_.healcode-pricing-option-text-link]:font-black [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:tracking-[0.2em] [&_.healcode-pricing-option-text-link]:rounded-none [&_.healcode-pricing-option-text-link]:transition-all [&_.healcode-pricing-option-text-link]:duration-300 [&_.healcode-pricing-option-text-link]:flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center"
        dangerouslySetInnerHTML={{
            __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="START A FREE TRIAL (16+)" />`
        }}
    />
));
MobileHealcodeWidget.displayName = "MobileHealcodeWidget";

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Shuffle slides on mount to give variety? 
    // For now, linear is fine as defined in data file.
    const slides = HERO_SLIDES;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[currentImageIndex];

    return (
        <>
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pb-24 pt-40 md:pt-32">
                {/* Background Image Carousel */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <motion.div
                            className="relative w-full h-full"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "easeOut" }} // Ken Burns effect
                        >
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.alt}
                                fill
                                className="object-cover object-center grayscale opacity-40"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Background Texture/Grain is global in layout */}

                {/* Visual Tension Elements - Fragmented Layers */}
                <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[20vw] h-[20vw] bg-white/[0.01] blur-[80px] rounded-full pointer-events-none" />

                {/* Massive Typographic Headline */}
                <div className="relative z-10 w-full px-6 flex flex-col items-center">
                    <div className="flex flex-col items-center space-y-0 text-center">
                        <div className="h-6 mb-6 overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentSlide.image} // Changed from name to image for uniqueness
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 block"
                                >
                                    {currentSlide.title}
                                </motion.span>
                            </AnimatePresence>
                        </div>

                        <h1 className="font-heading font-black text-6xl md:text-[7vw] leading-[0.85] uppercase tracking-[-0.04em] text-white flex flex-col">
                            <span className="relative inline-block animate-in fade-in slide-in-from-left-20 duration-1000">
                                Progress by
                            </span>
                            <span className="relative inline-block -mt-2 md:-mt-[0.5vw] animate-in fade-in slide-in-from-right-20 duration-1000 delay-200">
                                Design.
                            </span>
                        </h1>
                    </div>

                    <div className="mt-12 w-full max-w-5xl flex flex-col md:flex-row items-end justify-between gap-12 px-4">
                        <div className="max-w-xl text-left hidden md:block">
                            <h2 className="text-2xl md:text-3xl font-heading font-black uppercase text-white mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                                Belonging by Nature.
                            </h2>
                            <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                                East London’s most vibrant home for Wrestling, Jiu Jitsu, Judo, and MMA. A high-energy, supportive space where adults find their potential and children build a foundation for life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
                                <HealcodeWidget />
                                <Link href="/free-trial/kids">
                                    <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black h-12 px-6 text-[10px] font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300">
                                        KIDS & TEENS INTRO (&lt;16)
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col items-end text-right space-y-4 animate-in fade-in duration-1000 delay-1000">
                            <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-[9px]">
                                <span>Join 200+ Athletes</span>
                                <div className="h-1 w-1 bg-white/40 rounded-full" />
                                <span>Serving E10 Since 2012</span>
                            </div>
                            <div className="flex flex-wrap justify-end gap-3 text-white/20 font-bold uppercase tracking-wider text-[8px]">
                                <span>British Wrestling</span>
                                <span className="text-white/10">|</span>
                                <span>IBJJF</span>
                                <span className="text-white/10">|</span>
                                <span>UKBJJA</span>
                                <span className="text-white/10">|</span>
                                <span>BJA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-in fade-in duration-1000 delay-[1500ms]">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
                    <ArrowDown className="h-4 w-4 text-white/40 animate-bounce" />
                </div>
            </section>

            {/* Mobile-Only Text Section */}
            <section className="md:hidden bg-black px-6 py-12 border-b border-white/10 relative z-20">
                <div className="max-w-xl text-left">
                    <h2 className="text-2xl font-heading font-black uppercase text-white mb-4">
                        Belonging by Nature.
                    </h2>
                    <p className="text-base text-zinc-400 font-medium leading-relaxed mb-8">
                        East London’s most vibrant home for Wrestling, Jiu Jitsu, Judo, and MMA. A high-energy, supportive space where adults find their potential and children build a foundation for life.
                    </p>
                    <div className="flex flex-col gap-4">
                        <MobileHealcodeWidget />
                        <Link href="/free-trial/kids" className="w-full">
                            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-black uppercase tracking-widest h-14 rounded-none">
                                KIDS & TEENS INTRO (&lt;16)
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
