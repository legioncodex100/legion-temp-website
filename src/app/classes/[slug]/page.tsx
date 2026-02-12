import { getClassBySlug, CLASSES } from "@/data/classes";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ClassGallery } from "@/components/features/class-gallery";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all known classes
export async function generateStaticParams() {
    return CLASSES.map((c) => ({
        slug: c.slug,
    }));
}

export default async function ClassDetailPage(props: PageProps) {
    const params = await props.params;
    const classData = getClassBySlug(params.slug);

    if (!classData) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section with Background Image */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={classData.image}
                        alt={classData.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-700">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 text-gray-300">
                        {classData.targetAudience} Program
                    </span>
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6">
                        {classData.name}
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {classData.description}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        {classData.targetAudience === "Adults" ? (
                            <div
                                className="[&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:hover:bg-white/90 [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:px-8 [&_.healcode-pricing-option-text-link]:h-10 [&_.healcode-pricing-option-text-link]:text-sm [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center"
                                dangerouslySetInnerHTML={{
                                    __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Book Free Trial" />`
                                }}
                            />
                        ) : (
                            <Link href="/free-trial/kids">
                                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold uppercase px-8 h-10 text-sm">
                                    Book Free Trial
                                </Button>
                            </Link>
                        )}
                        <Link href="/timetable">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold uppercase px-8 h-10 text-sm">
                                View Schedule
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Class Features / Benefits */}
            <Section className="bg-zinc-950">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                            What You Will Learn
                        </h2>
                        <div className="space-y-4">
                            {classData.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                        <Check className="h-5 w-5 text-black" />
                                    </div>
                                    <span className="font-bold text-lg uppercase">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action shot image */}
                    <div className="aspect-square md:aspect-[4/5] relative overflow-hidden border border-zinc-800">
                        <Image
                            src={classData.gallery?.[1]?.src || classData.image}
                            alt={`${classData.name} in action`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Photo Gallery */}
            {classData.gallery && classData.gallery.length > 0 && (
                <Section className="bg-black">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                            Life at Legion
                        </h2>
                        <p className="text-gray-400 mt-4">Training, grading, and competition moments</p>
                    </div>
                    <ClassGallery images={classData.gallery} />
                </Section>
            )}

            {/* Youth Specific Section (Conditional) */}
            {classData.targetAudience === "Kids" && (
                <Section className="bg-black">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">Youth Development</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Our structured path from beginner to competitor.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Fun Fundamentals", desc: "Learning through play and basic movement patterns." },
                            { title: "Technical Skill", desc: "Structured curriculum with belt/grade progression." },
                            { title: "Competition Team", desc: "Elite coaching for national and international tournaments." }
                        ].map((phase, i) => (
                            <Card key={i} className="bg-zinc-900 border-zinc-800 text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-zinc-800 mx-auto mb-6 flex items-center justify-center text-white font-heading font-bold text-xl border border-zinc-700">
                                    {i + 1}
                                </div>
                                <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white">{phase.title}</h3>
                                <p className="text-gray-400 text-sm">{phase.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Section>
            )}

            {/* Schedule Banner */}
            <Section className="bg-white text-black">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight mb-2">Ready to Start?</h2>
                        <p className="text-zinc-600 font-medium">Join us for {classData.name}. First class is on us.</p>
                        <div className="flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wide">
                            <ClockIcon className="w-5 h-5" />
                            <span>Typical Class: {classData.schedule}</span>
                        </div>
                    </div>
                    {classData.targetAudience === "Adults" ? (
                        <div
                            className="[&_.healcode-pricing-option-text-link]:bg-black [&_.healcode-pricing-option-text-link]:text-white [&_.healcode-pricing-option-text-link]:hover:bg-zinc-800 [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:px-8 [&_.healcode-pricing-option-text-link]:h-14 [&_.healcode-pricing-option-text-link]:text-lg [&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center [&_.healcode-pricing-option-text-link]:w-full [&_.healcode-pricing-option-text-link]:md:w-auto"
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Book Free Trial" />`
                            }}
                        />
                    ) : (
                        <Link href="/free-trial/kids">
                            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 font-bold uppercase px-8 h-14 text-lg w-full md:w-auto">
                                Book Free Trial
                            </Button>
                        </Link>
                    )}
                </div>
            </Section>

        </div>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
