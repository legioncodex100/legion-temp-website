import Link from "next/link";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing | Legion Grappling Academy",
    description: "Simple, transparent pricing for all programs. Men, Ladies, Boys, and Girls—find the right plan for you."
};

// Healcode widget configuration
const SITE_ID = "8337";
const MB_SITE_ID = "137536";

// Pricing data by audience
const pricingData = {
    men: {
        title: "Men's Programs",
        description: "Full access to Wrestling, MMA, BJJ, and No-Gi classes.",
        options: [
            {
                name: "Pay As You Go",
                price: "£20",
                period: "per class",
                type: "pricing-link",
                serviceId: "10102",
                features: ["1 class", "Online booking", "S&C area access"]
            },
            {
                name: "8 Pack",
                price: "£85",
                period: "per month",
                type: "contract-link",
                serviceId: "165",
                features: ["8 classes per month", "Online booking", "S&C area access", "Open mat access"]
            },
            {
                name: "Unlimited",
                price: "£95",
                period: "per month",
                type: "contract-link",
                serviceId: "166",
                popular: true,
                features: ["Unlimited classes", "Online booking", "S&C area access", "Open mat access"]
            },
        ]
    },
    ladies: {
        title: "Ladies' Programs",
        description: "Dedicated classes for women in BJJ and Judo.",
        options: [
            {
                name: "Pay As You Go",
                price: "£20",
                period: "per class",
                type: "pricing-link",
                serviceId: "10400",
                features: ["1 class", "Online booking", "S&C area access"]
            },
            {
                name: "4 Pack",
                price: "£45",
                period: "per month",
                type: "contract-link",
                serviceId: "163",
                features: ["4 classes per month", "Online booking", "S&C area access", "Open mat access"]
            },
            {
                name: "8 Pack",
                price: "£85",
                period: "per month",
                type: "contract-link",
                serviceId: "164",
                popular: true,
                features: ["8 classes per month", "Online booking", "S&C area access", "Open mat access"]
            },
        ]
    },
    boys: {
        title: "Boys' Programs",
        description: "For ages 5-17. Structured training in Wrestling and Jiu-Jitsu.",
        options: [
            {
                name: "Pay As You Go",
                price: "£15",
                period: "per class",
                type: "pricing-link",
                serviceId: "10562",
                features: ["1 class", "Online booking"]
            },
            {
                name: "8 Pack",
                price: "£55",
                period: "per month",
                type: "contract-link",
                serviceId: "159",
                features: ["8 classes per month", "Online booking"]
            },
            {
                name: "Unlimited",
                price: "£65",
                period: "per month",
                type: "contract-link",
                serviceId: "160",
                popular: true,
                features: ["Unlimited classes", "Online booking"]
            },
        ]
    },
    girls: {
        title: "Girls' Programs",
        description: "For ages 5-17. Confidence-building BJJ and Judo.",
        options: [
            {
                name: "Pay As You Go",
                price: "£15",
                period: "per class",
                type: "pricing-link",
                serviceId: "10563",
                features: ["1 class", "Online booking"]
            },
            {
                name: "4 Pack",
                price: "£40",
                period: "per month",
                type: "contract-link",
                serviceId: "161",
                features: ["4 classes per month", "Online booking"]
            },
            {
                name: "8 Pack",
                price: "£55",
                period: "per month",
                type: "contract-link",
                serviceId: "162",
                popular: true,
                features: ["8 classes per month", "Online booking"]
            },
        ]
    },
};

