"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Lock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LadiesAndGirls() {
    return (
        <section className="bg-black py-32 px-6 border-b border-white/10 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(236,72,153,0.05),transparent_40%)] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-pink-500 block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Strictly Private & Male-Free
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Empowerment Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Technical Mastery.</span>
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            We believe every woman and girl deserves a space to train where they feel completely comfortable. Our dedicated female-only programs offer elite-level grappling instruction in a strictly closed-door environment.
                        </p>
                    </div>

                    <div className="flex gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/20">
                            <Lock className="w-3 h-3 text-pink-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-pink-200">Closed Mat Policy</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20">
                            <Shield className="w-3 h-3 text-purple-500" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-200">Female Leads</span>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Ladies Card */}
                    <div className="group relative h-[500px] border border-white/10 bg-zinc-950 overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 hover:border-pink-500/30">
                        {/* Image Background */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/womens-bjj/womens-bjj-class_1.jpeg"
                                alt="Ladies BJJ Training"
                                fill
                                className="object-cover opacity-40 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="font-heading text-3xl md:text-5xl font-black uppercase text-white mb-4 leading-none">
                                Ladies'<br />Academy
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                Build functional strength, effective self-defense skills, and unshakeable confidence. Choose from Brazilian Jiu Jitsu or Judo in a supportive team atmosphere.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link href="/classes/womens-bjj">
                                    <Button size="sm" className="bg-white text-black hover:bg-pink-500 hover:text-white border-none uppercase font-black tracking-widest text-[10px] rounded-none">
                                        Explore BJJ
                                    </Button>
                                </Link>
                                <Link href="/classes/womens-judo">
                                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black uppercase font-black tracking-widest text-[10px] rounded-none">
                                        Explore Judo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Girls Card */}
                    <div className="group relative h-[500px] border border-white/10 bg-zinc-950 overflow-hidden flex flex-col justify-end p-8 md:p-12 transition-all duration-500 hover:border-purple-500/30">
                        {/* Image Background */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/girls-bjj/girls-bjj-class_1.jpeg"
                                alt="Girls BJJ Training"
                                fill
                                className="object-cover opacity-40 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="font-heading text-3xl md:text-5xl font-black uppercase text-white mb-4 leading-none">
                                Girls'<br />Academy
                            </h3>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                More than just a sport. We teach girls to be assertive, resilient, and physically capable. Give her the gift of lifelong confidence and a positive peer group.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link href="/classes/girls-bjj">
                                    <Button size="sm" className="bg-white text-black hover:bg-purple-500 hover:text-white border-none uppercase font-black tracking-widest text-[10px] rounded-none">
                                        Explore Youth BJJ
                                    </Button>
                                </Link>
                                <Link href="/classes/girls-judo">
                                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black uppercase font-black tracking-widest text-[10px] rounded-none">
                                        Explore Youth Judo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
