import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Star, History, Target, Heart } from "lucide-react";
import Image from "next/image";
import { ClassGallery } from "@/components/features/class-gallery";

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen bg-black text-white pt-32 md:pt-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <Image
                        src="/images/gym-interior-legion.jpg"
                        alt="Legion Grappling Academy Interior"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4 block">
                        Est. 2011
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
                        The Legion Story
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        Legion Grappling Academy is dedicated to providing high-level instruction across the full spectrum of grappling arts.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <Section className="bg-black border-b border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                            Our Mission
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 leading-none text-white">
                            Building Exceptional People
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                            <p>
                                At Legion, we believe grappling is more than just a sport—it's a path to personal growth. Our core mission is to foster a profound passion for grappling while promoting essential values: unwavering discipline, continuous skill development, and deep community engagement.
                            </p>
                            <p>
                                We are committed to building not just exceptional athletes, but exceptional people. Our doors are open to men, women, and children of all experience levels, from absolute beginners to seasoned competitors.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900/50 p-6 border border-white/5 flex flex-col items-center text-center">
                            <Target className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-bold text-white uppercase text-sm mb-2">Discipline</h3>
                            <p className="text-xs text-zinc-500">Unwavering commitment to growth.</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 border border-white/5 flex flex-col items-center text-center">
                            <Award className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-bold text-white uppercase text-sm mb-2">Skill</h3>
                            <p className="text-xs text-zinc-500">Continuous technical development.</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 border border-white/5 flex flex-col items-center text-center col-span-2">
                            <Users className="w-8 h-8 text-accent mb-4" />
                            <h3 className="font-bold text-white uppercase text-sm mb-2">Community</h3>
                            <p className="text-xs text-zinc-500">Deep engagement and support.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* The Origin Story */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4 block">
                            The Beginning
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-8">
                            The Origin Story
                        </h2>
                    </div>

                    <div className="prose prose-invert prose-lg mx-auto text-zinc-400 leading-relaxed space-y-8">
                        <p>
                            While Legion Grappling Academy officially found its home in Leyton in 2011, its foundation was laid nearly two decades earlier. The true origin of the Legion system traces back to 1995, when founder <span className="text-white font-bold">Dr. Amir Eslami</span> first began coaching and meticulously developing his unique wrestling system.
                        </p>
                        <p>
                            Dr. Eslami’s journey in grappling is deeply personal, rooted in family tradition. He inherited his passion and expertise from his father, an accomplished wrestler and competitor who earned distinction representing Iran on the international stage.
                        </p>
                        <p>
                            This powerful lineage and a continuous, 16-year commitment to developing a comprehensive system culminated in the formal establishment of Legion Grappling Academy in 2011, realizing Dr. Amir’s vision for a dedicated center for high-level grappling instruction.
                        </p>
                    </div>
                </div>
            </Section>
            {/* Coach Ali Tribute */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                        <div className="order-2 md:order-1 relative aspect-[3/4] rounded-sm border border-white/10 overflow-hidden">
                            <Image
                                src="/images/about-us/coach-ali/coach-ali-eslami-8.jpeg"
                                alt="Coach Ali Eslami"
                                fill
                                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                                The Legacy
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                                Coach Ali Eslami
                            </h2>
                            <div className="prose prose-invert prose-lg text-zinc-400 leading-relaxed space-y-6">
                                <p>
                                    The roots of Legion Grappling Academy run deep, anchored in the living legacy of <span className="text-white font-bold">Coach Ali Eslami</span>. A formidable wrestler and competitor, Coach Ali earned distinction representing Iran on the international stage, competing at the highest levels of the sport.
                                </p>
                                <p>
                                    His technical mastery, unwavering discipline, and competitive spirit are the sparks that ignited Dr. Amir Eslami's own passion for grappling. Coach Ali doesn't just teach moves; he instills a philosophy of hard work and respect that forms the very DNA of Legion today.
                                </p>
                                <p>
                                    We honor his continued mentorship and his foundational contribution to our academy. He remains the original architect of our resilience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Slideshow */}
                    <div className="mt-16">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 text-center">Archive Gallery</h3>
                        <ClassGallery
                            images={[
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-1.jpeg", alt: "Wrestling Archive 1", caption: "Training Days" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-2.jpeg", alt: "Wrestling Archive 2", caption: "International Competition" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-3.jpeg", alt: "Wrestling Archive 3", caption: "Technique & Precision" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-4.jpeg", alt: "Wrestling Archive 4", caption: "The Early Years" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-5.jpeg", alt: "Wrestling Archive 5", caption: "Legacy" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-6.jpeg", alt: "Wrestling Archive 6", caption: "Coach & Mentor" },
                                { src: "/images/about-us/coach-ali/coach-ali-eslami-7.jpeg", alt: "Wrestling Archive 7", caption: "Family Tradition" },
                            ]}
                            className="grid-cols-2 md:grid-cols-4"
                        />
                    </div>
                </div>
            </Section>

            {/* Head Coach Dr. Amir Eslami */}
            <Section className="bg-zinc-950 border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                                The Visionary
                            </span>
                            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                                Head Coach<br />Dr. Amir Eslami
                            </h2>
                            <div className="prose prose-invert prose-lg text-zinc-400 leading-relaxed space-y-6">
                                <p>
                                    As the founder of Legion Grappling Academy, <span className="text-white font-bold">Dr. Amir Eslami</span> represents the bridge between tradition and modern grappling science. Inheriting a wealth of wrestling knowledge from his father, he has dedicated his life to refining and expanding that system into a holistic martial arts curriculum.
                                </p>
                                <p>
                                    His journey in submission grappling and Jiu Jitsu began in <span className="text-white font-bold">1998</span>. Decades of dedication culminated in <span className="text-white font-bold">2024</span>, when he was awarded his Black Belt by the renowned <span className="text-white font-bold">Jude Samuel</span>.
                                </p>
                                <p>
                                    Dr. Amir's approach to coaching is analytical and precise. He views grappling not as a collection of random moves, but as a structured language that can be mastered through systematic study. His goal is to demystify complex techniques, making high-level grappling accessible to everyone.
                                </p>
                            </div>
                        </div>
                        <div className="order-2 relative aspect-[3/4] rounded-sm border border-white/10 overflow-hidden bg-zinc-900 group">
                            <Image
                                src="/images/about-us/coach-amir/coach-amir-profile.jpeg"
                                alt="Dr. Amir Eslami"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    {/* Dr. Amir Gallery */}
                    <div className="mt-16">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 text-center">A Life in Grappling</h3>
                        <ClassGallery
                            images={[
                                { src: "/images/about-us/coach-amir/coach-amir-recieving-black-belt-2024.jpeg", alt: "Receiving Black Belt from Jude Samuel", caption: "Black Belt Promotion (2024)" },
                                { src: "/images/about-us/coach-amir/coach-amir-coach-ali.jpeg", alt: "With Coach Ali", caption: "Father & Son" },
                                { src: "/images/about-us/coach-amir/coach-amir-training-coaching-japan.jpeg", alt: "Training in Japan", caption: "International Experience" },
                                { src: "/images/about-us/coach-amir/coach-amir-jordan-burroughs.jpeg", alt: "With Jordan Burroughs", caption: "With Legend Jordan Burroughs" },
                                { src: "/images/about-us/coach-amir/coach-amir-henry-cejudo.jpeg", alt: "With Henry Cejudo", caption: "With Legend Henry Cejudo" },
                                { src: "/images/about-us/coach-amir/coach-amir-iranian-natianl-wrestlers.jpeg", alt: "With Iranian National Wrestlers", caption: "Iranian Wrestling Roots" },
                            ]}
                            className="grid-cols-2 md:grid-cols-3"
                        />
                    </div>
                </div>
            </Section>

            {/* Facility / Dedication Section */}
            <Section className="bg-black border-b border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                            The Dojo
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                            Dedicated to the Art
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We have built a specific, purpose-driven environment that honors the discipline of grappling. With <span className="text-white font-bold">3,800 sq ft</span> of premium floor space, every inch of our academy is designed to facilitate learning, safety, and the purity of training.
                        </p>
                    </div>

                    <ClassGallery
                        images={[
                            { src: "/images/academy-images/gym-shots-7.jpeg", alt: "Legion Academy Interior Main Hall", caption: "Elite Training Space" },
                            { src: "/images/academy-images/gym-shots-1.jpeg", alt: "Legion Academy Interior Main Mat", caption: "Main Training Hall" },
                            { src: "/images/academy-images/gym-shots-2.jpeg", alt: "Legion Academy Strength Area", caption: "Strength & Conditioning" },
                            { src: "/images/academy-images/gym-shots-3.jpeg", alt: "Legion Academy Mats", caption: "Expansive Mat Space" },
                            { src: "/images/academy-images/gym-shots-4.jpeg", alt: "Legion Academy Equipment", caption: "Premium Equipment" },
                            { src: "/images/academy-images/gym-shots-5.jpeg", alt: "Legion Academy Detail", caption: "Attention to Detail" },
                        ]}
                        className="grid-cols-1 md:grid-cols-3"
                    />

                    {/* Video Tour */}
                    <div className="mt-16 aspect-video w-full rounded-sm border border-white/10 overflow-hidden relative bg-zinc-900">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/THo-wjfMUic?rel=0"
                            title="Legion Grappling Academy Facility Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </Section>
            <Section className="bg-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2 md:block hidden" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">
                            Milestones & Growth
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                            History Timeline
                        </h2>
                    </div>

                    <div className="space-y-12 md:space-y-24 relative">
                        {/* Vertical Line for Mobile/Desktop */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:bg-white/10 transform md:-translate-x-1/2" />

                        {/* Timeline Items */}
                        {[
                            {
                                year: "1995",
                                title: "The Genesis of the System",
                                desc: "Dr. Amir Eslami begins coaching wrestling and developing the sophisticated, proprietary grappling system that would become the core of Legion Grappling."
                            },
                            {
                                year: "2011",
                                title: "Finding a Home in Leyton",
                                desc: "Legion Grappling Academy officially establishes its first dedicated facility at Transform House in Leyton. Launch of dedicated wrestling academies for both kids and adults."
                            },
                            {
                                year: "2013",
                                title: "Expanding the Grappling Arts",
                                desc: "Recognizing the synergy between grappling disciplines, Legion successfully integrates Brazilian Jiu-Jitsu and Nogi Grappling into the curriculum for adult students."
                            },
                            {
                                year: "2016",
                                title: "A New Era of Space and Training",
                                desc: "A major refurbishment significantly extends the mat space and adds a dedicated strength and conditioning area, creating one of the largest dedicated grappling facilities in London."
                            },
                            {
                                year: "2020",
                                title: "Resilience Through Crisis",
                                desc: "The global COVID-19 pandemic threatened the existence of the academy, but the dedication and strength of the Legion community ensured it pulled through."
                            },
                            {
                                year: "2021",
                                title: "Launch of Kids Jiu-Jitsu",
                                desc: "The academy expands its youth offerings with the establishment of a dedicated Kids Jiu-Jitsu Academy, fostering skill and discipline in the next generation."
                            },
                            {
                                year: "2024",
                                title: "Facility Overhaul and Expansion",
                                desc: "Comprehensive refurbishment completed, extending mat space to incorporate a second mat, and a complete renovation of strength and conditioning areas, changing rooms, and showers."
                            },
                            {
                                year: "2025+",
                                title: "Growth and Inclusion",
                                desc: "The academy grows to over 200 regular members. Dedicated female-only grappling classes are introduced to support growth and promote accessibility."
                            }
                        ].map((item, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Date Marker */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-accent transform -translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                                {/* Content Side */}
                                <div className="md:w-1/2 pl-20 md:pl-0 md:px-16">
                                    <div className={`text-left ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-4xl md:text-6xl font-black text-white/5 block mb-2 font-heading">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white uppercase mb-3">{item.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Empty Side for alignment */}
                                <div className="md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    )
}
