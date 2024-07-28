"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { motion } from "framer-motion";
import { ImagesSlider } from './ui/ImagesSlider';

import { images, words } from '@/data/index'
import { FlipWords } from './ui/FlipWords';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20'>
            <div>
                <ImagesSlider className="h-[50rem] w-full]" images={images} >
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
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                            RELEASE UNLIMITED <br /> MUSIC WORLDWIDE
                            <FlipWords className=' text-rose shadow-purple' words={words} /> <br />

                        </motion.p>
                        <motion.p className="font-bold text-xl md:text-1xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-400 py-2">
                            THE BEST PART? PROTECT WITH CONTENT ID & KEEP 100% OF YOUR RIGHTS & EARNINGS
                        </motion.p>
                        <a>
                            <MagicButton title='START NOW 30-DAYS FREE TRIAL' icon={<FaLocationArrow />} position="right" />
                            <motion.p className="font-bold text-xl md:text-1xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                                ONLY <span className='font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple to-rose py-4'>$11/</span> YEAR
                            </motion.p>
                        </a>
                    </motion.div>
                </ImagesSlider>
            </div>
        </div>
    )
}

export default Hero