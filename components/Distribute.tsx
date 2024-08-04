"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Carousel from "./ui/Carousel";
import { TextGenerateEffect } from "./ui/TextEffect";
import { text, logos } from "@/data/index";

const Distribute = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="uppercase heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 py-2">
                Change the way you distribute{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose py-4">your music</span>
            </h1>
            <div className="mx-12 md:mx-24 text-center my-10">
                <p className=" text-graytext sm:text-xl md:text-xl font-montserrat">
                Launch your music into the world faster than ever! Our Express distribution service ensures that your songs will be available in major stores within just 78 hours. No additional costs. No complications. Plus, any updates you need—whether it’s a cover change, audio modification, or information revision—will take effect in record time: 24 to 72 hours. We’re the fastest and most reliable choice for artists like you.
                </p>
            </div>
            <Carousel images={logos} />
            <div className="z-50 flex flex-col justify-center items-center mx-[25px] ">
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
