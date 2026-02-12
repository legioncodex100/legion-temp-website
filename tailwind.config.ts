import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "#000000",
                surface: "#0A0A0A",
                "surface-highlight": "#121212",
                primary: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#0A0A0A",
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#0A0A0A",
                    foreground: "#71717A",
                },
                accent: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#000000",
                },
                border: "#1F1F23", // Even darker, sharper border
                input: "#1F1F23",
                ring: "#FFFFFF",
            },
            fontFamily: {
                heading: ["var(--font-outfit)", "sans-serif"],
                body: ["var(--font-plus-jakarta)", "sans-serif"],
            },
            borderRadius: {
                lg: "2px", // Extremely sharp
                md: "1px",
                sm: "0px",
            },
        },
    },
    plugins: [],
};
export default config;
