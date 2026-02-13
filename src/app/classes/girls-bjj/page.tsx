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
import { Check, Shield, Users, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ClassGallery } from "@/components/features/class-gallery";

export default function GirlsBJJPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/girls-bjj/girls-bjj-class_1.jpeg"
                        alt="Girls-Only Jiu Jitsu"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-pink-500/80 bg-black/50 backdrop-blur-sm">
                        Girls-Only Jiu Jitsu (Under 16)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Empowerment.<br />Technique. Confidence.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10 hidden md:block">
                        Give your daughter the Legion advantage. A dedicated, strictly male-free environment where girls build life-long strength and problem-solving skills.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/free-trial/kids">
                            <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                                CLAIM A FREE GIRLS TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 max-w-md mx-auto hidden md:flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-pink-500" />
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Family-First Management. One shared profile for all kids.</span>
                    </p>

                    <div className="mt-6 hidden md:flex flex-col items-center gap-2">
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
                        Give your daughter the Legion advantage. A dedicated, strictly male-free environment where girls build life-long strength and problem-solving skills.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link href="/free-trial/kids" className="w-full">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest h-14 rounded-none">
                                CLAIM A FREE GIRLS TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Family-First Management. One shared profile for all kids.</span>
                    </p>
                </div>
            </section>

            {/* 2. WHY JIU JITSU? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                        The Benefits
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Why Jiu Jitsu?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        At Legion, we believe Jiu Jitsu is the ultimate tool for female empowerment. By focusing on leverage and technique rather than brute strength, we teach girls that they can overcome any obstacle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Developing Confidence",
                            desc: "Through the \"Human Chess\" of Jiu Jitsu, your daughter will learn to trust her intelligence and her body, building a self-assured mindset that carries into school and social life."
                        },
                        {
                            title: "A Supportive Sisterhood",
                            desc: "We foster a community of girls who lift each other up. Our sessions are high-energy and challenging, but always rooted in mutual respect and teamwork."
                        },
                        {
                            title: "Safety & Awareness",
                            desc: "Beyond the physical fitness, we teach the fundamentals of self-defense, giving girls the spatial awareness and defensive skills needed to stay safe."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/10 bg-zinc-950 hover:border-pink-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 group-hover:text-pink-500 transition-colors">{item.title}</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. TRAINING IN ACTION (New Gallery Section) */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-6">
                        The Experience
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                        Training in Action
                    </h2>
                </div>
                <ClassGallery
                    images={[
                        { src: "/images/girls-bjj/girls-bjj-class_1.jpeg", alt: "Girls Jiu Jitsu - Technique Demo", caption: "Technique Demonstration" },
                        { src: "/images/girls-bjj/girls-bjj-class_2.jpeg", alt: "Girls Jiu Jitsu - Partner Drills", caption: "Partner Drills" },

                        { src: "/images/girls-bjj/girls-bjj-class_4.jpeg", alt: "Girls Jiu Jitsu - Fun Warmups", caption: "Fun Warmups" },
                        { src: "/images/girls-bjj/girls-bjj-class_5.jpeg", alt: "Girls Jiu Jitsu - Team Spirit", caption: "Team Spirit" },
                    ]}
                />
            </Section>

            {/* 4. CLOSED MAT POLICY */}
            <Section className="bg-zinc-950 border-b border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center border border-pink-500/20 bg-pink-500/5 p-12 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-950 p-4 rounded-full border border-pink-500/20">
                        <Shield className="w-8 h-8 text-pink-500" />
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6 pt-4">
                        The Closed Mat Policy
                    </h2>
                    <h3 className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-8">Strictly Male-Free Environment</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-2">Male-Free Space</h4>
                            <p className="text-sm text-zinc-400">During these sessions, the mat area and viewing area are strictly reserved for female students, female coaching staff, and female spectators.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-2">Respecting the Environment</h4>
                            <p className="text-sm text-zinc-400">We ask that fathers, brothers, and male guardians drop off their children at the academy entrance. This policy is non-negotiable.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. YOUTH RANK ROADMAP */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Youth Rank Roadmap
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            We replace "random play" with a clear, visible path of progression. Every girl follows the official Jiu Jitsu youth belt system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { name: "Grey Series", focus: "Focus on safe movement, breakfalls, and basic body control.", color: "border-t-4 border-t-zinc-400" },
                            { name: "Yellow Series", focus: "Introduction to primary sweeps, control positions, and teamwork.", color: "border-t-4 border-t-yellow-400" },
                            { name: "Orange Series", focus: "Mastering the flow between positions and building defensive confidence.", color: "border-t-4 border-t-orange-500" },
                            { name: "Green Series", focus: "Advanced technical sequencing and building a competition-ready mindset.", color: "border-t-4 border-t-green-600" },
                        ].map((award, i) => (
                            <div key={i} className={`bg-zinc-950 p-6 border border-white/5 ${award.color}`}>
                                <h3 className="font-heading text-lg font-bold uppercase text-white mb-3">{award.name}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{award.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 6. GRADING & STRIPES */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-4">
                            The 4-Stripe System
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            Every belt features 4 stripes acting as intermediate milestones.
                        </p>
                        <div className="bg-black border border-white/10 p-6">
                            <h4 className="text-white font-bold uppercase text-sm mb-2">Rewarding Consistency</h4>
                            <p className="text-sm text-zinc-500">At the White Belt level, stripes are specifically used to reward regular attendance and effort. We want to celebrate her commitment to the mats from her very first month.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-4">
                            Technical Grading
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            To move to a new belt color, students must pass a formal Grading.
                        </p>
                        <div className="bg-black border border-white/10 p-6">
                            <h4 className="text-white font-bold uppercase text-sm mb-2">The Progression Standard</h4>
                            <p className="text-sm text-zinc-500">Mastery takes time. Each belt represents a minimum of 1 year of consistent training (twice per week). This ensures your daughter truly owns her skills.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 7. PARENT'S GUIDE */}
            <Section className="bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                            First Session
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Parent's Starter Guide
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* What to Wear & Bring */}
                        <div>
                            <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-4">What Your Daughter Needs</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">01</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">The Uniform</h4>
                                        <p className="text-sm text-zinc-500 mt-1">A Jiu Jitsu Gi (Kimono) is required. For trials, t-shirt/leggings (no zips) are fine. 2-week grace period.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Footwear</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Bare feet on the mats. Clean flip-flops or sliders for off-mat areas.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">03</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Essentials</h4>
                                        <p className="text-sm text-zinc-500 mt-1">A water bottle labeled with her name.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Registration & Arrival */}
                        <div>
                            <h3 className="font-heading text-xl font-bold uppercase text-white mb-6 border-b border-white/10 pb-4">Effortless Registration</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-sm mb-2">The Parent Portal</h4>
                                    <p className="text-sm text-zinc-500">Create one master account for yourself and add your children as dependents. No-Front-Desk Policy applies.</p>
                                </div>
                                <div className="p-6 bg-zinc-950 border border-white/10">
                                    <h4 className="text-white font-bold uppercase text-sm mb-2">Check-In</h4>
                                    <p className="text-sm text-zinc-500">On arrival, our female coaching team will check your daughter in via our digital roster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 8. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8">
                        Girls Jiu-Jitsu Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4488402b9"
                        />
                        <Script
                            src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                            strategy="afterInteractive"
                        />
                    </div>
                </div>
            </Section>

            {/* 9. FAQ */}
            <Section className="bg-black">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8 text-center">
                        Common Questions from Parents
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Can I stay and watch?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Yes! Mothers and female guardians are more than welcome to watch from our designated viewing area. In line with our Closed Mat Policy, we ask that male guardians drop off and collect at the entrance.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if she is ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Our system tracks attendance automatically. Once she hits her 12-month minimum and the coach sees she has mastered the syllabus, you will receive an invitation to the next Grading.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Will she have to roll with boys?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                No. This is a dedicated girls-only environment with female-led coaching.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-12 flex justify-center">
                        <Link href="/free-trial/kids">
                            <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                                CLAIM A FREE GIRLS TRIAL
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
