"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const navbaritems = [
    { id: 1, src: "/ds-img/menu-chat-icon.webp", alt: "Chat", ulname: "Chat With Astrologer", href: "/homepage/navbarcomp" },
    { id: 2, src: "/ds-img/phone.webp", alt: "Talk", ulname: "Talk To Astrologer", href: "/homepage/talkto" },
    { id: 3, src: "/ds-img/tarot-card.png", alt: "Tarot", ulname: "Tarot Reading", href: "/homepage/" },
    { id: 4, src: "/ds-img/om.webp", alt: "Protect", ulname: "Protective Kavach", href: "/protective-kavach" },
    { id: 5, src: "/ds-img/heal2.webp", alt: "Heal", ulname: "Healing", href: "/homepage/Inhealing" },
    { id: 6, src: "/ds-img/onpooja.webp", alt: "Puja", ulname: "Online Puja", href: "/online-puja" },
    { id: 7, src: "/ds-img/dhwani.webp", alt: "Dhwani", ulname: "Dhwani Services", href: "/homepage/Dhservice" },
  ];

  return (
    <>
  
      <button className="sm:hidden fixed top-4 left-4 z-50 text-[#8334e4]" onClick={() => setIsOpen(true)}>
        <FaBars size={28} />
      </button>


      <div className={`fixed top-0 left-0 h-full w-[75%] sm:w-[50%] md:w-[40%] bg-[#dfc7fd] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
   
        <button className="absolute top-4 right-4 text-[#8334e4]" onClick={() => setIsOpen(false)}>
          <FaTimes size={28} />
        </button>

     
        <ul className="flex flex-col items-start p-6 space-y-6">
          {navbaritems.map((navit) => (
            <li key={navit.id} className="w-full">
              <Link href={navit.href} className="flex items-center space-x-3 text-lg text-[#2f1254] hover:text-[#8334e4]" onClick={() => setIsOpen(false)}>
                <Image src={navit.src} width={30} height={30} alt={navit.alt} />
                <span>{navit.ulname}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

 
      <nav className="hidden sm:block bg-[#dfc7fd] w-full transition-transform duration-300 ease-in-out">
        <ul className="flex items-center justify-evenly">
          {navbaritems.map((navit) => (
            <li key={navit.id}>
              <Link href={navit.href} className="flex flex-col items-center">
                <Image className="img-head-nav" src={navit.src} width={40} height={35} alt="navbar-image" />
                <span className="head-spn">{navit.ulname}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
