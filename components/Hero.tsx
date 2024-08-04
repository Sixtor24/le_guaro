"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ImagesSlider } from './ui/ImagesSlider';
import { images, words } from '@/data/index';
import { FlipWords } from './ui/FlipWords';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 relative'>
            <ImagesSlider className="h-[50rem] w-full" images={images}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-start items-start absolute left-0 right-0 mx-4 sm:mx-8 md:mx-12 lg:mx-32 max-w-screen-xl"
                >
                    <motion.p className="font-bold text-2xl sm:text-3xl md:text-5xl font-manrope text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                        RELEASE UNLIMITED
                    </motion.p>
                    <motion.p className="font-bold text-2xl sm:text-3xl md:text-5xl font-manrope text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mt-2">
                        MUSIC WORLDWIDE
                    </motion.p>
                    <FlipWords className='font-bold text-xl sm:text-2xl md:text-4xl font-manrope text-left bg-clip-text text-transparent text-rose shadow-purple mt-2' words={words} />
                    <motion.p className="font-medium sm:text-lg md:text-base font-montserrat text-left bg-clip-text text-transparent bg-gradient-to-b text-white mt-8">
                        THE BEST PART? PROTECT WITH CONTENT ID ,<br />& KEEP 100% OF YOUR RIGHTS & EARNINGS
                    </motion.p>
                    <motion.div className='font-bold text-lg sm:text-xl md:text-xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2'>
                        <a href="#">
                            <MagicButton title='START NOW 30-DAYS FREE TRIAL' buttonClass='mr-4' icon={<FaLocationArrow />} position="right" /> ONLY <span className='font-bold text-lg sm:text-xl md:text-3xl text-left bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose'>$11 /</span> YEAR
                        </a>
                    </motion.div>
                    {/* <motion.p className="font-bold text-lg sm:text-xl md:text-2xl text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mt-4">
                        ONLY <span className='font-bold text-lg sm:text-xl md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose'>$11/</span> YEAR
                    </motion.p> */}
                </motion.div>
            </ImagesSlider>
        </div>
    );
};

export default Hero;
