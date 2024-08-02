"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Carousel from "./ui/Carousel";
import { TextGenerateEffect } from "./ui/TextEffect";
import { text, logos } from "@/data/index";

const Distribute = () => {
    return (
        <div className="py-15" id="projects">
            <h1 className="heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 py-2">
                Change the way you distribute{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose py-4">your music</span>
            </h1>
            <div className="mx-12 md:mx-24 text-center my-10">
                <TextGenerateEffect duration={2} filter={true} words={text} />
            </div>
            <Carousel images={logos} />
            <div className="z-50 flex flex-col justify-center items-center mx-[25px] my-10">
                <MagicButton 
                    otherClasses="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg break-words" 
                    title="ARE YOU A RECORD LABEL OR A DISTRIBUTOR? LET'S TALK" 
                    icon={<FaLocationArrow />} 
                    position="right" 
                />
            </div>
        </div>
    );
};

export default Distribute;
