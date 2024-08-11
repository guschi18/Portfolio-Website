import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer border-t border-t-[#33353F] text-white bg-[#121212] '>
      <div className='mb-3 pt-2 xl:p-6 flex justify-between xl:ml-48 xl:pr-24  md:pr-6 ml-4'>
        <Link href="/datenschutz">
        <p className='text-slate-600 mt-3 mb-2 mr-2 ' >Datenschutz</p>
        </Link>
        <Link href="/impressum">
        <p className='text-slate-600 mt-3 mb-2 mr-2 ' >Impressum</p>
        </Link>
        <p className='text-slate-600 mt-3 mb-2 mr-2 '>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer