"use client"
import Image from 'next/image'

function AboutSection() {
  
   return (
    <section className="flex justify-center text-white" id="about">
    <div className="gap-8 flex items-center justify-center px-4
    lg:w-[850px] lg:h-[450px]
    xl:w-[1550px] xl:h-[550px]
    xl:px-16 ">
        <div className=" md:mt-4 text-left flex flex-col justify-center h-full xl:mt-20 xl:pt-12 mt-12 pt-4">
        <h2 className=" md:text-4xl lg:text-5xl text-4xl font-bold text-white flex justify-center pl-4 pr-4 mr-2">Herzlich</h2>
        <h2 className=" md:text-4xl lg:text-5xl text-4xl font-bold text-white flex justify-center pl-4 pb-6 pr-4">Willkommen</h2>
        <p className='text-white text-xl lg:text-2xl xl:mt-12'> bei JP Caravans,

        Wir sind dein Partner im Bereich des Autarken Campens und weiterem Zubehör für deinen Caravan. 
        <br/>
        <br/>
        Egal ob Wohnwagen, Wohnmobil oder Van mit uns erschafft du deinen ganz Persönlichen Campertraum.

        Ob du einen Mover nachgerüstet haben möchtest oder dein Camper komplett Autark werden soll. Bei uns erhälst du alles was du für deinen Caravan brauchst!
        <br/>
        <br/>
        Wir, das sind Julian und Philipp zwei seid Jahren begeisterte Camper die sich Ihre eigenen Camper schon Individuelle gestaltet haben. 
        <br/>
        Da wir beide KFZ-Meister sind und auf Jahrelange Berufserfahrung zurückblicken können ist dein Camper bei uns in besten Händen!</p>
        </div>   
        </div>  
    </section>
  )
}

export default AboutSection