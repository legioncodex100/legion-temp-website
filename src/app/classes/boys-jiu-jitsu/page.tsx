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

// Gallery images
const GALLERY_IMAGES = [
    { src: "/images/boys-bjj/hero.jpg", alt: "Legion student receiving yellow belt", caption: "Grading technical grading" },
    { src: "/images/boys-bjj/class-2.jpg", alt: "Focus during technique demonstration", caption: "Learning from the best" },
    { src: "/images/boys-bjj/class-3.jpg", alt: "Kids drilling BJJ techniques", caption: "Technical excellence" },
    { src: "/images/boys-bjj/class-4.jpg", alt: "Group training session", caption: "Team spirit" },
    { src: "/images/boys-bjj/sparring.jpg", alt: "Adam receiving his orange belt", caption: "Adam receives his orange belt" },
    { src: "/images/boys-bjj/competition.jpg", alt: "Legion students on the podium", caption: "Grappling Industries 2025 - 1st place" },
    { src: "/images/boys-bjj/grading-1.jpg", alt: "Coach tying belt", caption: "Akari receives his orange belt" },
    { src: "/images/boys-bjj/grading-2.jpg", alt: "Belt grading ceremony", caption: "Progress through the ranks" },
];

export default function BoysBJJPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            {/* 1. HERO SECTION - Mobile: Text at bottom, Desktop: Center */}
            <section className="relative min-h-[80vh] flex items-end md:items-center justify-center overflow-hidden bg-zinc-950 pt-32 pb-20 md:pb-0">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/boys-bjj/hero.jpg"
                        alt="Boys Jiu Jitsu Training"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Enhanced gradient for mobile bottom text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 md:via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6 text-white/60 bg-black/50 backdrop-blur-sm">
                        Boys Jiu Jitsu (Under 16)
                    </span>
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Coordination.<br />Resilience.<br />Character.
                    </h1>
                    {/* Description hidden on mobile to uncover hero image */}
                    <p className="hidden md:block text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-8 md:mb-10">
                        Give your son the Legion advantage. A high-energy, supportive environment where boys build life-long confidence and problem-solving skills through our structured Youth Jiu Jitsu syllabus.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/free-trial/kids">
                            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                                CLAIM A FREE YOUTH TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="hidden md:block mt-6 text-sm text-zinc-500 max-w-md mx-auto">
                        <span className="text-white font-bold uppercase text-xs tracking-wider block mb-1">Parent Note</span>
                        Family-First Management. Register, sign waivers, and book classes for all your children from one simple, shared profile.
                    </p>

                    <div className="hidden md:flex mt-6 flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600">Member of</span>
                        <div className="relative w-24 h-24 opacity-60 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/affiliations/ukbjja.png"
                                alt="UKBJJA"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile-Only Text Section */}
            <section className="md:hidden bg-zinc-950 px-6 py-12 border-b border-white/10 relative z-20">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-base text-zinc-300 font-medium leading-relaxed mb-8">
                        Give your son the Legion advantage. A high-energy, supportive environment where boys build life-long confidence and problem-solving skills through our structured Youth Jiu Jitsu syllabus.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link href="/free-trial/kids" className="w-full">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest h-14 rounded-none">
                                CLAIM A FREE YOUTH TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Family-First Management. One shared profile for all kids.</span>
                    </p>
                </div>
            </section>

            {/* PHOTO GALLERY - Right after hero */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            Moments
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                            Life at Legion
                        </h2>
                        <p className="text-zinc-400 mt-4">Training, grading, and competition highlights</p>
                    </div>
                    <ClassGallery images={GALLERY_IMAGES} />
                </div>
            </Section>

            {/* 2. WHY JIU JITSU? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                        Human Chess
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Why Jiu Jitsu for Your Son?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        At Legion, we believe Jiu Jitsu is the ultimate vehicle for physical and mental development. We call it "Human Chess" because it teaches boys to use their minds to solve physical problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Building Resilience",
                            desc: "Your son will learn how to stay calm under pressure, find technical solutions to challenges, and get back up with confidence every time."
                        },
                        {
                            title: "Elite Coordination",
                            desc: "We develop the balance, flexibility, and body awareness that serve as a foundation for every other sport he may play."
                        },
                        {
                            title: "Discipline & Respect",
                            desc: "We foster a \"no-ego\" environment where progress is earned through hard work and respect for coaches and training partners."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/10 bg-zinc-950 hover:border-white/30 transition-colors group">
                            <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. YOUTH RANK ROADMAP */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Youth Rank Roadmap
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-3xl">
                            We replace "random play" with a clear, visible path of progression. Every child follows the official Jiu Jitsu youth belt system, providing them with tangible goals to work toward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                color: "border-l-4 border-l-zinc-500",
                                series: "Grey Series",
                                focus: "The Foundation",
                                desc: "Focus on safe movement, breakfalls, and basic body control.",
                                awards: ["Grey-White Belt", "Grey Belt", "Grey-Black Belt"]
                            },
                            {
                                color: "border-l-4 border-l-yellow-500",
                                series: "Yellow Series",
                                focus: "The Fundamentals",
                                desc: "Introduction to primary sweeps, control positions, and teamwork.",
                                awards: ["Yellow-White Belt", "Yellow Belt", "Yellow-Black Belt"]
                            },
                            {
                                color: "border-l-4 border-l-orange-500",
                                series: "Orange Series",
                                focus: "The Transitions",
                                desc: "Mastering the flow between positions and building defensive confidence.",
                                awards: ["Orange-White Belt", "Orange Belt", "Orange-Black Belt"]
                            },
                            {
                                color: "border-l-4 border-l-green-600",
                                series: "Green Series",
                                focus: "The Performance",
                                desc: "Advanced technical sequencing and developing a focused, competition-ready mindset.",
                                awards: ["Green-White Belt", "Green Belt", "Green-Black Belt"]
                            }
                        ].map((level, i) => (
                            <div key={i} className={`bg-black border border-white/10 p-8 ${level.color} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                                <div className="md:w-1/3">
                                    <h3 className="font-heading text-2xl font-black uppercase text-white mb-1">{level.series}</h3>
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">{level.focus}</span>
                                </div>
                                <div className="md:w-1/3">
                                    <p className="text-sm text-zinc-400">{level.desc}</p>
                                </div>
                                <div className="md:w-1/3 flex flex-wrap gap-2 justify-start md:justify-end">
                                    {level.awards.map((award, j) => (
                                        <span key={j} className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-900 border border-white/10 rounded-sm text-zinc-300">
                                            {award}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. GRADING & STRIPES (New Section) */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase text-white mb-6">
                            The 4-Stripe System
                        </h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Every belt features 4 stripes. These act as intermediate milestones so your son can see his progress in real-time.
                        </p>
                        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-sm">
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-2">Rewarding Consistency</h4>
                            <p className="text-sm text-zinc-500">
                                At the White Belt level, stripes are specifically used to reward regular attendance and effort. We want to celebrate his commitment to the mats from day one.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase text-white mb-6">
                            Technical Grading
                        </h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            To move to a new belt color, students must pass a formal Grading.
                        </p>
                        <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-sm">
                            <h4 className="text-white font-bold uppercase text-sm tracking-wider mb-2">The Progression Standard</h4>
                            <p className="text-sm text-zinc-500">
                                Mastery takes time. Each belt represents a minimum of 1 year of consistent training (twice per week). This ensures your child actually owns the skills before they move up.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. PARENT'S STARTER GUIDE */}
            <Section className="bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                            Getting Started
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Parent’s Starter Guide
                        </h2>
                        <p className="text-zinc-400">
                            We’ve removed the admin hurdles so you can focus on your child’s experience.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Registration */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">Effortless Registration & Arrival</h3>
                            </div>
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">The Parent Portal</h4>
                                    <p className="text-sm text-zinc-400">Create one master account for yourself and add your children as dependents. No need for multiple logins or repetitive paperwork.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">No-Front-Desk Policy</h4>
                                    <p className="text-sm text-zinc-400">To keep the academy focused on training, please ensure you have registered, signed the waiver, and booked the class online before arriving.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Check-In</h4>
                                    <p className="text-sm text-zinc-400">On arrival, head straight to the mats. Our coaches will check your son in via our digital roster—you don't need to queue at a desk.</p>
                                </div>
                            </div>
                        </div>

                        {/* What to Need */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">What Your Son Needs</h3>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-4 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">The Uniform</h4>
                                    <p className="text-sm text-zinc-400">A Jiu Jitsu Gi (Kimono) is required. For the trial, a comfortable t-shirt and shorts/jogging bottoms (no zips or pockets) are fine. You then have a 2-week window after the trial to acquire his Gi.</p>
                                </div>
                                <div className="p-4 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Essentials</h4>
                                    <p className="text-sm text-zinc-400">A water bottle labeled with his name.</p>
                                </div>
                            </div>
                        </div>

                        {/* Spectator Policy */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">Spectator & Viewing Policy</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    You are welcome to watch the session from our designated viewing area. We love having parents support their children's progress. We simply ask that you stay within the viewing area to keep the mat space clear and do not distract or "coach" your child during the class.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            Book Your Session
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4">
                            Boys Jiu-Jitsu Timetable
                        </h2>
                        <p className="text-zinc-400 text-sm">Select a class below to book directly</p>
                    </div>
                    <div className="w-full min-h-[500px] bg-zinc-900/50 border border-white/10 rounded-sm overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4488502b9"
                        />
                        <Script
                            src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                            strategy="afterInteractive"
                        />
                    </div>
                    <div className="mt-6 text-center">
                        <Link
                            href="/timetable"
                            className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
                        >
                            View full academy schedule →
                        </Link>
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
                                Is it safe for my son?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Safety is our absolute priority. We teach children how to fall safely and how to "tap out" (concede) early. Live wrestling only begins once a child has demonstrated the necessary maturity and control.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                What if my son is shy or not 'athletic'?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Most of our best students started that way. Jiu Jitsu is an individual journey in a group setting; he will progress at his own pace in a supportive, non-judgmental environment.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if he is ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Our system tracks his attendance automatically. Once he hits his 12-month minimum and the coach sees he has mastered the syllabus, you will receive an automated invitation to the next Grading.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>
        </div>
    );
}
