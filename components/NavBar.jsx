"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"



export default function NavBar() {
  const navbaritems = [
    { id: 1, src: "/ds-img/menu-chat-icon.webp", alt: "Chat", ulname: "Chat With Astrologer", href: "/homepage/navbarcomp"  },
    { id: 2, src: "/ds-img/phone.webp", alt: "Talk", ulname: "Talk To Astrologer", href: "/homepage/talkto"},
    { id: 3, src: "/ds-img/tarot-card.png", alt: "Tarot", ulname: "Tarot Reading", href: "/homepage/"},
    { id: 4, src: "/ds-img/om.webp", alt: "Protect", ulname: "Protective Kavach", href: "/protective-kavach" },
    { id: 5, src: "/ds-img/heal2.webp", alt: "Heal", ulname: "Healing", href: "/homepage/Inhealing" },
    { id: 6, src: "/ds-img/onpooja.webp", alt: "Puja", ulname: "Online Puja", href: "/online-puja" },
    { id: 7, src: "/ds-img/dhwani.webp", alt: "Dhwani", ulname: "Dhwani Services", href: "/homepage/Dhservice" },
  ];
  return (
    <nav
      id="navbar"
      className="bg-[#dfc7fd] hidden sm:block w-full transition-transform duration-300 ease-in-out ">
      <ul className="flex items-center justify-evenly navbar-ul-head">
      {navbaritems.map((navit) => (
        <li key={navit.id}>
        <Link href={navit.href} className="flex flex-col items-center">
          <Image
            className="img-head-nav"
            src={navit.src}
            width={40}
            height={35}
            loading="lazy"
            alt="navbar-image"
          />
          <span className="head-spn">{navit.ulname}</span>
        </Link>
      </li>
      ))}
                   
      
        <li className="drop-free-new">
          <Link href="#" className="flex flex-col items-center">
            <Image
              className="img-head-nav"
              src="/ds-img/menu-online.webp"
              width={35}
              height={35}
              loading="lazy"
              alt="navbar-image"
            />
            <span className="head-spn">Dhwani Store</span>
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
                <p className="free-ser-spn "> Bracelets</p>
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
                <p className="free-ser-spn"> Pendants</p>
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
                <p className="free-ser-spn">Rings</p>
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
                <p className="free-ser-spn">Vastu Products</p>
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
                <p className="free-ser-spn">Divine Malas</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="free-drp-a a-wh flex items-center text-[#000] text-[14px] justify-center"
              >
                &nbsp;{" "}
                <i className="fa-solid fa-arrow-right text-[#8334e4]"></i>
                &nbsp; Visit Store
              </Link>
            </li>
          </ul>
        </li>
        <li className="drop-free-new">
          <Link href="#" className="flex flex-col items-center">
            <Image
              className="img-head-nav"
              src="/ds-img/dhwani.webp"
              width={35}
              height={35}
              loading="lazy"
              alt="navbar-image"
            />
            <span className="head-spn">Free Services</span>
          </Link>
          <ul className="free-service-drop-n">
            <li>
              <Link href={"/homepage/Inhoro"} className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/horoscope.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn">Horoscope</p>
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
                <p className="free-ser-spn">Numerology</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center ">
                <Image
                  className="free-drp-img"
                  src="/ds-img/kundli.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn">Kundli</p>
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
                <p className="free-ser-spn">Match Making</p>
              </Link>
            </li>
            <li>
              <Link href="#" className="free-drp-a flex items-center">
                <Image
                  className="free-drp-img"
                  src="/ds-img/panchang.webp"
                  width={35}
                  height={35}
                  alt="free image"
                />
                <p className="free-ser-spn">Panchang</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
