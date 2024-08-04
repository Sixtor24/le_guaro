"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Carousel from "./ui/Carousel";
import { TextGenerateEffect } from "./ui/TextEffect";
import { text, logos } from "@/data/index"
import { scrollContent } from "@/data/indexScroll";
import { ScrollReveal } from "./ui/ScrollReveal";


const Benefits = () => {
    return (
        <div className="pt-20" id="projects">
            <h1 className="heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 py-2">
                Where music meets{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose py-4">tech</span>
            </h1>
            <div className="mt-10">
            <ScrollReveal content={scrollContent}/>
            </div>
        </div>
    );
};

export default Benefits;