
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Clock, HelpCircle, ArrowRight, Smartphone, Navigation } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Texture - Consistent with other pages */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }}></div>

            {/* Ambient Glow */}
            {/* Ambient Glow - Adjusted to White/Zinc */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />


            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="h-[1px] w-12 bg-white"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
                            Digital Front Desk
                        </span>
                    </div>

                    <h1 className="font-heading text-6xl md:text-[5vw] font-black uppercase text-white leading-[0.9] tracking-tighter mb-8">
                        Contact <span className="text-zinc-500">Legion.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                        We operate a <span className="text-white font-bold">"No Front Desk"</span> policy to focus 100% on coaching.
                        The fastest way to reach us is by text or chatbot.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                    {/* Left Column: Actions & Info */}
                    <div className="space-y-16">

                        {/* Primary CTA: Text Us */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-zinc-950 border border-white/10 p-8 md:p-12">
                                <div className="w-16 h-16 bg-white flex items-center justify-center mb-8">
                                    <MessageSquare className="w-8 h-8 text-black" />
                                </div>

                                <h3 className="font-heading text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Text Us Directly
                                </h3>
                                <p className="text-zinc-400 mb-10 text-lg">
                                    For membership questions, trial bookings, or general enquiries. We typically reply within 2 hours.
                                </p>

                                <a
                                    href="sms:+447883320281"
                                    className="inline-flex w-full"
                                >
                                    <Button className="w-full bg-white text-black hover:bg-zinc-200 hover:text-black h-16 text-sm font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300 flex items-center justify-center gap-3">
                                        <Smartphone className="w-5 h-5" />
                                        Text +44 7883 320281
                                    </Button>
                                </a>
                                <p className="text-[10px] text-center text-zinc-600 mt-6 uppercase tracking-widest font-bold">
                                    Text Message Preferred
                                </p>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="space-y-8">
                            <h3 className="font-heading text-4xl font-black text-white uppercase tracking-tight flex items-center gap-4">
                                Find Us
                            </h3>

                            <div className="border-l-2 border-white pl-8 space-y-2">
                                <p className="text-white font-bold text-xl uppercase tracking-wider">Legion Grappling Academy</p>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Unit 5 Transform House<br />
                                    16 Wellington Road<br />
                                    London E10 7QF
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-white font-bold uppercase tracking-widest text-xs">Arrival Instructions</h4>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    We are located in the industrial estate. Look for the black shutters.
                                    Please arrive 10-15 minutes before your first class.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: FAQ & Map */}
                    <div className="space-y-16">
                        {/* FAQ */}
                        <div className="bg-zinc-900/30 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3 mb-8">
                                <HelpCircle className="w-6 h-6 text-white" />
                                <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
                                    Before You Text...
                                </h3>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border-b border-white/10 px-0">
                                    <AccordionTrigger className="text-white hover:text-zinc-300 hover:no-underline font-bold text-left py-6 uppercase tracking-wider text-sm">
                                        Can I drop in for a trial?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                        We do not accept walk-ins. All trials must be booked in advance via our website to ensure we have space and can welcome you properly.
                                        <div className="mt-6">
                                            <Link href="/book-trial" className="text-white hover:text-zinc-300 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group">
                                                Book a Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border-b border-white/10 px-0">
                                    <AccordionTrigger className="text-white hover:text-zinc-300 hover:no-underline font-bold text-left py-6 uppercase tracking-wider text-sm">
                                        Is there parking?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                        Parking is available on Wellington Road after 6:30 PM on weekdays. On weekends (Saturday & Sunday), you can park on the yellow lines.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border-b border-white/10 px-0">
                                    <AccordionTrigger className="text-white hover:text-zinc-300 hover:no-underline font-bold text-left py-6 uppercase tracking-wider text-sm">
                                        How much is membership?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                        We offer various membership tiers depending on how often you want to train. You can check our full pricing page for details.
                                        <div className="mt-6">
                                            <Link href="/pricing" className="text-white hover:text-zinc-300 font-bold uppercase text-xs tracking-widest flex items-center gap-2 group">
                                                View Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border-b border-white/10 px-0">
                                    <AccordionTrigger className="text-white hover:text-zinc-300 hover:no-underline font-bold text-left py-6 uppercase tracking-wider text-sm">
                                        Do I need experience?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                        Not at all! We have dedicated beginner courses and fundamental classes designed specifically for people with zero grappling experience.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Map Section */}
                        <div className="w-full h-[400px] bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 relative group">
                            <iframe
                                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_PLACES_API_KEY}&q=place_id:${process.env.GOOGLE_PLACE_ID}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div className="absolute top-4 right-4 z-20">
                                <a
                                    href="https://www.google.com/maps/dir//Legion+Grappling+Academy,+Unit+5+Transform+House,+16+Wellington+Rd,+London+E10+7QF/@51.5505791,-0.0345639,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x48761d634ddce7af:0xc4d61f7f156f7ef7!2m2!1d-0.031989!2d51.5505758!3e0?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" className="bg-white text-black hover:bg-zinc-200 hover:text-black uppercase font-bold tracking-widest text-xs h-10 px-4 rounded-none flex items-center gap-2">
                                        <Navigation className="w-3 h-3" />
                                        Get Directions
                                    </Button>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
