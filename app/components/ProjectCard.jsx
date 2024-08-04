import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const  ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div>
      <div className='rounded-t-xl relative group'>
      <img className='rounded-md relative group' 
      src={imgUrl} 
      loading="lazy"
      />
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] 
      bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
      </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-2 px-4'>
        <h5 className='text-white text-lg md:text-base font-semibold mb-1'>{title}</h5>
        <p className='text-[#ADB7BE text-sm md:text-sm'>{description}</p>
      </div>
      </div>
  )
}

export default ProjectCard;