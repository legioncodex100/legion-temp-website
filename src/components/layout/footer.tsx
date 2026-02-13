import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-black pt-12 md:pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <div className="space-y-4">
                        <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                            Legion
                        </h3>
                        <p className="text-sm text-gray-400">
                            Train With Purpose. The premier grappling academy in East London.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Men's Programs</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/classes/mens-bjj" className="hover:text-white">BJJ (Gi)</Link></li>
                            <li><Link href="/classes/mens-no-gi" className="hover:text-white">No-Gi Grappling</Link></li>
                            <li><Link href="/classes/mens-wrestling" className="hover:text-white">Wrestling</Link></li>
                            <li><Link href="/classes/mens-mma" className="hover:text-white">MMA</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Ladies' Programs</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/classes/womens-bjj" className="hover:text-white">Ladies' BJJ</Link></li>
                            <li><Link href="/classes/womens-judo" className="hover:text-white">Ladies' Judo</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Youth Programs</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/classes/boys-jiu-jitsu" className="hover:text-white">Boys' BJJ</Link></li>
                            <li><Link href="/classes/boys-wrestling" className="hover:text-white">Boys' Wrestling</Link></li>
                            <li><Link href="/classes/girls-bjj" className="hover:text-white">Girls' BJJ</Link></li>
                            <li><Link href="/classes/girls-judo" className="hover:text-white">Girls' Judo</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/timetable" className="hover:text-white">Timetable</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><a href="mailto:info@legion.com" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-white" />
                                <span>Unit 5 Transform House,<br />16 Wellington Road,<br />London E10 7QF</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-white" />
                                <a href="mailto:info@legion.com" className="hover:text-white">info@legion.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-white" />
                                <a href="tel:+442012345678" className="hover:text-white">+44 20 1234 5678</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Affiliations */}
            <div className="w-full border-t border-zinc-800 mt-16 pt-8">
                <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Proudly Affiliated With</h4>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        <div className="relative h-16 w-16">
                            <Image
                                src="/images/affiliations/british-wrestling-white.png"
                                alt="British Wrestling"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative h-10 w-32">
                            <Image
                                src="/images/affiliations/ukbjja.png"
                                alt="UKBJJA"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="relative h-12 w-20">
                            <Image
                                src="/images/affiliations/british-judo.svg"
                                alt="British Judo Association"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="relative h-12 w-12">
                            <Image
                                src="/images/affiliations/inglorious-grapplers.svg"
                                alt="Inglorious Grapplers"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Legion Grappling Academy. All rights reserved.</p>
            </div>
        </footer>
    );
}
