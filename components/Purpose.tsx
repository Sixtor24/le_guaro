"use client";
import Image from "next/image";
import { LampContainer } from "./ui/Lamp";
import { TracingBeam } from "./ui/TracingBeam";
import { dummyContent } from "@/data/indexTracingBeams";
import { twMerge } from "tailwind-merge";

const Purpose = () => {
    return (
        <div id="projects">
            <LampContainer>designer for</LampContainer>
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-rose font-bold rounded-full text-lg w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-4xl text-white-200 mb-8")}>
                                {item.title}
                            </p>

                            <div className="text-sm text-white prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                <div className="text-lg text-slate-100 max-w mt-10 prose prose-sm dark:prose-invert">
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
