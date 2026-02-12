import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center group relative z-50">
                    <div className="relative w-10 h-10 mr-3 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/images/logo.png"
                            alt="Legion Grappling Academy"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-heading text-xl font-black uppercase tracking-[-0.05em] text-white transition-opacity duration-300">
                        Legion
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link
                        href="/about"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 relative group"
                    >
                        About Us
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* CLASSES MEGA MENU */}
                    <div className="group relative h-24 flex items-center">
                        <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-all duration-300">
                            Classes
                            <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Container */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl bg-black border border-white/10 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-40">
                            {/* Top Bar Enrolment */}
                            <div className="w-full bg-white text-black py-2 px-6 text-center text-[10px] font-bold uppercase tracking-widest">
                                Enrollment Open for 2025. Get your 7-Day Access Pass.
                            </div>

                            <div className="grid grid-cols-4 gap-8 p-12">
                                {/* MEN */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-white font-heading font-black uppercase text-lg border-b border-white/20 pb-2 mb-4">
                                        Men <span className="text-white/30 text-xs">→</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/classes/mens-wrestling" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">Wrestling</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Takedowns & Control</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/mens-mma" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">MMA</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Striking & Cage Work</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/mens-bjj" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">BJJ (Gi)</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Technical Submission</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/mens-no-gi" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">No-Gi Grappling</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Fast-Paced Submission</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* WOMEN */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-white font-heading font-black uppercase text-lg border-b border-white/20 pb-2 mb-4">
                                        Women <span className="text-white/30 text-xs">→</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/classes/womens-bjj" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">BJJ</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Technique & Movement</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/womens-judo" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">Judo</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Throws & Balance</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* GIRLS */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-white font-heading font-black uppercase text-lg border-b border-white/20 pb-2 mb-4">
                                        Girls <span className="text-white/30 text-xs">→</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/classes/girls-bjj" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">BJJ</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Confidence & Skill</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/girls-judo" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">Judo</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Safe Falling & Throws</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* BOYS */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-white font-heading font-black uppercase text-lg border-b border-white/20 pb-2 mb-4">
                                        Boys <span className="text-white/30 text-xs">→</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/classes/boys-wrestling" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">Wrestling</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Discipline & Basics</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/classes/boys-jiu-jitsu" className="block group/item">
                                                <div className="text-white font-bold uppercase text-xs mb-1 group-hover/item:text-white/70 transition-colors">Jiu-Jitsu</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-wide">Focus & Respect</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bottom CTA */}
                            <div className="border-t border-white/10 p-6 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-white/40">
                                <span>Not sure where to start? Check the timetable.</span>
                                <div className="flex gap-8">
                                    <Link href="/timetable" className="text-white border-b border-transparent hover:border-white transition-all">Timetable</Link>
                                    <Link href="/pricing" className="bg-white text-black px-4 py-2 hover:bg-zinc-200 transition-colors">Start Training</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/timetable"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 relative group"
                    >
                        Timetable
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <Link
                        href="/pricing"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-all duration-300 relative group"
                    >
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                </nav>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-4 pr-6 border-r border-white/10 [&_.healcode-login-text-link]:text-white/50 [&_.healcode-login-text-link]:hover:text-white [&_.healcode-login-text-link]:text-[11px] [&_.healcode-login-text-link]:font-bold [&_.healcode-login-text-link]:uppercase [&_.healcode-login-text-link]:tracking-[0.15em] [&_.healcode-login-text-link]:transition-colors [&_.healcode-cart-text-link]:text-white/50 [&_.healcode-cart-text-link]:hover:text-white [&_.healcode-cart-text-link]:text-[11px] [&_.healcode-cart-text-link]:font-bold [&_.healcode-cart-text-link]:uppercase [&_.healcode-cart-text-link]:tracking-[0.15em] [&_.healcode-cart-text-link]:transition-colors">
                        {/* Mindbody Login Widget */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-login-text-link" data-site-id="8337" data-mb-site-id="137536" data-bw-identity-site="true" data-type="login-link" data-inner-html="Login" />`
                            }}
                        />
                        {/* Mindbody Cart Widget */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-cart-text-link" data-site-id="8337" data-mb-site-id="137536" data-bw-identity-site="true" data-type="cart-link" data-inner-html="Cart" />`
                            }}
                        />
                    </div>
                    <Link href="/free-trial/adults">
                        <Button variant="default" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-[0.1em] text-[10px] px-8 py-6 rounded-none transition-transform duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Start Training
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu (Simplified) */}
                <div className="flex lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <Menu className="h-8 w-8" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black border-l border-white/10 text-white w-full sm:w-[450px] p-12 overflow-y-auto">
                            <nav className="flex flex-col gap-8 mt-20">
                                <Link href="/" className="text-3xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors">Home</Link>
                                <Link href="/about" className="text-3xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors">About Us</Link>

                                <div className="space-y-4">
                                    <div className="text-3xl font-black uppercase tracking-tighter text-white/50">Classes</div>
                                    <div className="pl-6 space-y-4 border-l border-white/10">
                                        <div className="text-sm font-bold uppercase text-white/70 tracking-widest">Men</div>
                                        <Link href="/classes/mens-wrestling" className="block text-xl font-bold uppercase hover:text-white/50">Wrestling</Link>
                                        <Link href="/classes/mens-mma" className="block text-xl font-bold uppercase hover:text-white/50">MMA</Link>
                                        <Link href="/classes/mens-bjj" className="block text-xl font-bold uppercase hover:text-white/50">BJJ (Gi)</Link>
                                        <Link href="/classes/mens-no-gi" className="block text-xl font-bold uppercase hover:text-white/50">No-Gi</Link>

                                        <div className="text-sm font-bold uppercase text-white/70 tracking-widest mt-6">Women</div>
                                        <Link href="/classes/womens-bjj" className="block text-xl font-bold uppercase hover:text-white/50">Women's BJJ</Link>
                                        <Link href="/classes/womens-judo" className="block text-xl font-bold uppercase hover:text-white/50">Women's Judo</Link>
                                    </div>
                                </div>

                                <Link href="/timetable" className="text-3xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors">Timetable</Link>
                                <Link href="/pricing" className="text-3xl font-black uppercase tracking-tighter hover:text-white/50 transition-colors">Pricing</Link>

                                <Link href="/free-trial/adults" className="block mt-12 w-full">
                                    <Button variant="default" className="bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest w-full py-8 text-lg rounded-none">
                                        Start Training
                                    </Button>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
