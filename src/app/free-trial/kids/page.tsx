import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Users, Star, Shield, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Free Kids Trial | Legion Grappling Academy",
    description: "Give your child the Legion advantage. More than martial arts—we teach resilience, coordination, and grit. Book a free trial and see our structured 12-grade youth roadmap."
};

const MINDBODY_SIGNUP_URL = "https://clients.mindbodyonline.com/classic/home?studioid=137536";

export default function KidsFreeTrialPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section - Compact with clear value prop */}
            <section className="relative py-20 md:py-28 text-center px-4 bg-black border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-6">
                        Ages 6-17 • Boys & Girls
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white leading-none">
                        Give Your Child<br />The Legion Advantage.
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed mb-8">
                        Structured martial arts training that builds confidence, discipline, and resilience. First class is free.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
                        <Users className="h-4 w-4" />
                        <span>200+ active youth members</span>
                    </div>
                </div>
            </section>

            {/* STEP 1: How to Sign Up - THE MOST IMPORTANT SECTION */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-4">
                            Get Started Now
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            How to Book Your Free Trial
                        </h2>
                    </div>

                    {/* 4-Step Process */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 mb-12">
                        <StepBlock
                            number="01"
                            title="Create Account"
                            desc="Click the button below. Enter YOUR details (parent/guardian email)."
                        />
                        <StepBlock
                            number="02"
                            title="Add Your Kids"
                            desc="Click 'Add Family Member'. Enter each child's name, DOB, and gender."
                        />
                        <StepBlock
                            number="03"
                            title="Add Free Trial"
                            desc="Go to Shop → 'Kids Free Trial'. Add to EACH child's profile."
                        />
                        <StepBlock
                            number="04"
                            title="Book a Class"
                            desc="Switch to child's view. Pick a class. Done!"
                        />
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <Button
                            className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-10 uppercase font-bold tracking-widest text-sm"
                            asChild
                        >
                            <a href={MINDBODY_SIGNUP_URL} className="inline-flex items-center gap-3">
                                Start Family Registration
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <p className="text-zinc-600 text-xs mt-4">
                            Need help? <Link href="/help/kids-trial" className="text-accent hover:underline">View step-by-step guide with screenshots</Link>
                        </p>
                    </div>

                    {/* Prominent Help Link */}
                    <div className="mt-10 max-w-xl mx-auto">
                        <Link
                            href="/help/kids-trial"
                            className="block border border-accent/30 bg-accent/5 hover:bg-accent/10 p-5 text-center transition-colors group"
                        >
                            <p className="text-white font-bold uppercase tracking-wide text-sm mb-1">
                                Need Help Setting Up?
                            </p>
                            <p className="text-zinc-400 text-sm">
                                View our visual step-by-step parent guide with screenshots →
                            </p>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Important Info Box - Quick reference */}
            <Section className="bg-black border-b border-white/10 py-12">
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InfoBox
                            title="One Login"
                            desc="You manage all kids from your parent account"
                        />
                        <InfoBox
                            title="Auto-Filter"
                            desc="Boys see boys' classes. Girls see girls-only."
                        />
                        <InfoBox
                            title="Per-Child Trial"
                            desc="Add the free trial to each child separately"
                        />
                        <InfoBox
                            title="Digital Waiver"
                            desc="Sign once per child before first class"
                        />
                    </div>
                </div>
            </Section>

            {/* Why Legion - Social proof & trust */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            Why Parents Choose Legion
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Trust Points */}
                        <div className="space-y-6">
                            <TrustBlock
                                icon={<Trophy className="h-6 w-6" />}
                                title="Structured Progress"
                                desc="12-grade curriculum with clear milestones. Your child earns belts through consistency and skill—not just showing up."
                            />
                            <TrustBlock
                                icon={<Shield className="h-6 w-6" />}
                                title="Safety First"
                                desc="We teach Ukemi (falling safely) before anything else. Sparring is only introduced once control is demonstrated."
                            />
                            <TrustBlock
                                icon={<Star className="h-6 w-6" />}
                                title="Life Skills"
                                desc="Beyond techniques—we build resilience, discipline, and confidence that transfers to school and life."
                            />
                        </div>

                        {/* Competition Photo - Social Proof */}
                        <div className="relative">
                            <div className="aspect-[4/3] relative overflow-hidden border border-white/10">
                                <Image
                                    src="/images/boys-bjj/competition.jpg"
                                    alt="Legion students on the podium at Grappling Industries"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white font-bold text-lg">Grappling Industries 2025</p>
                                    <p className="text-zinc-400 text-sm">Our kids taking 1st, 2nd & 3rd place</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Programs - Quick overview */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            Available Programs
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">Boys Classes</h3>
                            <p className="text-zinc-400 mb-4">High-energy sessions building coordination, grit, and technical skill.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Wrestling</Badge>
                                <Badge>Jiu Jitsu</Badge>
                            </div>
                        </div>
                        <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
                            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-3">Girls Classes</h3>
                            <p className="text-zinc-400 mb-4">Strictly male-free environment with female coaches. Confidence through technique.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge>BJJ</Badge>
                                <Badge>Judo</Badge>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/timetable" className="text-accent font-bold uppercase text-sm tracking-widest hover:text-white transition-colors inline-flex items-center gap-2">
                            View Full Schedule <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* FAQ - Address objections */}
            <Section className="bg-zinc-950 border-b border-white/10" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-black text-white uppercase tracking-tight text-center mb-12">
                        Common Questions
                    </h2>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                        <FaqItem
                            question="Is it safe for my child?"
                            answer="Safety is #1. We teach 'Ukemi' (the art of falling safely) and controlled technique. Live sparring is only for students who demonstrate safety and control."
                        />
                        <FaqItem
                            question="What if I have multiple kids?"
                            answer="Perfect! Create one parent account, then add each child as a family member. Add the free trial to each child's profile separately."
                        />
                        <FaqItem
                            question="Can I watch the class?"
                            answer="Yes! We have viewing areas. For girls-only classes, only mothers/female guardians can be in the immediate viewing area."
                        />
                        <FaqItem
                            question="What should they bring?"
                            answer="Comfortable t-shirt and shorts/joggers (no zips or buttons). Bare feet on mats. Bring water. We handle the rest."
                        />
                        <FaqItem
                            question="What age can kids start?"
                            answer="We accept children from age 6 upwards. Youth programs run until age 17. From age 13, kids can also attend adult classes if they wish."
                        />
                    </Accordion>
                </div>
            </Section>

            {/* Final CTA - Location + Action */}
            < div className="bg-white text-black py-16 px-6 text-center" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">Ready to Start?</h2>
                    <p className="text-lg mb-2">
                        Unit 5 Transform House, 16 Wellington Road, London, E10 7QF
                    </p>
                    <p className="text-zinc-500 text-sm mb-8">
                        Arrive 10-15 mins early. Check in with the coach.
                    </p>
                    <Button
                        className="bg-black text-white hover:bg-zinc-800 rounded-none h-14 px-10 uppercase font-bold tracking-widest text-sm"
                        asChild
                    >
                        <a href={MINDBODY_SIGNUP_URL} className="inline-flex items-center gap-3">
                            Book Free Trial Now
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div >
        </div >
    );
}

function StepBlock({ number, title, desc }: { number: string; title: string; desc: string }) {
    return (
        <div className="group p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors text-center md:text-left">
            <span className="text-3xl font-black text-accent mb-4 block">{number}</span>
            <h3 className="font-heading text-lg font-bold text-white uppercase mb-2">{title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function InfoBox({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div>
                <h4 className="text-white font-bold text-sm">{title}</h4>
                <p className="text-zinc-500 text-xs">{desc}</p>
            </div>
        </div>
    );
}

function TrustBlock({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="text-center p-6">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 text-white mb-4">
                {icon}
            </div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block px-3 py-1 bg-white/10 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
            {children}
        </span>
    )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <AccordionItem value={question} className="border border-zinc-800 bg-black px-6 hover:bg-zinc-900/50 transition-colors">
            <AccordionTrigger className="text-white font-bold uppercase tracking-wide text-sm py-5 hover:text-white hover:no-underline">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-5 leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}
