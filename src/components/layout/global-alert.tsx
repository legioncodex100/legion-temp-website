"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function GlobalAlert() {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    // Don't show on timetable page since the full schedule is there
    if (pathname === "/timetable") return null;

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="fixed top-20 lg:top-24 left-0 right-0 z-40 bg-accent/90 border-b border-accent/20 backdrop-blur-md shadow-lg"
            >
                <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <Link href="/timetable" className="flex-1 flex items-center justify-center gap-3 group">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Moon className="w-4 h-4 text-accent fill-accent/20" />
                        </motion.div>
                        <div className="text-center">
                            <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wider group-hover:text-accent transition-colors">
                                Ramadan Schedule Update
                            </span>
                            <span className="hidden md:inline text-zinc-400 text-xs ml-2">
                                Condensed timetable starts Feb 17th →
                            </span>
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close alert"
                    >
                        <X className="w-4 h-4 text-zinc-400 hover:text-white" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
