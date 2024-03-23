"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';



 const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
        initial={{ opaticity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5}} 
        className='col-span-8 place-self-center text-center sm:text-left justify-self-start'><>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg_leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-clig-text 
            bg-gradient-to-r from-red-500 to-orange-500 '>
              Hallo, ich bin {" "}
            </span>
          <br />
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Philipp',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'deine Eintrittskarte ins WEB3        ',]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
      />
      </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg md:text-xl lg:text-xl mb-6'>
          Herzlich Willkommen auf meiner Portfolio-Seite!</p></>
            <div>
              <Link href="/#contact">
              <button   className='px-6 py-2.5 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-slate-200 text-white mb-4'>
              Beauftrage Mich</button></Link>
              <Link href="/#projects">
              <button className='px-1 py-1 w-full rounded-full sm:w-fit mr-4 
              bg-gradient-to-r from-red-500 to-orange-500 hover:bg-slate-800
               text-white'>
              <span className='block px-6 py-2  bg-[#121212]  hover:bg-slate-800 rounded-full'>
              Web3 einbinden</span>
              </button></Link>
            </div>
          </motion.div>
          <motion.div 
        initial={{ opaticity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5}}  className='col-span-4 place-self-center mt-4 lg:mt-0'>
    <     div className='w-[220px] h-[250px]
            md:w-[280px] md:h-[400px] md:ml-12
            lg:w-[340px] lg:h-[400px] lg:ml-12
            xl:w-[380px] xl:h-[400px] 
            relative'>
            <Image
             src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/Shibo%20-%20Kopie.PNG?alt=media&token=607b250a-e478-419e-9e04-e989c2cc43ab"
             className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             width={400}
             height={400}
            alt="Logo"
            />
          </div>
          </motion.div>
      </div>
    </section>
  )
}

export default HeroSection