"use client";
import React, { useState} from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from"next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSONdata,
       };

       const response = await fetch(endpoint, options);
       const resData = await response.json();
      

       if (response.status === 200) {
        console.log("Messegae sent.");
        setEmailSubmitted(true);
      }
       };
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-8 gap-4 relative' id="kontakt">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className='z-10 xl:pl-2'><h5 className='text-2xl font-bold text-white my-2'>Lets connect</h5>
      <p className='text-[#ADB7BE] mb-4 max-w-md'>
      {" "}
      Beschreibung über mein Projekt
      </p>
      <div className='socials flex flex-row gap-2'>
        <Link href="linkedin.com">
        <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
      </div>
      </div>
      <div>
        <form className='flex flex-col xl:pr-11' onSubmit={handleSubmit}>
          <div className='mb-6'>
          <label htmlFor="email" type="email" className='text-white mb-2 block text-sm font-medium'>Mail</label>
          <input 
          name="email"
          type="email" 
          id="email" 
          required 
          placeholder="max-mustermann@gmail.com"
          className='bg-[#2d2e30] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          />
          </div>
          <div className='mb-6'>
          <label htmlFor="subject" type="email" className='text-white block text-sm mb-2 font-medium'>Titel</label>
          <input 
          name="subject"
          type="text" 
          id="subject" 
          required 
          placeholder="Kurzbeschreibung..."
          className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          />
          </div>
          <div className='mb-6'>
            <label
            htmlFor="message"
            className='text-white block text-sm mb-2 font-medium'
            >
              Nachricht
            </label>
            <textarea
              name="message"
              id="message"
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Lass eine Nachricht hier..."
              />
          </div>
          <button
          type="submit"
          className='bg-orange-600 hover:bg-orange-700 text-white fon-medium py-2.5 px-5 rounded-lg w-full '>Absenden!</button>
          {
            emailSubmitted && (<p className='text-green-500 text-sm mt-2'>Email sent succesfully!</p>)
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
