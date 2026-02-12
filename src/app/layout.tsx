import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Legion Grappling Academy | Train With Purpose",
    description: "The premier wrestling and BJJ academy in East London. Strictly monochrome, purely technical.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${outfit.variable} ${plusJakartaSans.variable} font-body bg-black text-white antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
                {/* Grain Texture Overlay */}
                <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Mindbody/Healcode Script */}
                <Script
                    src="https://widgets.mindbodyonline.com/javascripts/healcode.js"
                    strategy="afterInteractive"
                />

                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
