"use client";

import { TextGenerateEffect } from "./ui/TextEffect";
import { text } from "@/data/index"


const Distribute = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 py-2">
                Change the way you distribute{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose py-4">your music</span>
            </h1>
            <div className="mx-12 md:mx-24 text-center my-10">
                <TextGenerateEffect duration={2} filter={true} words={text} />
            </div>
        </div>
    );
};

export default Distribute;