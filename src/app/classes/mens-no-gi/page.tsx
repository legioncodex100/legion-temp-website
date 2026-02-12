"use client";

import { ClassGallery } from "@/components/features/class-gallery";
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

export default function MensNoGiPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/mens-no-gi/mens-no-gi-class_2.jpeg"
                        alt="Men's NoGi Grappling Training"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-white/60 bg-black/50 backdrop-blur-sm">
                        Men's NoGi Grappling (16+)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Modern Grappling.<br />Maximum Efficiency.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        The fastest-growing segment of combat sports. Master the art of submission grappling in a high-intensity, technical environment built for both beginners and elite athletes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            BOOK A FREE ADULT TRIAL
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 max-w-md mx-auto flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">Join East London’s premier technical laboratory.</span>
                    </p>
                </div>
            </section>

            {/* 2. WHO IS THIS FOR? */}
            <Section className="bg-black border-b border-white/10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                        The Practitioner Profile
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                        Who is this for?
                    </h2>
                    <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
                        NoGi Grappling at Legion is designed for those who want the technical depth of Jiu Jitsu combined with the pace and athleticism of Wrestling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "The Total Beginner",
                            desc: "Start here to build functional strength and body awareness. We strip away the complexity of the Gi to focus on the core mechanics of anatomical control and submission."
                        },
                        {
                            title: "The MMA Athlete",
                            desc: "Essential training for the cage. We focus on high-percentage submissions, wall-walking, and scrambles that are critical for modern mixed martial arts."
                        },
                        {
                            title: "The BJJ Cross-Trainer",
                            desc: "Sharpen your reactions. NoGi forces a faster pace and tighter control, helping you develop a more dynamic and aggressive grappling game."
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
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <ClassGallery
                        images={[
                            { src: "/images/mens-no-gi/mens-no-gi-class_2.jpeg", alt: "No-Gi Sparring", caption: "Technical Instruction" },
                            { src: "/images/mens-no-gi/mens-no-gi-class_1.jpeg", alt: "No-Gi Grappling", caption: "Live Resistance" },
                            { src: "/images/mens-no-gi/mens-no-gi-class_3.jpeg", alt: "Leg Lock Attacks", caption: "Modern Submission Systems" },
                            { src: "/images/mens-no-gi/mens-no-gi-class_4.jpeg", alt: "Scramble Mechanics", caption: "Dynamic Transitions" },
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
                            Your training and eventual grading are based on proficiency in these core phases.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { phase: "The Entry", detail: "Takedowns, clinch work, and safe transitions from the feet to the mat." },
                                { phase: "Positional Control", detail: "Maintaining dominance without the handles of a Gi, utilizing \"hooks,\" \"wedges,\" and \"underhooks.\"" },
                                { phase: "The Scramble", detail: "Winning the \"in-between\" moments to regain or improve position during transitions." },
                                { phase: "The Submission", detail: "High-percentage finishes from the back, mount, and guard, emphasizing precision over force." },
                            ].map((pillar, i) => (
                                <div key={i} className="bg-black border border-white/10 p-4">
                                    <h4 className="font-bold text-white uppercase text-sm mb-1">{pillar.phase}</h4>
                                    <p className="text-xs text-zinc-500">{pillar.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Image Placeholder */}
                    <div className="aspect-[4/5] relative bg-zinc-900 border border-white/5 overflow-hidden hidden md:block group">
                        <Image
                            src="/images/mens-no-gi/mens-no-gi-class_5.jpeg"
                            alt="High Pace Scramble"
                            fill
                            className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </Section>

            {/* 4. SENIOR AWARD PATHWAY */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Senior Award Pathway
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            At Legion, progress is intentional and mat-tested. To move to the next rank, you must complete the required training time and pass a formal Grading.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { name: "White Belt", focus: "Focus on survival, fundamental escapes, and basic guard structures.", color: "border-t-4 border-t-zinc-200" },
                            { name: "Blue Belt", focus: "Mastery of fundamental control, positional escapes, and primary submission systems.", color: "border-t-4 border-t-blue-600" },
                            { name: "Purple Belt", focus: "Development of signature systems and advanced scrambling transitions.", color: "border-t-4 border-t-purple-600" },
                            { name: "Brown Belt", focus: "Elite-level chain attacking and strategic positional dominance.", color: "border-t-4 border-t-amber-800" },
                            { name: "Black Belt", focus: "Technical mastery and total fluency across the NoGi syllabus.", color: "border-t-4 border-t-zinc-900" },
                        ].map((award, i) => (
                            <div key={i} className={`bg-zinc-950 p-6 border border-white/5 ${award.color}`}>
                                <h3 className="font-heading text-lg font-bold uppercase text-white mb-3">{award.name}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{award.focus}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-zinc-900/30 border border-white/5 rounded-sm max-w-3xl mx-auto text-center">
                        <h4 className="font-heading text-lg font-bold uppercase text-white mb-2">The Progression Standard</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Each belt represents a deep commitment to the art. Mastery of each tier is achieved over a minimum of 1.5 years (18 months), based on a consistent training frequency of twice per week.
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
                                        <h4 className="text-white font-bold uppercase text-sm">Clothing</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Tight-fitting rash guard or t-shirt and athletic shorts (strictly no zips, buttons, or pockets).</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Gear Requirement</h4>
                                        <p className="text-sm text-zinc-500 mt-1">2-week window to acquire proper NoGi attire (Rash Guard, Grappling Shorts, Mouthguard).</p>
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
                        Men's NoGi Timetable
                    </h2>
                    <div className="w-full min-h-[400px] overflow-hidden">
                        <div
                            className="mindbody-widget"
                            data-widget-type="Schedules"
                            data-widget-id="4c4489102b9"
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
                                I’ve never grappled before—is NoGi better than Gi?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Both have merits. NoGi is often seen as more "intuitive" for beginners because there is no fabric to grab, focusing more on natural body control. Many students choose to train in both.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Do I need to be a wrestler to join?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Not at all. We teach you the wrestling fundamentals required for NoGi from scratch. Our environment is built for mutual progress, not "ego-driven" brawling.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How do I know if I'm ready to grade?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Your attendance is tracked automatically. Once you hit the required hours (minimum 18 months per belt) and the coach has assessed your technical proficiency in class, you will be invited to the next Grading.
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
