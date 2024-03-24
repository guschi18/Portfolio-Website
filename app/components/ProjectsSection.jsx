"use client";
import React, { useState, useRef }  from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Simple Wallet Connect",
    description: "Simple Wallet Connect von thirdweb bringt jede Website ins Web3",
    image: '/images/projects/thirdweb-login.png',
    tag: ["Alle", "Wallet"],
    previewUrl: "https://simple-wallet-connect-v2.vercel.app/",
  },
  
  {
    id: 2,
    title: "Campact Wallet Connect",
    description: "Compact Wallet Connect von thirdweb bringt jede Website ins Web3 inklsuvie SOCIAL LOGIN",
    image: '',
    tag: ["Alle", "Wallet"],
    previewUrl: "",
  },
  {
    id: 3,
   title: "Embedded Wallet",
    description: "Eingebettete Wallets sind Wallets, die für Benutzer eingerichtet werden, wenn sie die App zum ersten Mal aufrufen",
    image: '',
    tag: ["Alle", "Wallet"],
    previewUrl: "https://third-web-web3-login.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Alle");
  const ref = useRef(null);
  const isInView = useInView(ref, {one: true});

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
     project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

return (
      <section id="web3einbinden">
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white pt-8 mt-10 mb-6 md:mb-5 xl:pt-24'>
        Web3 Onboarding
        </h1>
        <div className='text-white flex flex-row justify-center items-center gap-2 pt-4 pb-6'>
          <ProjectTag onClick={handleTagChange} 
          name="Alle" 
          isSelected={tag === "Alle"} 
          />
           <ProjectTag onClick={handleTagChange} 
          name="Wallet" 
          isSelected={tag === "Wallet"} 
          />
          <ProjectTag onClick={handleTagChange} 
          name="Web" 
          isSelected={tag === "Web"} 
          />
        </div>
        <ul ref={ref} className="md:w-[680px] lg:w-[940px] xl:w-[1250px] py-12 grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}>
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
          ))}
        </ul>
      </section>
  )
}

export default ProjectsSection