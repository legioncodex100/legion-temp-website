"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Define category data with images and links
const CATEGORIES = [
    {
        id: "men",
        title: "Men",
        image: "/images/mens-wrestling/mens-wrestling-class_1.jpeg", // Representative image for Men
        links: [
            { label: "Wrestling", href: "/classes/mens-wrestling" },
            { label: "MMA", href: "/classes/mens-mma" },
            { label: "BJJ (Gi)", href: "/classes/mens-bjj" },
            { label: "No-Gi", href: "/classes/mens-no-gi" },
        ]
    },
    {
        id: "women",
        title: "Ladies",
        image: "/images/womens-bjj/womens-bjj-class_1.jpeg", // Representative image for Ladies
        links: [
            { label: "Ladies BJJ", href: "/classes/womens-bjj" },
            { label: "Ladies Judo", href: "/classes/womens-judo" },
        ]
    },
    {
        id: "boys",
        title: "Boys",
        image: "/images/boys-wrestling/boys-wrestling-competition_3.jpeg", // Representative image for Boys
        links: [
            { label: "Boys BJJ", href: "/classes/boys-jiu-jitsu" },
            { label: "Boys Wrestling", href: "/classes/boys-wrestling" },
        ]
    },
    {
        id: "girls",
        title: "Girls",
        image: "/images/girls-bjj/girls-bjj-class_1.jpeg", // Representative image for Girls
        links: [
            { label: "Girls BJJ", href: "/classes/girls-bjj" },
            { label: "Girls Judo", href: "/classes/girls-judo" },
        ]
    }
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setExpandedCategory(expandedCategory === id ? null : id);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="group flex flex-col justify-center gap-[5px] w-10 h-10 items-end p-2 hover:bg-white/5 rounded-full transition-colors focus:outline-none">
                    <span className="w-7 h-[2px] bg-white group-hover:bg-accent group-hover:w-7 transition-all duration-300 ease-out origin-right" />
                    <span className="w-5 h-[2px] bg-white group-hover:bg-accent group-hover:w-7 transition-all duration-300 ease-out origin-right delay-75" />
                    <span className="w-3 h-[2px] bg-white group-hover:bg-accent group-hover:w-7 transition-all duration-300 ease-out origin-right delay-150" />
                </button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-xl border-l border-white/10 text-white w-full sm:w-[450px] p-0 flex flex-col overflow-hidden [&>button]:hidden"
            >
                {/* Header */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md">
                    <SheetTitle className="font-heading text-xl font-black uppercase tracking-tighter text-white">Menu</SheetTitle>
                    <div className="flex items-center gap-4">
                        {/* Mobile Login/Cart */}
                        <div className="hidden min-[380px]:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest [&_.healcode-login-text-link]:text-accent [&_.healcode-cart-text-link]:text-white/50">
                            <div dangerouslySetInnerHTML={{ __html: `<healcode-widget data-version="0.2" data-link-class="healcode-login-text-link" data-site-id="8337" data-mb-site-id="137536" data-bw-identity-site="true" data-type="login-link" data-inner-html="Login" />` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<healcode-widget data-version="0.2" data-link-class="healcode-cart-text-link" data-site-id="8337" data-mb-site-id="137536" data-bw-identity-site="true" data-type="cart-link" data-inner-html="Cart" />` }} />
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                            <X className="h-8 w-8" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 flex flex-col gap-6">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-white/70 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-white/70 transition-colors">
                        About Us
                    </Link>

                    {/* Classes Tiles */}
                    <div className="grid gap-4">
                        {CATEGORIES.map((category) => (
                            <div key={category.id} className="rounded-lg border border-white/10 bg-zinc-900 overflow-hidden">
                                <button
                                    onClick={() => toggleCategory(category.id)}
                                    className="w-full relative h-32 flex items-center justify-center overflow-hidden group"
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                                    <div className="relative z-10 flex items-center gap-2">
                                        <span className="text-3xl font-black uppercase tracking-widest text-white">{category.title}</span>
                                        <motion.div
                                            animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="h-6 w-6 text-white" />
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedCategory === category.id && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-2 bg-zinc-950/50 space-y-1 border-t border-white/10">
                                                {category.links.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block py-3 px-4 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all flex items-center justify-between group/link"
                                                    >
                                                        {link.label}
                                                        <span className="text-white/20 group-hover/link:text-accent transition-colors">→</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <Link href="/timetable" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-white/70 transition-colors">
                        Timetable
                    </Link>
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-white/70 transition-colors">
                        Pricing
                    </Link>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-white/10 z-50 bg-black/50 backdrop-blur-md">
                    <Link href="/pricing" onClick={() => setIsOpen(false)} className="block w-full">
                        <Button variant="default" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest w-full py-8 text-lg rounded-none shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            Start Training
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}
