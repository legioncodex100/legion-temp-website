import { Hero } from "@/components/features/hero";
import { BentoGrid } from "@/components/features/bento-grid";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { YouthImageCycler } from "@/components/features/youth-image-cycler";
import { LadiesAndGirls } from "@/components/features/ladies-and-girls";
import { GoogleReviews } from "@/components/features/google-reviews";
import { SchemaOrg } from "@/components/seo/schema-org";

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-black min-h-screen">
            <SchemaOrg />
            {/* 1. Hero Section - Typographic Brutalism */}
            <Hero />

            {/* 2. Principles of Training */}
            <section className="bg-black py-24 px-6 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-8">
                        Our Ethos
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-16 leading-none">
                        The Principles<br />of Our Training
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/80">
                        <div className="space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-sm">A Clear Path to Progress</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                We take the guesswork out of training. Whether you’re a child in our youth series or an adult starting Wrestling or Jiu Jitsu, our technical roadmap ensures you always know how to reach your next Grading.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Confidence & Community</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                Beyond the techniques, you’ll find a group of people who want you to succeed. We focus on building functional strength and a "no-ego" confidence that stays with you long after you leave the mats.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-widest text-sm">More Training, Less Admin</h3>
                            <p className="text-sm leading-relaxed text-zinc-400">
                                Your time is for moving, not for paperwork. Our "No Front Desk" model handles the admin before you arrive, so you can head straight to the mats and get into the session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Adult Academy Intro */}
            <section className="bg-black py-24 px-6 pb-0">
                <div className="max-w-[1400px] mx-auto mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                        Adult Academy (16+)
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
                            Technical Mastery<br />In Every Discipline.
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
                            <p>
                                <strong className="text-white block mb-1 uppercase text-xs tracking-wider">Grappling (Wrestling & Jiu Jitsu)</strong>
                                Experience the flow of Jiu Jitsu and the athleticism of Wrestling. From our Senior Award Wrestling series to our Jiu Jitsu curriculum, we offer high-level coaching in a friendly, technical environment.
                            </p>
                            <p>
                                <strong className="text-white block mb-1 uppercase text-xs tracking-wider">Mixed Martial Arts (MMA)</strong>
                                A safe, intelligent way to blend striking and grappling. We focus on teamwork and systematic skills, ensuring everyone—from beginners to veterans—can train with confidence.
                            </p>
                            <p>
                                <strong className="text-white block mb-1 uppercase text-xs tracking-wider">Ladies-Only Jiu Jitsu & Judo</strong>
                                A supportive, strictly male-free space built on technical mastery. Master the arts in a dedicated environment focused on empowerment, leverage, and a strict Closed Mat Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Programs - Fragmented Grid */}
            <BentoGrid />

            {/* 5. Youth Academy */}
            <section className="bg-zinc-950 py-32 px-6 border-b border-white/10 relative overflow-hidden">
                {/* Background Grain/Texture would go here */}
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-6">
                            Youth Academy (&lt;16)
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-8 leading-none">
                            Building Better Humans<br />Through Movement.
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                            We believe grappling is the best vehicle for physical education. Our youth programs are designed to be high-energy and engaging, teaching resilience and respect through a clear, step-by-step path of 12-13 technical awards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Boys’ Programs</h4>
                                <p className="text-zinc-500 text-sm">High-energy sessions focusing on coordination, grit, and technical skill through Wrestling and Jiu Jitsu.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Girls-Only Programs</h4>
                                <p className="text-zinc-500 text-sm">A specialised, strictly male-free training space where girls build balance, strength, and confidence alongside a supportive team.</p>
                            </div>
                        </div>
                        <Link href="/free-trial/kids">
                            <Button className="bg-white text-black hover:bg-white/80 rounded-none h-14 px-8 uppercase font-bold tracking-widest text-xs">
                                CLAIM A FREE YOUTH TRIAL
                            </Button>
                        </Link>
                    </div>


                    {/* Visual Placeholder */}
                    <div className="aspect-square bg-zinc-900 border border-white/10 rounded-sm relative overflow-hidden">
                        <YouthImageCycler />
                    </div>
                </div>
            </section>

            {/* 6. Ladies & Girls Dedicated Section */}
            <LadiesAndGirls />

            {/* 7. Reviews */}
            <GoogleReviews />

            {/* 8. The Journey */}
            <section className="bg-zinc-950 py-32 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-6">
                                Starting Your Journey
                            </span>
                            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase text-white leading-none mb-6">
                                Simple, Friendly,<br />and Fast.
                            </h2>
                            <p className="text-zinc-400 max-w-md">We’ve removed the admin hurdles so you can focus on the training.</p>
                        </div>

                        <Link href="/pricing">
                            <Button className="bg-white text-black hover:bg-white/80 rounded-none h-14 px-8 uppercase font-bold tracking-widest mt-8 md:mt-0">
                                Start Training
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                        {[
                            { step: "01", title: "Register", desc: "Create your account and sign your waiver online. Parents can manage multiple children from one simple profile." },
                            { step: "02", title: "Prepare", desc: "We’ll send you our Starter Guide so you know exactly what to wear, where to park, and what to expect." },
                            { step: "03", title: "Train", desc: "Walk in, head straight to the mats, and meet your coach. Your name will be waiting on our digital roster." }
                        ].map((item, i) => (
                            <div key={i} className="group p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors duration-500">
                                <span className="text-4xl font-black text-white/20 mb-8 block group-hover:text-white transition-colors duration-500">{item.step}</span>
                                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
