import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-left-transparent border-r-transparent text-white'>
      <div className='container pb-12 pt-6 xl:p-12 flex justify-between'>
        <div className='xl:ml-36 md:ml-7 ml-2'>
          <Link href="/">
          <Image
          src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/1-removebg-preview.png?alt=media&token=b921186a-0760-47a5-842d-deef8df34199"
          width={100}
          height={100}
          alt="Logo"
        />
        </Link>
        </div>
        <p className='text-slate-600 mt-4 mr-2 '>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer