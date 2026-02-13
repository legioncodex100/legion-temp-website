"use client";

import { motion } from "framer-motion";
import { Moon, Clock, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function RamadanTimetable() {
    return (
        <section className="relative w-full max-w-4xl mx-auto mb-16">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-zinc-900/80 border border-amber-500/20 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl shadow-amber-900/10"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 p-8 border-b border-white/5 relative overflow-hidden">
                    {/* Decorative Islamic Pattern Overlay (Abstract) */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Moon className="w-6 h-6 text-amber-500 fill-amber-500/20" />
                                </motion.div>
                                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Ramadan Schedule Update</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight font-heading">
                                Condensed Timetable
                            </h2>
                            <p className="text-zinc-400 mt-2 flex items-center gap-2 text-sm md:text-base">
                                <Calendar className="w-4 h-4 text-amber-500" />
                                <span>Tue 17th Feb – Tue 18th Mar (approx)</span>
                            </p>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded px-4 py-3 flex items-start gap-3 max-w-xs">
                            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-amber-200/80 leading-relaxed">
                                Sessions are condensed to 1 hour to accommodate fasting & prayer times.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

                    {/* Mens Schedule */}
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-white font-bold">M</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wide">Men's Classes</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-baseline justify-between border-b border-white/5 pb-2 mb-4">
                                <span className="text-zinc-400 text-sm uppercase tracking-wider">Time</span>
                                <span className="text-white font-bold font-mono text-lg">6:30PM – 7:30PM</span>
                            </div>

                            <ScheduleItem
                                days="Mon / Wed / Fri"
                                classType="Wrestling"
                                details="All Levels • Technique & Sparring"
                            />
                            <ScheduleItem
                                days="Tue / Thu"
                                classType="Jiu Jitsu"
                                details="All Levels • Gi & No-Gi Mixed"
                            />
                        </div>
                    </div>

                    {/* Ladies & Kids */}
                    <div className="p-8 flex flex-col justify-between">
                        {/* Ladies */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10">
                                    <span className="text-white font-bold">L</span>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Ladies Classes</h3>
                            </div>
                            <ScheduleItem
                                days="Sunday"
                                classType="Jiu Jitsu"
                                details="10:00AM • All Levels"
                                highlight
                            />
                        </div>

                        {/* Kids Notice */}
                        <div className="bg-zinc-950/50 rounded-lg p-5 border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Kids Classes Paused</h4>
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                All Kids memberships will be automatically extended by 4 weeks to cover the break. Classes resume after Eid.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function ScheduleItem({ days, classType, details, highlight = false }: { days: string, classType: string, details: string, highlight?: boolean }) {
    return (
        <div className={cn("group p-4 rounded-lg transition-all duration-300 border border-transparent", highlight ? "bg-amber-500/5 border-amber-500/10" : "bg-white/5 hover:bg-white/10 hover:border-white/10")}>
            <div className="flex justify-between items-start mb-1">
                <span className={cn("text-xs font-bold uppercase tracking-widest", highlight ? "text-amber-500" : "text-zinc-500 group-hover:text-white transition-colors")}>
                    {days}
                </span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">{classType}</span>
            </div>
            <p className="text-zinc-500 text-xs mt-1">{details}</p>
        </div>
    );
}
