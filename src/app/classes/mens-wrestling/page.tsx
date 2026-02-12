"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { ClassGallery } from "@/components/features/class-gallery";
import { ImageCycler } from "@/components/ui/image-cycler";

export default function MensWrestlingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/mens-wrestling/mens-wrestling-class_1.jpeg"
                        alt="Men's Wrestling Training"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    {/* Fallback color if image is missing/loading */}
                    <div className="absolute inset-0 bg-zinc-900/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-white/60 bg-black/50 backdrop-blur-sm">
                        Mens Wrestling (16+)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Progress by Design.<br />Master the Takedown.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        A high-energy, supportive environment for complete beginners and athletes looking to sharpen their edge.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/free-trial/adults">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                                BOOK A FREE ADULT TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 max-w-md mx-auto flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Join a team of focused, high-performance athletes.</span>
                    </p>
                </div>
            </section>

            {/* 2. WHO IS THIS FOR? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                        The Athlete Profile
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Who is this for?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        Wrestling at Legion is built for three specific types of athletes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "The Beginner",
                            desc: "No experience? No problem. We start with the absolute fundamentals—learning how to move, fall safely, and build functional strength without the ego."
                        },
                        {
                            title: "The Jiu Jitsu Athlete",
                            desc: "Take the \"struggle\" out of the stand-up. We help you develop the takedown precision and top-heavy pressure needed to dominate your matches."
                        },
                        {
                            title: "The MMA Fighter",
                            desc: "Build a cage-ready clinch. Our program focuses on the transitions between striking and grappling that are essential for the modern mixed martial artist."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/10 bg-zinc-950 hover:border-white/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 2.5 GALLERY */}
            {/* 2.5 GALLERY */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <ClassGallery
                        images={[
                            { src: "/images/mens-wrestling/mens-wrestling-class_1.jpeg", alt: "Men's Wrestling - Technique", caption: "Technical Instruction" },
                            { src: "/images/mens-wrestling/mens-wrestling-class_2.jpeg", alt: "Men's Wrestling - Sparring", caption: "Live Sparring" },
                            { src: "/images/mens-wrestling/mens-wrestling-class_3.jpeg", alt: "Men's Wrestling - Takedowns", caption: "Takedown Drills" },
                            { src: "/images/mens-wrestling/mens-wrestling-class_4.jpeg", alt: "Men's Wrestling - Group", caption: "Group Training" },
                            { src: "/images/mens-wrestling/mens-wrestling-class_5.jpeg", alt: "Men's Wrestling - Coaching", caption: "Expert Coaching" },
                            { src: "/images/mens-wrestling/mens-wrestling-class_6.jpeg", alt: "Men's Wrestling - Conditioning", caption: "Conditioning" },
                            { src: "/images/mens-wrestling/mens-wrestling-competition_1.jpeg", alt: "Men's Wrestling - Competition", caption: "Competition Prep" },
                            { src: "/images/mens-wrestling/mens-wrestling-competition_2.jpeg", alt: "Men's Wrestling - Podium", caption: "Team Success" },
                        ]}
                    />
                </div>
            </Section>

            {/* 3. TECHNICAL FRAMEWORK */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            Syllabus
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Four Pillars
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            Your training and eventual grading are based on proficiency in these core phases. We don't just "roll" - we train with intent.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { phase: "Feet Offensive", detail: "Takedowns, entries, and set-ups." },
                                { phase: "Feet Defensive", detail: "Stance, sprawling, and counter-wrestling." },
                                { phase: "Bottom Offensive", detail: "Dominant ground control and turns." },
                                { phase: "Bottom Defensive", detail: "Escapes, reversals, and positional safety." },
                            ].map((pillar, i) => (
                                <div key={i} className="bg-black border border-white/10 p-4">
                                    <h4 className="font-bold text-white uppercase text-sm mb-1">{pillar.phase}</h4>
                                    <p className="text-xs text-zinc-500">{pillar.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Image Placeholder */}
                    {/* Technical Drilling Images */}
                    <div className="aspect-[4/5] relative bg-zinc-900 border border-white/5 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block overflow-hidden">
                        <ImageCycler
                            images={[
                                { src: "/images/mens-wrestling/mens-wrestling-class_7.jpeg", alt: "Technical Wrestling Drills" },
                                { src: "/images/mens-wrestling/mens-wrestling-class_8.jpeg", alt: "Technical Wrestling Scramble" },
                            ]}
                            interval={4000}
                        />
                    </div>
                </div>
            </Section>

            {/* 4. SENIOR AWARD PATHWAY */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Senior Award Pathway
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            At Legion, progress is intentional. To move to the next level, you must complete the required training time and pass a formal Grading.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { name: "Blue Award", focus: "Fundamental scoring, movement, and defensive stance.", color: "border-t-4 border-t-blue-600" },
                            { name: "Purple Award", focus: "Signature series and international technical styles.", color: "border-t-4 border-t-purple-600" },
                            { name: "Brown Award", focus: "Chain wrestling and upper-body throws.", color: "border-t-4 border-t-amber-800" },
                            { name: "Black Award", focus: "Advanced technical mastery and elite scrambling.", color: "border-t-4 border-t-zinc-900" },
                        ].map((award, i) => (
                            <div key={i} className={`bg-zinc-950 p-8 border border-white/5 ${award.color}`}>
                                <h3 className="font-heading text-xl font-bold uppercase text-white mb-3">{award.name}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{award.focus}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-zinc-900/30 border border-white/5 rounded-sm max-w-3xl mx-auto text-center">
                        <h4 className="font-heading text-lg font-bold uppercase text-white mb-2">The Progression Standard</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Each grade represents a deep commitment to the art. Mastered over a minimum of 1.5 years (18 months), based on a consistent training frequency of twice per week.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 5. STARTER GUIDE */}
            <Section className="bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            First Session
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Starter Guide
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* What to Wear & Bring */}
                        <div>
                            <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-4">What to Wear & Bring</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">01</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Footwear</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Wrestling boots recommended (bare feet or clean socks are fine for trials).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Clothing</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Tight-fitting rash guard or t-shirt and athletic shorts (no zips/pockets).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">03</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Essentials & Etiquette</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Large water bottle, small towel. Short nails. No jewelry or piercings.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Arrival & Entry */}
                        <div>
                            <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-4">Arrival & Entry</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-sm mb-2">No-Front-Desk Policy</h4>
                                    <p className="text-sm text-zinc-500">Ensure you have registered, signed your waiver, and booked your class online before arriving.</p>
                                </div>
                                <div className="p-6 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-sm mb-2">Check-In</h4>
                                    <p className="text-sm text-zinc-500">Head straight to the mats and introduce yourself to the coach; your name will be on the digital roster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8">
                        Men's Wrestling Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4488702b9"
                        />
                        <Script
                            src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                            strategy="afterInteractive"
                        />
                    </div>
                </div>
            </Section>

            {/* 7. FAQ */}
            <Section className="bg-black">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8 text-center">
                        Common Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                I’ve never wrestled before—will I be out of my depth?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Not at all. Our Blue Award syllabus is designed specifically to build beginners from the ground up in a safe, ego-free way.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How will this help my Jiu Jitsu or MMA?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                We focus on the high-percentage takedowns and clinch work that translate directly to other grappling arts, ensuring you aren't just "pulling guard" by default.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if I'm ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Your attendance is tracked automatically. Once you hit the required mat-hours (accrued over 18 months) and your coach has assessed your technical proficiency in class, you will be invited to the next Grading.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Is it a friendly environment?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Absolutely. We train hard, but we prioritize the safety and progress of our teammates above all else.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>
        </div>
    );
}
