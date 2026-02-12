import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Free Adult Trial | Legion Grappling Academy",
    description: "Experience East London's premier grappling academy. Your first session is free—no commitment, no ego, just world-class coaching."
};

const MINDBODY_SIGNUP_URL = "https://clients.mindbodyonline.com/classic/ws?studioid=137536&stype=41&prodId=10423";

export default function AdultFreeTrialPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-32 md:py-48 text-center px-4 bg-black border-b border-white/10">
                <div className="max-w-5xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-8">
                        The Laboratory
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-white leading-none">
                        Stop Thinking.<br />Start Training.
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
                        Experience East London's premier technical laboratory for Wrestling, Jiu Jitsu, Judo, and MMA.
                        Your first session is free—no commitment, no ego, just world-class coaching.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                        <div
                            className="[&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:hover:bg-white/80 [&_.healcode-pricing-option-text-link]:rounded-none [&_.healcode-pricing-option-text-link]:h-14 [&_.healcode-pricing-option-text-link]:px-8 [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:tracking-widest [&_.healcode-pricing-option-text-link]:text-sm [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center"
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Claim Free Trial" />`
                            }}
                        />
                        <p className="text-zinc-500 text-sm flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Join 200+ athletes in E10
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Environments */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-6">
                            Environments
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                            Dedicated Spaces.<br />Maximum Focus.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Men's Sessions */}
                        <div className="group border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors bg-zinc-950/30">
                            <h3 className="font-heading text-3xl font-black uppercase text-white mb-2">Men's Sessions</h3>
                            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Ages 16+</p>

                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                High-energy, technical sessions focused on performance, brotherhood, and discipline. A "no-ego" environment for serious development.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Men's Wrestling", "Men's MMA", "Men's Jiu Jitsu (Gi & NoGi)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <div className="h-1 w-1 bg-white rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ladies-Only Sessions */}
                        <div className="group border border-white/10 p-8 md:p-12 hover:border-white/30 transition-colors bg-zinc-950/30">
                            <h3 className="font-heading text-3xl font-black uppercase text-white mb-2">Ladies-Only</h3>
                            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Closed Mat Policy</p>

                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                A private, supportive environment focusing on empowerment through leverage. Strictly male-free (including spectators and staff).
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <Shield className="h-4 w-4 text-white" />
                                    <strong>Strictly Male-Free Area</strong>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <div className="h-1 w-1 bg-white rounded-full" />
                                    Ladies-Only BJJ
                                </li>
                                <li className="flex items-center gap-3 text-sm text-zinc-300">
                                    <div className="h-1 w-1 bg-white rounded-full" />
                                    Ladies-Only Judo
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Legion */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <FeatureBlock
                            title="Progress by Design"
                            desc="We don't do 'boxercise'. Every class follows a structured curriculum designed to take you from a complete beginner to technical competency."
                        />
                        <FeatureBlock
                            title="No-Ego Culture"
                            desc="We are a team. Senior members look after beginners, ensuring a safe, supportive, and intense training environment for everyone."
                        />
                        <FeatureBlock
                            title="Digital First"
                            desc="We value your time. Our 'No Front Desk' model means you manage your bookings, payments, and progress entirely from your phone."
                        />
                    </div>
                </div>
            </Section>

            {/* 3-Step Onboarding */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-6">
                                Get Started
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                                Your 3-Step<br />Onboarding
                            </h2>
                        </div>
                        <div
                            className="[&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:hover:bg-white/80 [&_.healcode-pricing-option-text-link]:rounded-none [&_.healcode-pricing-option-text-link]:h-14 [&_.healcode-pricing-option-text-link]:px-8 [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:tracking-widest [&_.healcode-pricing-option-text-link]:text-xs [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center [&_.healcode-pricing-option-text-link]:mt-8 [&_.healcode-pricing-option-text-link]:md:mt-0"
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Start Signup" />`
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                        <StepBlock
                            number="01"
                            title="Create Account"
                            desc="Enter your email, set a password, and verify via the 6-digit code. Simple."
                        />
                        <StepBlock
                            number="02"
                            title="Add Trial"
                            desc="During checkout, add 'Free Adult Trial' to your account. It's a one-time credit."
                        />
                        <StepBlock
                            number="03"
                            title="Sign & Book"
                            desc="Sign the digital waiver (once only). The schedule will auto-filter based on your gender."
                        />
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section className="bg-zinc-950">
                <div className="max-w-3xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-8 text-center">
                        Common Questions
                    </span>
                    <h2 className="font-heading text-3xl font-black text-white uppercase tracking-tight text-center mb-16">
                        Need to Know
                    </h2>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <FaqItem
                            question="Do I need a different trial for Men's MMA vs. Ladies-Only BJJ?"
                            answer="No. There is one universal 'Free Adult Trial' item. Once it's on your account, the timetable will only show you the classes you are eligible to attend."
                        />
                        <FaqItem
                            question="How do I know which sessions I can attend?"
                            answer="Our system is automated. If you register as Female, you will only see Ladies-Only sessions. If you register as Male, you will only see Men's sessions."
                        />
                        <FaqItem
                            question="What should I bring?"
                            answer="Comfortable workout clothes (no zips/pockets), a water bottle, and a towel. No shoes on the mats. We have showers and changing rooms available."
                        />
                    </Accordion>
                </div>
            </Section>

            {/* Location Banner */}
            <div className="bg-white text-black py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-heading text-4xl font-black uppercase mb-6 tracking-tight">Location & Check-In</h2>
                    <p className="text-lg font-medium mb-8 max-w-2xl mx-auto">
                        Unit 5 Transform House, 16 Wellington Road, London, E10 7QF.
                        <br /><span className="text-zinc-500 text-sm mt-2 block">Arrival: 10-15 mins early. No front desk—head straight to the coach.</span>
                    </p>
                    <div
                        className="[&_.healcode-pricing-option-text-link]:bg-black [&_.healcode-pricing-option-text-link]:text-white [&_.healcode-pricing-option-text-link]:hover:bg-zinc-800 [&_.healcode-pricing-option-text-link]:rounded-none [&_.healcode-pricing-option-text-link]:h-14 [&_.healcode-pricing-option-text-link]:px-8 [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:tracking-widest [&_.healcode-pricing-option-text-link]:text-xs [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center"
                        dangerouslySetInnerHTML={{
                            __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Start Now" />`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function FeatureBlock({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">{title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>
        </div>
    );
}

function StepBlock({ number, title, desc }: { number: string; title: string; desc: string }) {
    return (
        <div className="group p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors">
            <span className="text-4xl font-black text-white/20 mb-8 block group-hover:text-white transition-colors">{number}</span>
            <h3 className="font-heading text-xl font-bold text-white uppercase mb-4">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <AccordionItem value={question} className="border border-zinc-800 bg-black px-6 hover:bg-zinc-900/50 transition-colors">
            <AccordionTrigger className="text-white font-bold uppercase tracking-wide text-sm py-6 hover:text-white hover:no-underline">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-6 leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}
