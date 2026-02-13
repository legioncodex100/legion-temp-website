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
import { Check, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function WomensBJJPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/womens-bjj/womens-bjj-class_1.jpeg"
                        alt="Ladies-Only Jiu Jitsu"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-pink-500/80 bg-black/50 backdrop-blur-sm">
                        Ladies-Only Jiu Jitsu (16+)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Technical Mastery.<br />Absolute Privacy.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10 hidden md:block">
                        Master the art of Brazilian Jiu Jitsu in a strictly male-free, closed-mat environment. A structured, technical program designed for women seeking empowerment, self-defense, and elite-level fitness.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            BOOK A FREE ADULT TRIAL
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mobile-Only Text Section */}
            <section className="md:hidden bg-zinc-950 px-6 py-12 border-b border-white/10 relative z-20">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-base text-zinc-300 font-medium leading-relaxed mb-8">
                        Master the art of Brazilian Jiu Jitsu in a strictly male-free, closed-mat environment. A structured, technical program designed for women seeking empowerment, self-defense, and elite-level fitness.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link href="/free-trial/adults" className="w-full">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest h-14 rounded-none">
                                BOOK A FREE ADULT TRIAL
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. WHO IS THIS FOR? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                        The Profile
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Who is this for?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        Our Ladies-Only Jiu Jitsu program is built for women who value a focused, ego-free, and private training space.
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-2">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "The Total Beginner",
                            desc: "Most of our members start with zero experience. We break down the \"Human Chess\" of Jiu Jitsu into safe, logical steps so you can build your confidence from your very first session."
                        },
                        {
                            title: "The Self-Defense Seeker",
                            desc: "Learn how to use leverage, timing, and technique to overcome size and strength. We focus on real-world scenarios and the physical mechanics of control."
                        },
                        {
                            title: "The Busy Professional",
                            desc: "Escape the stress of the day. Jiu Jitsu requires total mental focus, making it the perfect moving meditation and an incredible functional workout."
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

            {/* 3. CLOSED MAT POLICY */}
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
                            <h4 className="font-bold text-white uppercase text-sm mb-2">Private Training Space</h4>
                            <p className="text-sm text-zinc-400">During these sessions, the mat area and viewing area are strictly reserved for female students, female coaching staff, and female spectators only.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-2">Respecting the Environment</h4>
                            <p className="text-sm text-zinc-400">We ask that male partners, friends, or family members drop off at the academy entrance. This policy is non-negotiable and ensures a dedicated, private space.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. SENIOR RANK PATHWAY */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Senior Rank Pathway
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            At Legion, progress is intentional. We follow the traditional Jiu Jitsu ranking system, where every belt represents a significant milestone in your development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { name: "White Belt", focus: "Focus on survival, fundamental escapes, and basic guard structures.", color: "border-t-4 border-t-zinc-200" },
                            { name: "Blue Belt", focus: "Mastery of fundamental control, positional escapes, and primary submissions.", color: "border-t-4 border-t-blue-600" },
                            { name: "Purple Belt", focus: "Development of signature systems and advanced transitions.", color: "border-t-4 border-t-purple-600" },
                            { name: "Brown & Black", focus: "Technical mastery and the ability to refine and teach the art.", color: "border-t-4 border-t-amber-800" },
                        ].map((award, i) => (
                            <div key={i} className={`bg-zinc-950 p-6 border border-white/5 ${award.color}`}>
                                <h3 className="font-heading text-lg font-bold uppercase text-white mb-3">{award.name}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{award.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. GRADING & STRIPES */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-4">
                            The 4-Stripe System
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            Each belt level features 4 stripes to mark incremental progress.
                        </p>
                        <div className="bg-black border border-white/10 p-6">
                            <h4 className="text-white font-bold uppercase text-sm mb-2">Rewarding Consistency</h4>
                            <p className="text-sm text-zinc-500">At the White Belt level, stripes are used primarily to reward consistency and dedication to training. We want to celebrate you showing up and putting in the work.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-4">
                            Technical Grading
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            To move to the next belt rank, you must complete the required training time and pass a formal Grading.
                        </p>
                        <div className="bg-black border border-white/10 p-6">
                            <h4 className="text-white font-bold uppercase text-sm mb-2">The Progression Standard</h4>
                            <p className="text-sm text-zinc-500">Mastery takes time. Each belt represents a minimum of 1.5 years (18 months) of consistent training (twice per week) to ensure you truly own the skills.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. STARTER GUIDE */}
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
                                        <h4 className="text-white font-bold uppercase text-sm">The Uniform</h4>
                                        <p className="text-sm text-zinc-500 mt-1">A Jiu Jitsu Gi (Kimono) is required. For trials, t-shirt and leggings (no zips) are fine. 2-week grace period to get a Gi.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Footwear</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Bare feet on the mats. Flip-flops/sliders for off-mat areas.</p>
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

            {/* 7. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8">
                        Ladies-Only Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4488902b9"
                        />
                        <Script
                            src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                            strategy="afterInteractive"
                        />
                    </div>
                </div>
            </Section>

            {/* 8. FAQ */}
            <Section className="bg-black">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8 text-center">
                        Common Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Do I need to be fit to start?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                No. You get fit by doing Jiu Jitsu. The classes are designed to build your conditioning and strength progressively.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Is it safe?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Safety is our priority. We teach you how to "tap out" (concede) early and how to look after your training partners so everyone can keep learning.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if I'm ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Your attendance is tracked automatically. Once you hit the required hours (minimum 1.5 years per belt) and the coach has assessed your technical proficiency in class, you will be invited to the next Grading.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-12 flex justify-center">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            BOOK A FREE ADULT TRIAL
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
