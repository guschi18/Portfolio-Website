"use client";

import Link from 'next/link';
import Image from 'next/image';

function Navbar() {

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto pb-2 pl-2 pr-2 pt-2 md:pl-8 md:pr-8 md:pt-8">
      <Link href="/" className="text-3xl text-white font-semibold">
        <div>JP Caravans</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar