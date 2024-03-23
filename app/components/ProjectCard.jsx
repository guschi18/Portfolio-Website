import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const  ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className='rounded-t-xl relative group'>
      <img className='rounded-md relative group' 
      src={imgUrl} 
      />
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] 
      bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
          <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
          
        </Link>
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