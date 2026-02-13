"use client";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlobalAlert() {
    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="fixed top-20 lg:top-24 left-0 right-0 z-40 bg-amber-500/10 border-b border-amber-500/20 backdrop-blur-md shadow-lg"
        >
            <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-center">
                <Link href="/timetable" className="flex items-center justify-center gap-3 group w-full">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Moon className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                    </motion.div>
                    <div className="text-center flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-wider group-hover:text-amber-400 transition-colors shadow-black drop-shadow-sm">
                            Ramadan Schedule Update
                        </span>
                        <span className="text-zinc-400 text-xs font-medium group-hover:text-zinc-300 transition-colors">
                            Condensed timetable starts Feb 17th <span className="text-amber-500/50 group-hover:text-amber-500 transition-colors ml-1">→</span>
                        </span>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
