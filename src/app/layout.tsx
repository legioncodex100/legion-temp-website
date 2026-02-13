import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
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
    title: {
        default: "Legion Grappling Academy | BJJ, Wrestling & MMA in East London",
        template: "%s | Legion Grappling Academy"
    },
    description: "The premier wrestling and BJJ academy in East London (E10). Expert coaching in Brazilian Jiu Jitsu, Wrestling, and MMA for adults and youth.",
    metadataBase: new URL('https://legiongrappling.com'), // Replace with actual domain
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: 'https://legiongrappling.com',
        siteName: 'Legion Grappling Academy',
        images: [
            {
                url: '/images/og-image.jpg', // Needs to be created
                width: 1200,
                height: 630,
                alt: 'Legion Grappling Academy',
            },
        ],
    },
    verification: {
        google: 'google-site-verification=PLACEHOLDER', // User to provide
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <GoogleTagManager gtmId="GTM-PDJSJ59J" />
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
