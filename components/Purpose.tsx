"use client";
import Image from "next/image";
import { LampContainer } from "./ui/Lamp";
import { TracingBeam } from "./ui/TracingBeam";
import { dummyContent } from "@/data/indexTracingBeams";
import { twMerge } from "tailwind-merge";
import { GlareCard } from "./ui/GlareCard";

const Purpose = () => {
    return (
        <div id="projects" className="relative">
            <LampContainer className="relative z-10">
                designer for
            </LampContainer>
            <TracingBeam className="relative z-20 px-6 top-[-10rem]">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-rose font-bold uppercase font-manrope rounded-full text-lg w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-4xl font-manrope uppercase font-medium text-white-200 mb-8")}>
                                {item.title}
                            </p>

                            <div className="text-sm text-white prose prose-sm dark:prose-invert">
                                
                                    <GlareCard className="flex flex-col items-center justify-center mb-10">
                                        {item.content}
                                    </GlareCard>
                                <div className="text-lg text-slate-100 font-montserrat max-w mt-10 prose prose-sm dark:prose-invert">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
};

export default Purpose;
