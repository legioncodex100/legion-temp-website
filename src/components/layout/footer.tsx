import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-black py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Programs</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Men's Wrestling</Link></li>
                            <li><Link href="#" className="hover:text-white">Women's BJJ</Link></li>
                            <li><Link href="#" className="hover:text-white">Kids Programs</Link></li>
                            <li><Link href="#" className="hover:text-white">No-Gi Grappling</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/timetable" className="hover:text-white">Timetable</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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
                                <a href="tel:+440000000000" className="hover:text-white">+44 20 1234 5678</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Legion Grappling Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
