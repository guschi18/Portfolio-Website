"use client";
import React from 'react'
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr: false});

const achievementsList = [
  {
    metric: "Jahre Erfahrung im Automobilbereich",
    value: "15",
   
  },
  {
    metric: "Meisterbriefe",
    value: "2",
    
    
  },
  {
    metric: "Jahre Ehrfahrung im Campen",
    value: "30",
    
    
  },
 
];

const AchievementsSection = () => {
  return (
    <div className='px-6 xl:gap-8 sm:py-16 xl:pr-14'>
      <div className='border-[#33353F] border rounded-md py-16 px-17 flex flex-col sm:flex-row items-center justify-between'>
      {
      achievementsList.map((achievement, index) => {
        return (
          <div key={index} className='flex flex-col items-center justify-center mx-6 lg:my-0 my-8'>
            <h2 className='text-white text-4xl font-bold flex flex-row sm:my-8 lg:my-0'>
              {achievement.prefix}
              <AnimatedNumbers
              includeComma
              animateToNumber={parseInt(achievement.value)}
              locale='es-US'
              className='text-white text-4xl font-bold'
              configs={(_, index) => {
                return {
                  mass: 1, 
                  friction: 100,
                  tensions: 100 * (index +1 )
                };
              }}
              />
               {achievement.postfix}
              </h2>
            <p className="text-[#ABD7BE] text-base text-center">{achievement.metric}</p>
          </div>
        );
      })}
      </div>
      </div>
  )
}

export default AchievementsSection