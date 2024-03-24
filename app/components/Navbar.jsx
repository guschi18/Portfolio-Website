"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
      title: "About",
      path: "#about",
  },
  {
    title: "Web3 einbinden",
    path: "#web3einbinden",
  },
  {
    title: "Kontakt",
    path: "#kontakt",
  }
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0  z-10 bg-[#121212] bg-opacity-100'>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto pl-2 pr-2 pt-2 md:pl-8 md:pr-8 md:pt-8">
        <Link href="/" className="text-5xl text-white font-semibold">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/login-page-b381a.appspot.com/o/1-removebg-preview.png?alt=media&token=b921186a-0760-47a5-842d-deef8df34199"
          width={100}
          height={100}
          alt="Logo"
        />
        </Link>
        <div className='mobile-menu block md:hidden'>
        {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex md:p-0 md:flex-row md:space-x-8 mt-0'>
           {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar