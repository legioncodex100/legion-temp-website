import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Kids Trial Sign-Up Guide | Legion Grappling Academy",
    description: "Step-by-step instructions for parents on how to create a Mindbody family account and book a free trial."
};

const MINDBODY_SIGNUP_URL = "https://clients.mindbodyonline.com/classic/home?studioid=137536";

export default function KidsTrialHelpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Header / Nav */}
            <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
                <div className="max-w-5xl mx-auto flex items-center gap-4">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white p-0 hover:bg-transparent" asChild>
                        <Link href="/free-trial/kids">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Trial Page
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-24 px-4 text-center border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent block mb-6">
                        Parent Support
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 text-white leading-none">
                        How to Sign Up<br />Your Child
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                        At Legion, we use a single <strong>Family Account</strong> system.
                        This guide will show you how to set up your parent profile first, then add your child.
                    </p>
                    <div className="bg-zinc-900 border border-white/10 p-4 inline-flex items-center gap-3 max-w-lg mx-auto text-left">
                        <AlertCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <p className="text-sm text-zinc-300">
                            <strong>Key Rule:</strong> Create the account in <span className="text-white underline decoration-accent decoration-2">YOUR name</span> first. Do not use your child's details for the main login.
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Container */}
            <div className="max-w-3xl mx-auto px-4 py-16 space-y-24">

                {/* Step 1 */}
                <StepSection number="01" title="Start Registration">
                    <p className="mb-6">
                        Navigate to our secure Mindbody portal. You will see a screen with a "Sign In" box and a "Create Account" box.
                    </p>
                    <div className="border border-white/10 mb-8">
                        <Image
                            src="/images/help/step-1-landing.png"
                            alt="Mindbody Landing Page"
                            width={1920}
                            height={1080}
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                    <Button
                        className="bg-white text-black hover:bg-white/90 rounded-none uppercase font-bold tracking-wider"
                        asChild
                    >
                        <a href={MINDBODY_SIGNUP_URL} target="_blank">Open Sign Up Page →</a>
                    </Button>
                </StepSection>

                {/* Step 2 */}
                <StepSection number="02" title="Use Parent Details">
                    <p className="mb-6">
                        In the "Create Account" section, enter <strong>YOUR email address</strong>.
                        This ensures you have admin control over payments and waivers.
                    </p>
                    <div className="border border-white/10">
                        <Image
                            src="/images/help/step-2-email.png"
                            alt="Enter Parent Email"
                            width={1920}
                            height={1080}
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                </StepSection>

                {/* Step 3 */}
                <StepSection number="03" title="Create Family Profile">
                    <p className="mb-6">
                        Complete the form with your details. Look for the header <strong>"Create a Mindbody family account"</strong>.
                        This confirms you are setting up a master profile that can manage multiple family members.
                    </p>
                    <div className="border border-white/10">
                        <Image
                            src="/images/help/step-3-family-form.png"
                            alt="Family Account Form"
                            width={1920}
                            height={1080}
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                </StepSection>

                {/* Step 4 */}
                <StepSection number="04" title="Add Your Child">
                    <div className="bg-zinc-900 border border-white/10 p-8 space-y-4">
                        <p className="text-white font-bold mb-2">Once logged in:</p>
                        <ol className="list-decimal list-inside space-y-3 text-zinc-400 marker:text-accent">
                            <li>Click on the <strong>MY INFO</strong> tab.</li>
                            <li>Scroll to the <strong>Family Members</strong> section.</li>
                            <li>Click <strong>"Add Family"</strong>.</li>
                            <li>Enter your child's First Name, Last Name, and Date of Birth.</li>
                            <li>Check the box <strong>"Paid for by [Your Name]"</strong>.</li>
                            <li>Click <strong>Save</strong>.</li>
                        </ol>
                    </div>
                </StepSection>

                {/* Step 5 */}
                <StepSection number="05" title="Book the Trial">
                    <div className="bg-zinc-900 border border-white/10 p-8 space-y-4">
                        <p className="text-white font-bold mb-2">To book their first class:</p>
                        <ol className="list-decimal list-inside space-y-3 text-zinc-400 marker:text-accent">
                            <li>Go to the <strong>CLASSES</strong> tab.</li>
                            <li>Find a class (e.g., "Kids BJJ").</li>
                            <li>Click <strong>Sign Up Now</strong>.</li>
                            <li>
                                <span className="text-white bg-accent/20 px-2 py-0.5 border border-accent/40 text-sm font-bold uppercase tracking-wide mr-2">Critical Step</span>
                                When asked "Make reservation for:", select <strong>Your Child's Name</strong>.
                            </li>
                            <li>Select <strong>"Kids Free Trial"</strong> at checkout (Free).</li>
                        </ol>
                    </div>
                </StepSection>

            </div>

            {/* Footer CTA */}
            <div className="bg-white text-black py-20 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-heading text-4xl font-black uppercase mb-6 tracking-tight">Ready?</h2>
                    <Button
                        className="bg-black text-white hover:bg-zinc-800 rounded-none h-14 px-8 uppercase font-bold tracking-widest text-xs w-full md:w-auto"
                        asChild
                    >
                        <a href={MINDBODY_SIGNUP_URL}>Start Family Registration</a>
                    </Button>
                    <p className="mt-8 text-sm text-zinc-500">
                        Still having issues? <a href="mailto:info@legiongrappling.com" className="underline font-bold">Email us</a> or visit the front desk.
                    </p>
                </div>
            </div>
        </div>
    );
}

function StepSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
    return (
        <section className="relative pl-0 md:pl-16 border-l md:border-l border-white/10 md:border-dashed">
            <div className="absolute -left-[25px] top-0 hidden md:flex items-center justify-center w-[50px] h-[50px] bg-black border border-white/20 rounded-full font-black text-zinc-500">
                {number}
            </div>
            <div className="mb-8">
                <span className="md:hidden text-accent font-black text-xl mb-2 block">Step {number}</span>
                <h2 className="font-heading text-3xl font-black uppercase text-white">{title}</h2>
            </div>
            <div className="text-zinc-400 text-lg leading-relaxed">
                {children}
            </div>
        </section>
    );
}
