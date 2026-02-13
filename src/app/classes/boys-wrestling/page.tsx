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
import { Badge } from "lucide-react"; // Using Badge icon as placeholder for awards if needed, or just text
import { Check, Calendar, MapPin, Info } from "lucide-react";
import { ClassGallery } from "@/components/features/class-gallery";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function BoysWrestlingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/boys-wrestling/boys-wrestling-class_1.jpeg"
                        alt="Boys Wrestling Training"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-white/60 bg-black/50 backdrop-blur-sm">
                        Boys Wrestling (Under 16)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Coordination.<br />Resilience.<br />Grit.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10 hidden md:block">
                        Give your child the Legion advantage. A high-energy, supportive environment where children build a physical foundation for life through our structured Youth Award system.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            CLAIM A FREE YOUTH TRIAL
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-zinc-500 max-w-md mx-auto hidden md:block">
                        <span className="text-white font-bold uppercase text-xs tracking-wider block mb-1">Parent Note</span>
                        Manage your family, sign waivers, and book classes from one simple profile.
                    </p>

                    <div className="mt-6 hidden md:flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600">Affiliated with</span>
                        <div className="relative w-32 h-16 opacity-50 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/affiliations/british-wrestling-white.png"
                                alt="British Wrestling"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile-Only Text Section */}
            <section className="md:hidden bg-zinc-950 px-6 py-12 border-b border-white/10 relative z-20">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-base text-zinc-300 font-medium leading-relaxed mb-8">
                        Give your child the Legion advantage. A high-energy, supportive environment where children build a physical foundation for life through our structured Youth Award system.
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

            {/* 2. WHY WRESTLING? (The Big Three) */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                        The Methodology
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Why Wrestling for Kids?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        We believe Wrestling is the most effective vehicle for physical education. At Legion, we use the mats to teach the "Big Three" of youth development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Coordination",
                            desc: "Building the balance, body awareness, and functional strength that carries over into every other sport."
                        },
                        {
                            title: "Resilience",
                            desc: "Learning how to fall safely, stay calm under pressure, and get back up with confidence."
                        },
                        {
                            title: "Grit",
                            desc: "Developing the focus, discipline, and work ethic that leads to success in and out of the academy."
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

            {/* 3. TRAINING IN ACTION */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8 text-center">
                        Training in Action
                    </h2>
                    <ClassGallery
                        images={[
                            { src: "/images/boys-wrestling/boys-wrestling-class_1.jpeg", alt: "Boys wrestling training - drilling technique" },
                            { src: "/images/boys-wrestling/boys-wrestling-competition_1.jpeg", alt: "Boys wrestling competition match" },
                            { src: "/images/boys-wrestling/boys-wrestling-class_5.jpeg", alt: "Group training session" },
                            { src: "/images/boys-wrestling/boys-wrestling-class_7.jpeg", alt: "Technique demonstration" },
                            { src: "/images/boys-wrestling/boys-wrestling-competition_2.jpeg", alt: "Competition podium" },
                            { src: "/images/boys-wrestling/boys-wrestling-class_8.jpeg", alt: "Team photo with medals" },
                        ]}
                    />
                </div>
            </Section>

            {/* 4. YOUTH AWARD ROADMAP */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Youth Award Roadmap
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-3xl">
                            We don’t believe in "random" play. Every child at Legion follows a visible, structured path of progression. Our syllabus is broken down into four major series.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                color: "border-l-4 border-l-zinc-500",
                                series: "Grey Series",
                                focus: "Foundation",
                                desc: "Focus on movement, safety, and basic body control.",
                                awards: ["Grey White Award", "Grey Award", "Grey Black Award"]
                            },
                            {
                                color: "border-l-4 border-l-yellow-500",
                                series: "Yellow Series",
                                focus: "Fundamentals",
                                desc: "Introduction to primary takedowns and control ties.",
                                awards: ["Yellow White Award", "Yellow Award", "Yellow Black Award"]
                            },
                            {
                                color: "border-l-4 border-l-orange-500",
                                series: "Orange Series",
                                focus: "Transitions",
                                desc: "Mastering escapes and positional dominance on the mat.",
                                awards: ["Orange White Award", "Orange Award", "Orange Black Award"]
                            },
                            {
                                color: "border-l-4 border-l-green-600",
                                series: "Green Series",
                                focus: "Performance",
                                desc: "Advanced technical sequencing and competition-ready drilling.",
                                awards: ["Green White Award", "Green Award", "Green Black Award"]
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

                    <div className="mt-12 p-8 bg-zinc-900/50 border border-white/5 rounded-sm">
                        <h4 className="font-heading text-lg font-bold uppercase text-white mb-2">How Grading Works</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Progress is earned through consistency and technical skill. To move to the next award, a student must complete the required training time and pass a formal Grading once the coach has assessed their proficiency in class.
                        </p>
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
                            We’ve made the admin simple so you can focus on your child’s training.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Registration */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">Easy Registration</h3>
                            </div>
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">One-Profile Management</h4>
                                    <p className="text-sm text-zinc-400">Create one parent account and add all your children as dependents. You can manage their bookings and waivers from a single login.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">No-Front-Desk Policy</h4>
                                    <p className="text-sm text-zinc-400">Please ensure you have registered, signed the digital waiver, and booked the class online before arriving.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Check-In</h4>
                                    <p className="text-sm text-zinc-400">On arrival, head straight to the mat entrance. Our coaches will check your child in via our digital roster.</p>
                                </div>
                            </div>
                        </div>

                        {/* What to Need */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">What Your Child Needs</h3>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-4 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Clothing</h4>
                                    <p className="text-sm text-zinc-400">A comfortable t-shirt and shorts or jogging bottoms (no zips, buttons, or pockets).</p>
                                </div>
                                <div className="p-4 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Footwear</h4>
                                    <p className="text-sm text-zinc-400">Bare feet or clean socks on the mats for trial. Wrestling boots required for long-term training.</p>
                                </div>
                                <div className="p-4 bg-zinc-950 border border-white/10 sm:col-span-2">
                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">Essentials</h4>
                                    <p className="text-sm text-zinc-400">A water bottle labeled with your child’s name.</p>
                                </div>
                            </div>
                        </div>

                        {/* Spectator Policy */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-heading text-xl font-bold uppercase text-white">Spectator Policy</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    Parents are welcome to stay and watch the session from our designated viewing area. We find that having parents present to support their children's progress helps build a strong community atmosphere at the academy. We just ask that you stay within the viewing area to keep the mat space clear for the athletes and do not distract or intervene in the class.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8">
                        Boys Wrestling Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4482102b9"
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
                                Is it safe for my child?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Safety is our priority. Our grading system ensures children only move into live wrestling once they have mastered falling safely and demonstrated basic body control.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How often should they train?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                For steady progress through the awards, we recommend a consistent frequency of twice per week.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Can I watch the class?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Yes, parents are welcome to watch from our designated seating area. We ask that spectators do not enter the mat area during training.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>
        </div>
    );
}
