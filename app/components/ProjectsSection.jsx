"use client";
import React, { useState, useRef }  from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Solaranlage",
    description: "Nachrüstung einer Solaranlage auf deinem Dach",
    image: '/images/projects/solar.jpg',
    tag: ["Alle", "Camper"],
  },
  {
    id: 2,
    title: "Mover",
    description: "Nachrüstung Mover für deinen Camper",
    image: '/images/projects/mover.jpg',
    tag: ["Alle", "Camper"],
  },
  {
    id: 3,
   title: "Dämmung",
    description: "Wir dämmen deinen Van nach höchstem Standart",
    image: '/images/projects/daemmung.png',
    tag: ["Alle", "Van"],
  },
  {
    id: 4,
   title: "Ausbau",
    description: "Wir bauen dir deinen Camper nach deinen Wünschen aus",
    image: '/images/projects/ausbau.png',
    tag: ["Alle", "Van"],
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
      <section id="web3onboarding">
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mt-12 md:mb-5 xl:pt-28'>
        Projekte
        </h1>
        <div className='text-white flex flex-row justify-center items-center gap-2 pt-4 pb-6'>
          <ProjectTag onClick={handleTagChange} 
          name="Alle" 
          isSelected={tag === "Alle"} 
          />
           <ProjectTag onClick={handleTagChange} 
          name="Camper" 
          isSelected={tag === "Camper"} 
          />
          <ProjectTag onClick={handleTagChange} 
          name="Van" 
          isSelected={tag === "Van"} 
          />
        </div>
        <ul ref={ref} className="md:w-[680px] lg:w-[940px] xl:w-[1250px] pt-4 grid md:grid-cols-3 gap-8 md:gap-12">
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
            />
          </motion.li>
          ))}
        </ul>
      </section>
  )
}

export default ProjectsSection