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

export default function WomensJudoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/womens-judo/womens-judo-class_1.jpeg"
                        alt="Ladies-Only Judo"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-pink-500/80 bg-black/50 backdrop-blur-sm">
                        Ladies-Only Judo (16+)
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                        Technical Mastery.<br />Empowerment. Balance.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed mb-10 hidden md:block">
                        Master the "Gentle Way" in a dedicated, strictly male-free environment. Build physical confidence and elite coordination through the traditional art of Judo.
                    </p>
                    <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            BOOK A FREE ADULT TRIAL
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 max-w-md mx-auto hidden md:flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-pink-500" />
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">A private, supportive training space led by female-focused coaching.</span>
                    </p>

                    <div className="mt-6 hidden md:flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600">Affiliated with</span>
                        <div className="relative w-24 h-16 opacity-60 hover:opacity-100 transition-opacity">
                            <Image
                                src="/images/affiliations/british-judo.svg"
                                alt="British Judo Association"
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
                        Master the "Gentle Way" in a dedicated, strictly male-free environment. Build physical confidence and elite coordination through the traditional art of Judo.
                    </p>
                    <div className="flex flex-col gap-4">
                        <Link href="/free-trial/adults" className="w-full">
                            <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest h-14 rounded-none">
                                BOOK A FREE ADULT TRIAL
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-pink-500" />
                        <span className="text-zinc-400 uppercase tracking-widest text-xs">A private, supportive training space led by female-focused coaching.</span>
                    </p>
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
                        Our Ladies-Only Judo program is designed for women who want to develop high-level physical skills in a comfortable and focused setting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "The Total Beginner",
                            desc: "No prior martial arts experience is necessary. Judo is about using an opponent’s energy rather than brute force, making it the perfect discipline for those starting their fitness journey."
                        },
                        {
                            title: "The Self-Defense Seeker",
                            desc: "Learn the art of \"Ukemi\" (falling safely) and the high-leverage throws and pins that are essential for real-world physical confidence."
                        },
                        {
                            title: "The Technical Athlete",
                            desc: "For those who enjoy the \"human physics\" of grappling. Judo requires timing, balance, and precision, offering a deep mental and physical challenge."
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
                            <p className="text-sm text-zinc-400">We ask that male friends, partners, or family members drop off at the academy entrance. This policy ensures a private and secure training environment.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. SENIOR JUDO ROADMAP */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-4">
                            Progression
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            The Senior Judo Roadmap
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            At Legion, we follow the official BJA Kyu Grade system. Progress is intentional, and every belt earned is recognised internationally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Novice (White Belt)", focus: "Learning the foundations of balance, breakfalls, and basic grip fighting.", color: "border-t-4 border-t-zinc-200" },
                            { name: "6th Kyu (Yellow Belt)", focus: "Introduction to primary throwing techniques and fundamental groundwork (Ne-waza).", color: "border-t-4 border-t-yellow-400" },
                            { name: "5th Kyu (Orange Belt)", focus: "Developing combinations and the ability to link standing techniques to the mat.", color: "border-t-4 border-t-orange-500" },
                            { name: "4th Kyu (Green Belt)", focus: "Mastery of counters and intermediate-level tactical awareness.", color: "border-t-4 border-t-green-600" },
                            { name: "3rd Kyu (Blue Belt)", focus: "Advanced technical sequencing and high-leverage sacrifice throws.", color: "border-t-4 border-t-blue-600" },
                            { name: "2nd & 1st Kyu (Brown Belt)", focus: "Senior technical mastery, preparing the student for the transition to the Dan (Black Belt) ranks.", color: "border-t-4 border-t-amber-800" },
                            { name: "1st Dan (Black Belt)", focus: "Expertise in contest (Competitive) or demonstration (Technical) pathways. Requires deep knowledge of Nage-waza, Katame-waza, and Kata.", color: "border-t-4 border-t-zinc-900" },
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
                            BJA & IJF Standards
                        </h3>
                        <p className="text-zinc-400 mb-6">
                            Legion strictly adheres to the official British Judo Association (BJA) grading requirements. Promotions are not "given" based on time alone; they are earned through technical mastery. Our Judo coach manages all transitions in full alignment with BJA and International Judo Federation (IJF) standards.
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
                                        <p className="text-xs text-zinc-500 mt-1">Automated tracking confirms you have met the required mat hours.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Check className="w-5 h-5 text-pink-500 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-xs">Technical Proficiency</h4>
                                        <p className="text-xs text-zinc-500 mt-1">The coach assesses your movement, knowledge of the syllabus, and conduct in class.</p>
                                    </div>
                                </li>
                            </ul>
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
                                        <p className="text-sm text-zinc-500 mt-1">A Judo Gi (Kimono) is required. For trials, comfortable t-shirt/bottoms (no zips) are acceptable. 2-week grace period.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-white font-bold text-xs">02</div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase text-sm">Footwear</h4>
                                        <p className="text-sm text-zinc-500 mt-1">Bare feet on the mats. Clean flip-flops or sliders for walking around the academy off the mats.</p>
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
                        Ladies-Only Judo Timetable
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
                        Common Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Is Judo safe for beginners?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Absolutely. The very first skill we teach is how to fall safely (Ukemi). This ensures you can train with confidence and protect yourself instinctively.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                Can I watch a class first?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                Mothers and female guests are welcome to watch from our viewing area. In accordance with our Closed Mat Policy, male spectators are not permitted during these sessions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-white/80 uppercase font-bold text-sm tracking-wide">
                                How often should I train?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400">
                                To see consistent progress through the BJA grades, we recommend a minimum frequency of twice per week.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="mt-12 flex justify-center">
                        <Button className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest px-8 h-14 text-xs rounded-none">
                            BOOK A FREE ADULT TRIAL
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
