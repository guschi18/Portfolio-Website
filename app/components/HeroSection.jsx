"use client"

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';



 const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div 
        initial={{ opaticity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5}} 
        className='col-span-8 place-self-center text-center sm:text-left justify-self-start'><>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-clig-text 
            bg-gradient-to-r from-red-500 to-orange-500 '>
              Wir sind dein Profi für Nachrüstungen von {" "}
            </span>
          <br />
      <TypeAnimation className="text-4xl"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Movern Solaranlagen und mehr...',
         // wait 1s before replacing "Mice" with "Hamsters"
          ]}
            
      />
      </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg md:text-xl lg:text-xl mb-6'>
        Zuverlässige Partner für deine Anforderungen</p></>
            <div>
              <Link href="/#kontakt">
              <button   className='px-6 py-2.5 w-full rounded-full sm:w-fit mr-4 bg-gradient-to-r from-red-500 to-orange-500 hover:bg-slate-200 text-white mb-4'>
              Kontakt</button></Link>
              <Link href="/#web3onboarding">
              <button className='px-1 py-1 w-full rounded-full sm:w-fit mr-4 
              bg-gradient-to-r from-red-500 to-orange-500 hover:bg-slate-800
               text-white'>
              <span className='block px-6 py-2  bg-[#121212]  hover:bg-slate-800 rounded-full'>
              Projekte</span>
              </button></Link>
            </div>
          </motion.div>
          <motion.div 
        initial={{ opaticity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5}}  className='col-span-4 place-self-center lg:mt-0'>
    <     div className='w-[290px] h-[250px] mt-10 mb-10
            md:w-[280px] md:h-[400px] md:ml-12
            lg:w-[340px] lg:h-[400px] lg:ml-12
            xl:w-[380px] xl:h-[400px] 
            relative'>
            <Image
             src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/logo.jpg?alt=media&token=210aa10a-e7d4-4630-bdbf-ba868103fba5"
             className="absolute rounded-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             width={500}
             height={500}
            alt="Logo"
            />
          </div>
          </motion.div>
      </div>
    </section>
  )
}

export default HeroSection