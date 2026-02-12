import { Section } from "@/components/ui/section";
import { BentoGrid } from "@/components/features/bento-grid";

export default function ClassesPage() {
    return (
        <main className="flex flex-col min-h-screen bg-black text-white pt-24">
            <div className="container px-4 py-16 text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4 block">
                    Training Programs
                </span>
                <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
                    Choose Your Path
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-16">
                    Specialized instruction in Wrestling, Brazilian Jiu-Jitsu, and Judo for all ages and skill levels.
                </p>

                <BentoGrid />
            </div>
        </main>
    );
}
