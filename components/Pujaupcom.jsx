"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Pujaupcom() {
  const pujaup = [
    {
      ptnm: "MAHAKUMBH SPECIAL",
      img: "/ds-img/puja3.webp",
      src: "/ds-img/temple.webp",
      calim: "/ds-img/cald.webp",
      pujaname: "Shiv Rudrabhishek and Rudra Homam",
      pujadesc: "For Financial Prosperity and Good Health",
      pujaadd: "Triveni Sangam, Prayagraj, Uttar Pradesh",
      pujaocc:
        "अमृत - सर्वोत्तम चौघड़िया (11:13 AM to 12:35) PM Tuesday 11 Feb 2025",
    },
    {
      ptnm: "MAHASHIVRATRI SPECIAL",
      img: "/ds-img/puja1.webp",
      src: "/ds-img/temple.webp",
      calim: "/ds-img/cald.webp",
      pujaname: "Shiv Rudrabhishek and Rudra Homam",
      pujadesc: "For Financial Prosperity and Good Health",
      pujaadd: "Triveni Sangam, Prayagraj, Uttar Pradesh",
      pujaocc:
        "अमृत - सर्वोत्तम चौघड़िया (11:13 AM to 12:35) PM Tuesday 11 Feb 2025",
    },
    {
      ptnm: "HOLI SPECIAL",
      img: "/ds-img/puja2.webp",
      src: "/ds-img/temple.webp",
      calim: "/ds-img/cald.webp",
      pujaname: "Shiv Rudrabhishek and Rudra Homam",
      pujadesc: "For Financial Prosperity and Good Health",
      pujaadd: "Triveni Sangam, Prayagraj, Uttar Pradesh",
      pujaocc:
        "अमृत - सर्वोत्तम चौघड़िया (11:13 AM to 12:35) PM Tuesday 11 Feb 2025",
    },
    {
      ptnm: "TEEJ SPECIAL",
      img: "/ds-img/puja4.webp",
      src: "/ds-img/temple.webp",
      calim: "/ds-img/cald.webp",
      pujaname: "Shiv Rudrabhishek and Rudra Homam",
      pujadesc: "For Financial Prosperity and Good Health",
      pujaadd: "Triveni Sangam, Prayagraj, Uttar Pradesh",
      pujaocc:
        "अमृत - सर्वोत्तम चौघड़िया (11:13 AM to 12:35) PM Tuesday 11 Feb 2025",
    },
    {
      ptnm: "LOVE SPECIAL",
      img: "/ds-img/puja6.webp",
      src: "/ds-img/temple.webp",
      calim: "/ds-img/cald.webp",
      pujaname: "Shiv Rudrabhishek and Rudra Homam",
      pujadesc: "For Financial Prosperity and Good Health",
      pujaadd: "Triveni Sangam, Prayagraj, Uttar Pradesh",
      pujaocc:
        "अमृत - सर्वोत्तम चौघड़िया (11:13 AM to 12:35) PM Tuesday 11 Feb 2025",
    },
  ];
  return (
    <div className="puja-book-section-home container py-3 px-1 md:px-3">
      <h1 className="text-[#2f1254] text-md md:text-2xl py-1 md:py-5 text-center font-semibold">
        • Get Blessings from
        <strong> Upcoming Special Pujas with Dhwani Astro</strong>•
      </h1>
      <div className="puja-sec-main flex px-10 py-3 ">
        {pujaup.map((pujup, index) => (
          <div key={index} className="puja-on-card-hom w-50 min-w-48 md:min-w-92">
            <div className="puja-sec-left d-flex align-items-start flex-column">
              <div className="puja-sec-img">
                <Image
                  className="puja-on-image h-25 md:h-50"
                  src={pujup.img}
                  alt="Puja Image"
                  height={35}
                  width={35}
                  loading="lazy" unoptimized
                />
                <div className="puja-date"></div>
                <div className="puj-line">
                  <h6 className="text-[10px] md:text-xs">{pujup.ptnm}</h6>
                </div>
              </div>

              <div className="puja-sec-detail d-flex flex-column py-2">
                <h1 className="puja-card-h mb-0 text-[#000] text-xs md:text-md">
                  {pujup.pujaname}
                </h1>
                <span className="puja-des-home text-xs md:text-md">
                  {pujup.pujadesc}
                </span>
                <div className="venue-book d-flex justify-content-around">
                  <div className="venue-det d-flex flex-column justify-content-between">
                    <div className="puja-sec-add flex items-center justify-content-">
                      <Image
                        src={pujup.src}
                        alt="temple-image"
                        className="temp-image w-4 h-4 md:w-6 md:h-6"
                        height={6}
                        width={6} unoptimized
                      />
                      <h6 className="pu-add-h text-[10px] text-[#000] md:text-md">
                        {pujup.pujaadd}
                      </h6>
                    </div>
                    <div className="gap-2 flex flex-col md:flex-row items-center justify-between">
                      <div className="puja-sec-add gap-1 flex items-center">
                        <Image
                          src={pujup.calim}
                          alt="temple-image"
                          className="temp-image w-4 h-4 md:w-6 md:h-6"
                          height={6}
                          width={6} unoptimized
                        />
                        <h6 className="pu-add-tm text-[10px] md:text-md">
                          {pujup.pujaocc}
                        </h6>
                      </div>
                      <div className="book-btn flex items-center justifycenter">
                        <Link href="#">
                          <button className="book-puja-hm text-white bg-[#e62375]">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