// Widget generator helper
function getWidgetHtml(type: string, serviceId: string, innerHtml: string = "Buy Now") {
    const linkClass = type === "contract-link" ? "healcode-contract-text-link" : "healcode-pricing-option-text-link";
    return `<healcode-widget data-version="0.2" data-link-class="${linkClass}" data-site-id="${SITE_ID}" data-mb-site-id="${MB_SITE_ID}" data-service-id="${serviceId}" data-bw-identity-site="true" data-type="${type}" data-inner-html="${innerHtml}" />`;
}

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero */}
            <section className="pt-32 pb-16 text-center px-4 bg-gradient-to-b from-zinc-950 to-black">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">Invest in Your Training</p>
                <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                    Clear Pricing.<br />No Surprises.
                </h1>
                <p className="text-white/60 max-w-xl mx-auto text-lg">
                    Monthly auto-pay memberships. Cancel anytime with 30 days notice.
                </p>
            </section>

            {/* Free Trial Banner */}
            <Section className="bg-black py-8">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="font-heading text-2xl font-bold uppercase text-white mb-1">Not sure yet?</h2>
                        <p className="text-white/60">Try a free session with no commitment.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div
                            className="[&_.healcode-pricing-option-text-link]:inline-flex [&_.healcode-pricing-option-text-link]:items-center [&_.healcode-pricing-option-text-link]:justify-center [&_.healcode-pricing-option-text-link]:gap-2 [&_.healcode-pricing-option-text-link]:bg-white [&_.healcode-pricing-option-text-link]:text-black [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:text-xs [&_.healcode-pricing-option-text-link]:tracking-widest [&_.healcode-pricing-option-text-link]:px-6 [&_.healcode-pricing-option-text-link]:py-3 [&_.healcode-pricing-option-text-link]:hover:bg-white/90 [&_.healcode-pricing-option-text-link]:transition-colors"
                            dangerouslySetInnerHTML={{
                                __html: `<healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="8337" data-mb-site-id="137536" data-service-id="10423" data-bw-identity-site="true" data-type="pricing-link" data-inner-html="Adult Free Trial" />`
                            }}
                        />
                        <Link
                            href="/free-trial/kids"
                            className="group inline-flex items-center justify-center gap-2 bg-transparent border border-white text-white font-bold uppercase text-xs tracking-widest px-6 py-3 rounded-none hover:bg-white/10 transition-colors"
                        >
                            Kids Free Trial
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Tabbed Pricing Grid */}
            <Section className="bg-black py-16">
                <Tabs defaultValue="men" className="max-w-5xl mx-auto">
                    <TabsList className="grid w-full grid-cols-4 bg-zinc-900 border border-zinc-800 rounded-none h-14 mb-12">
                        <TabsTrigger value="men" className="data-[state=active]:bg-white data-[state=active]:text-black font-bold uppercase text-xs tracking-widest rounded-none h-full">Men</TabsTrigger>
                        <TabsTrigger value="ladies" className="data-[state=active]:bg-white data-[state=active]:text-black font-bold uppercase text-xs tracking-widest rounded-none h-full">Ladies</TabsTrigger>
                        <TabsTrigger value="boys" className="data-[state=active]:bg-white data-[state=active]:text-black font-bold uppercase text-xs tracking-widest rounded-none h-full">Boys</TabsTrigger>
                        <TabsTrigger value="girls" className="data-[state=active]:bg-white data-[state=active]:text-black font-bold uppercase text-xs tracking-widest rounded-none h-full">Girls</TabsTrigger>
                    </TabsList>

                    {Object.entries(pricingData).map(([key, data]) => (
                        <TabsContent key={key} value={key} className="mt-0">
                            <div className="text-center mb-10">
                                <h2 className="font-heading text-2xl font-bold uppercase text-white mb-2">{data.title}</h2>
                                <p className="text-white/60">{data.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {data.options.map((option, i) => (
                                    <div
                                        key={i}
                                        className={`relative flex flex-col p-6 border ${option.popular ? 'border-white bg-zinc-900' : 'border-zinc-800 bg-black'}`}
                                    >
                                        {option.popular && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold uppercase px-3 py-1 tracking-wider">
                                                Popular
                                            </div>
                                        )}
                                        <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">{option.name}</h3>
                                        <div className="flex items-baseline gap-1 mb-6">
                                            <span className="text-3xl font-bold text-white">{option.price}</span>
                                            <span className="text-sm text-white/50">{option.period}</span>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-2 mb-6 flex-grow">
                                            {option.features.map((feature, j) => (
                                                <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                                                    <Check className="h-4 w-4 text-white shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                            {/* Expiry Warning for Packs */}
                                            {option.name.includes("Pack") && (
                                                <li className="flex items-start gap-2 text-white/50 text-xs font-bold uppercase tracking-wider mt-4 pt-4 border-t border-white/10">
                                                    <span>Sessions expire monthly (no rollover)</span>
                                                </li>
                                            )}
                                        </ul>

                                        {/* Healcode Widget */}
                                        <div
                                            className="mt-auto [&_.healcode-contract-text-link]:block [&_.healcode-contract-text-link]:w-full [&_.healcode-contract-text-link]:text-center [&_.healcode-contract-text-link]:bg-white [&_.healcode-contract-text-link]:text-black [&_.healcode-contract-text-link]:font-bold [&_.healcode-contract-text-link]:uppercase [&_.healcode-contract-text-link]:text-xs [&_.healcode-contract-text-link]:tracking-widest [&_.healcode-contract-text-link]:py-3 [&_.healcode-contract-text-link]:hover:bg-white/90 [&_.healcode-contract-text-link]:transition-colors [&_.healcode-pricing-option-text-link]:block [&_.healcode-pricing-option-text-link]:w-full [&_.healcode-pricing-option-text-link]:text-center [&_.healcode-pricing-option-text-link]:border [&_.healcode-pricing-option-text-link]:border-zinc-700 [&_.healcode-pricing-option-text-link]:text-white [&_.healcode-pricing-option-text-link]:font-bold [&_.healcode-pricing-option-text-link]:uppercase [&_.healcode-pricing-option-text-link]:text-xs [&_.healcode-pricing-option-text-link]:tracking-widest [&_.healcode-pricing-option-text-link]:py-3 [&_.healcode-pricing-option-text-link]:hover:bg-zinc-900 [&_.healcode-pricing-option-text-link]:transition-colors"
                                            dangerouslySetInnerHTML={{ __html: getWidgetHtml(option.type, option.serviceId) }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Section>

            {/* FAQ */}
            <Section className="bg-zinc-950 py-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-tight text-center mb-12">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-zinc-800">
                            <AccordionTrigger className="text-white font-bold hover:text-white/80">Do I have to sign a long-term contract?</AccordionTrigger>
                            <AccordionContent className="text-white/60">
                                No. Our memberships are monthly auto-pay. We require 30 days notice for cancellation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-zinc-800">
                            <AccordionTrigger className="text-white font-bold hover:text-white/80">What's the difference between PAYG and Packs?</AccordionTrigger>
                            <AccordionContent className="text-white/60">
                                Pay As You Go lets you pay per class with no commitment. Packs give you a set number of sessions per month at a discounted rate. Please note, unused classes do not roll over and expire at the end of the month.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-b border-white/10 px-4">
                            <AccordionTrigger className="text-white font-bold hover:text-white/80">How do I cancel my membership?</AccordionTrigger>
                            <AccordionContent className="text-white/60">
                                Email us or speak to reception with 30 days notice. We'll cancel your auto-pay at the end of your billing cycle.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>
        </div>
    );
}
