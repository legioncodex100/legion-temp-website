"use client";

import { Section } from "@/components/ui/section";
import Script from "next/script";

import { RamadanTimetable } from "@/components/features/ramadan-timetable";

export default function TimetablePage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Section>
                <div className="text-center mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-4">
                        Book Your Session
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
                        Weekly Schedule
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Browse all classes below and book directly through our integrated system. Filter by class type or day to find your session.
                    </p>
                </div>

                {/* Ramadan Schedule (Temporary) */}
                <RamadanTimetable />

                {/* Mindbody Widget Container */}
                <div className="w-full min-h-[600px] overflow-hidden">
                    {/* Mindbody Schedules Widget */}
                    <div
                        className="mindbody-widget"
                        data-widget-type="Schedules"
                        data-widget-id="4c4488302b9"
                    />
                    <Script
                        src="https://brandedweb.mindbodyonline.com/embed/widget.js"
                        strategy="afterInteractive"
                    />
                </div>

                {/* Info Footer */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-zinc-600 uppercase tracking-widest">
                        First time? <a href="/pricing" className="text-white underline hover:text-white/70">Claim your free trial</a> before booking.
                    </p>
                </div>
            </Section>
        </div>
    );
}
