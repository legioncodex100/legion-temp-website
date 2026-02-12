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

export default function GirlsJudoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/girls-judo/girls-judo-class_1.jpeg"
                        alt="Girls Judo Training"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-pink-500/80 bg-black/50 backdrop-blur-sm">
                        Girls-Only Judo (Under 16)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Balance.<br />Coordination. Confidence.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Give your daughter the Legion advantage. A dedicated, strictly male-free environment where girls build a strong physical foundation through the official British Judo Association (BJA) syllabus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            CLAIM A FREE GIRLS TRIAL
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 max-w-md mx-auto flex items-center justify-center gap-2">
                        <Users className="w-4 h-4 text-pink-500" />
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Family-First Management. One shared profile for all kids.</span>
                    </p>
                </div>
            </section>

            {/* 2. WHY JUDO? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                        The Benefits
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Why Judo?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        Judo, meaning "The Gentle Way," is a traditional Japanese martial art that focuses on using an opponent's energy and balance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Elite Coordination",
                            desc: "Judo is unmatched in developing balance, spatial awareness, and the ability to move fluidly—skills that benefit every other area of her life."
                        },
                        {
                            title: "The Art of Falling Safely",
                            desc: "The first thing we teach is how to fall (Ukemi). This builds immediate physical confidence and ensures your daughter stays safe on and off the mats."
                        },
                        {
                            title: "Leverage over Strength",
                            desc: "Judo teaches that intelligence and timing can overcome size and power, a powerful lesson for young girls in building self-assurance."
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
                <div className="absolute top-0 left-0 p-32 bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

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

            {/* 4. BRITISH JUDO ROADMAP */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The British Judo Roadmap
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            At Legion, we follow the internationally recognised BJA grading schemes. Every girl follows a visible, structured path of progression with tangible milestones.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-zinc-950 p-8 border border-white/5 border-l-4 border-l-pink-500">
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">Sho Awards (Ages 5-7)</h3>
                            <p className="text-zinc-400 mb-4">For our youngest judoka, the focus is on fun and fundamental movement. There are 9 Sho Awards designed to reward physical, social, and technical development.</p>
                        </div>
                        <div className="bg-zinc-950 p-8 border border-white/5 border-l-4 border-l-pink-500">
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">Mon Grade System (Ages 8-15)</h3>
                            <p className="text-zinc-400 mb-4">The Mon system consists of 18 levels across six belt colours. Each colour has three "Mon" levels (stripes) to mark incremental progress.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { name: "Red Belt", focus: "Foundation ukemi (breakfalls), basic throws, and groundwork.", color: "border-t-4 border-t-red-600" },
                            { name: "Yellow Belt", focus: "Moving beyond basics into advanced throwing mechanics.", color: "border-t-4 border-t-yellow-400" },
                            { name: "Orange Belt", focus: "Mastery of combinations, counters, and technical transitions.", color: "border-t-4 border-t-orange-500" },
                            { name: "Green Belt", focus: "Performance-level sequencing and introduction to advanced tactics.", color: "border-t-4 border-t-green-600" },
                            { name: "Blue Belt", focus: "High-level technical fluency and sacrifice throws.", color: "border-t-4 border-t-blue-600" },
                            { name: "Brown Belt", focus: "The highest junior grade, requiring exceptional technical mastery.", color: "border-t-4 border-t-amber-800" },
                        ].map((award, i) => (
                            <div key={i} className={`bg-zinc-950 p-6 border border-white/5 ${award.color}`}>
                                <h3 className="font-heading text-lg font-bold uppercase text-white mb-3">{award.name}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{award.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. GRADING & STANDARDS */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-white mb-4">
                            Building Consistency
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            Legion strictly adheres to the official British Judo Association (BJA) grading requirements. The transition between grades is managed by our Judo coach in full alignment with BJA and IJF standards.
                        </p>
                    </div>
                    <div>
                        <div className="bg-black border border-white/10 p-8">
                            <h3 className="font-heading text-xl font-black uppercase tracking-tight text-white mb-4">
                                Technical Grading
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <Check className="w-5 h-5 text-pink-500 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-xs">Attendance</h4>
                                        <p className="text-xs text-zinc-500 mt-1">Automated tracking ensures your daughter has the required mat hours.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="w-5 h-5 text-pink-500 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-xs">Proficiency</h4>
                                        <p className="text-xs text-zinc-500 mt-1">The coach’s ongoing assessment of her technical ability, knowledge, and discipline.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. PARENT'S GUIDE */}
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
                                        <p className="text-sm text-zinc-500 mt-1">A Judo Gi is required. For trials, t-shirt/leggings (no zips) are fine. 2-week grace period.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Footwear</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Bare feet on the mats. Clean flip-flops or sliders for off-mat use.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">03</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Spectator Policy</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Mothers/female guardians welcome to watch. Please do not "coach" from the sidelines.</p>
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

            {/* 7. LIVE TIMETABLE */}
            <Section className="bg-zinc-950 border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-8">
                        Girls Judo Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4488602b9"
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
                        Common Questions from Parents
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Will she have to train with boys?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                No. This session is strictly for girls, with female-led coaching in a private environment.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How safe is Judo?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Safety is our priority. We focus heavily on "Ukemi" (the art of falling) so that girls learn to protect themselves instinctively before advanced throwing begins.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if she is ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Once she reaches the technical milestones required by the BJA and demonstrates the necessary skill in class, the coach will invite her to the next Grading.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-12 flex justify-center">
                        <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            CLAIM A FREE GIRLS TRIAL
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
