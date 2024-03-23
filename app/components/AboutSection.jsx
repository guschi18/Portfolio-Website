"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Hardhat</li>
        <li>Solidity</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>freeCodeCamp</li>
        <li>CodeCombat</li>
        <li>Alchemy Web3</li>
        <li>Moralis Web3</li>
        <li>LearnWeb3</li>
        <li>thirdweb</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Freshman - Certification</li>
        <li>Sophomore - Certification</li>
      </ul>
    )
  }


]


function AboutSection() {
  
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className="text-white" id="about">
    <div className="gap-8 items-center pt-6 px-4 
    sm:py-16 
    md:grid md:grid-cols-2 
    xl:gap-16 xl:px-16 
    lg:w-[850px] lg:h-[450px]
    xl:w-[1075px] xl:h-[450px]
    xl:ml-24 xl:pt-24">
    <Image
             src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/code.jpg?alt=media&token=701caf1f-f77c-441c-89a1-20ce274339b1"
            width={450}
            height={450}
            alt="Logo"
            className='rounded'
            />
       <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className=" md:text-4xl lg:text-5xl text-2xl font-bold text-white mb-4">About</h2>
        <p className="text-lg lg:text-lg">Das wird eine Beschreibung über mich</p>
        <div className='flex text-lg flex-row justifiy-start mt-4'>
          <TabButton selectTab={() => handleTabChange("skills")} 
          active={tab === "skills"}>
          {" "}
          Skills{" "}
          </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} 
          active={tab ==="education"}>
          {" "}
           Education{" "}
          </TabButton>
          <TabButton selectTab={() => handleTabChange("certifications")} 
          active={tab==="certifications"}>
          {" "}
           Experience{" "}
          </TabButton>
        </div>
        <div className='mt-6'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>   
        </div>  
    </section>
  )
}

export default AboutSection