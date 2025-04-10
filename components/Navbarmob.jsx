"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; 

export default function Navbarmob() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDhwaniOpen, setIsDhwaniOpen] = useState(false);
  const [isFreeOpen, setIsFreeOpen] = useState(false);

  const navbaritems = [
    { id: 1, src: "/ds-img/menu-chat-icon.webp", alt: "Chat", ulname: "Chat With Astrologer", href: "/homepage/chatAstro" },
    { id: 2, src: "/ds-img/phone.webp", alt: "Talk", ulname: "Talk To Astrologer", href: "/homepage/callAstro" },
    { id: 3, src: "/ds-img/tarot-card.png", alt: "Tarot", ulname: "Tarot Reading", href: "/homepage/" },
    { id: 4, src: "/ds-img/om.webp", alt: "Protect", ulname: "Protective Kavach", href: "/protective-kavach" },
    { id: 5, src: "/ds-img/heal2.webp", alt: "Heal", ulname: "Healing", href: "/homepage/inHealing" },
    { id: 6, src: "/ds-img/onpooja.webp", alt: "Puja", ulname: "Online Puja", href: "/online-puja" },
    { id: 7, src: "/ds-img/dhwani.webp", alt: "Dhwani", ulname: "Dhwani Services", href: "/homepage/dhServices" },
  ];

  const dhwaniStoreItems = [
    { id: 1, name: "Bracelets", src: "/ds-img/bracelet.png", href: "#" },
    { id: 2, name: "Pendants", src: "/ds-img/pendant.png", href: "#" },
    { id: 3, name: "Rings", src: "/ds-img/marriage.png", href: "#" },
    { id: 4, name: "Vastu Products", src: "/ds-img/compass.png", href: "#" },
    { id: 5, name: "Divine Malas", src: "/ds-img/mala.png", href: "#" },

  ];

  const freeServicesItems = [
    { id: 1, name: "Horoscope", src: "/ds-img/horoscope.webp", href: "/homepage/inHoroscope" },
    { id: 2, name: "Numerology", src: "/ds-img/numerology.webp", href: "#" },
    { id: 3, name: "Kundli", src: "/ds-img/kundli.webp", href: "/homepage/inKundli" },
    { id: 4, name: "Match Making", src: "/ds-img/menu-match.webp", href: "#" },
    { id: 5, name: "Panchang", src: "/ds-img/panchang.webp", href: "#" },

  ];

  return (
    <>
      <button className="sm:hidden fixed top-3 left-4 z-50 text-[#fff]" onClick={() => setIsOpen(true)}>
        <FaBars size={25} />
      </button>

      {/* Mobile Menu */}
      <div className={`sm:hidden fixed inset-0 z-51 bg-[#00000076] bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`fixed top-0 left-0 h-full w-[65%] sm:w-[50%] md:w-[40%] bg-[#dfc7fd] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>
          
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-[#8334e4]" onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>

          {/* Navigation List */}
          <ul className="flex flex-col items-start p-6 space-y-5">
            {navbaritems.map((navit) => (
              <li key={navit.id} className="w-full">
                <Link href={navit.href} className="flex items-center space-x-3 text-lg text-[#2f1254] hover:text-[#8334e4]" onClick={() => setIsOpen(false)}>
                  <Image src={navit.src} width={20} height={20} alt={navit.alt} />
                  <span className="text-sm">{navit.ulname}</span>
                </Link>
              </li>
            ))}

            {/* Dhwani Store Dropdown */}
            <li className="w-full">
              <button 
                className="flex items-center justify-between w-full text-sm text-[#2f1254] hover:text-[#8334e4]"
                onClick={() => setIsDhwaniOpen(!isDhwaniOpen)}
              >
                <span className="flex items-center space-x-3">
                  <Image src="/ds-img/menu-online.webp" width={20} height={20} alt="Dhwani Store" />
                  <span className="text-sm">Dhwani Store</span>
                </span>
                <FaChevronDown className={`transition-transform ${isDhwaniOpen ? "rotate-180" : ""}`} />
              </button>
              {isDhwaniOpen && (
                <ul className="pl-8 mt-2 space-y-2">
                  {dhwaniStoreItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href} className="flex items-center space-x-3 text-[#2f1254] hover:text-[#8334e4]">
                        <Image src={item.src} width={20} height={20} alt={item.name} />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Free Services Dropdown */}
            <li className="w-full">
              <button 
                className="flex items-center justify-between w-full text-sm text-[#2f1254] hover:text-[#8334e4]"
                onClick={() => setIsFreeOpen(!isFreeOpen)}
              >
                <span className="flex items-center space-x-3">
                  <Image src="/ds-img/dhwani.webp" width={20} height={20} alt="Free Services" />
                  <span className="text-sm">Free Services</span>
                </span>
                <FaChevronDown className={`transition-transform ${isFreeOpen ? "rotate-180" : ""}`} />
              </button>
              {isFreeOpen && (
                <ul className="pl-8 mt-2 space-y-2">
                  {freeServicesItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href} className="flex items-center space-x-3 text-[#2f1254] hover:text-[#8334e4]">
                        <Image src={item.src} width={20} height={20} alt={item.name} />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar (Unchanged) */}
      <nav className="hidden sm:block bg-[#dfc7fd] w-full transition-transform duration-300 ease-in-out">
        <ul className="flex items-center justify-evenly">
          {navbaritems.map((navit) => (
            <li key={navit.id} className="desk-nav-li">
              <Link href={navit.href} className="flex flex-col items-center gap-1">
                <Image className="img-head-nav" src={navit.src} width={35} height={35} alt={navit.alt} />
                <span className="head-spn text-[#000] text-xs">{navit.ulname}</span>
              </Link>
            </li>
          ))}
           <li className="drop-free-new">
          <Link href="#" className="flex flex-col items-center gap-1 ">
            <Image
              className="img-head-nav"
              src="/ds-img/menu-online.webp"
              width={35}
              height={35}
              loading="lazy"
              alt="navbar-image"
            />
            <span className="head-spn text-[#000] text-xs">Dhwani Store</span>
          </Link>
          <ul className="free-service-drop-n">
            <li>
              <Link href="#" className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/bracelet.png"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs"> Bracelets</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/pendant.png"
                  width={35}
                  height="35"
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs"> Pendants</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/marriage.png"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Rings</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center">
                <Image
                  className="free-drp-img"
                  src="/ds-img/compass.png"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Vastu Products</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center">
                <Image
                  className="free-drp-img"
                  src="/ds-img/mala.png"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Divine Malas</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="free-drp-a a-wh flex items-center px-4 text-[#000] text-[14px] justify-center"
              >
         
         <FaArrowRightLong />

         <span className="text-[#000] text-xs">Visit Store</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="drop-free-new">
          <Link href="#" className="flex flex-col items-center gap-1 ">
            <Image
              className="img-head-nav"
              src="/ds-img/dhwani.webp"
              width={35}
              height={35}
              loading="lazy"
              alt="navbar-image"
            />
            <span className="head-spn text-[#000] text-xs ">Free Services</span>
          </Link>
          <ul className="free-service-drop-n">
            <li>
              <Link href={"/homepage/inHoroscope"} className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/horoscope.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Horoscope</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/numerology.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Numerology</p>
              </Link>
            </li>
            <li>
              <Link href={"/homepage/inKundli"} className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/kundli.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Kundli</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center">
                <Image
                  className="free-drp-img"
                  src="/ds-img/menu-match.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Match Making</p>
              </Link>
            </li>
            <li>
              <Link href={"/homepage/panchangmain"} className="free-drp-a flex items-center">
                <Image
                  className="free-drp-img"
                  src="/ds-img/panchang.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn text-[#000] text-xs">Panchang</p>
              </Link>
            </li>
          </ul>
        </li>
        </ul>
      </nav>
    </>
  );
}
