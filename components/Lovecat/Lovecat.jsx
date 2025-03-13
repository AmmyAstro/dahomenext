"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Lovecat() {
  const lovearray = [
    {
      name: "Love Horoscope",
      img: "/ds-img/astrologylove.png",
      href: "/homepage/Inlovecat",
      clr: "#e9d4ff",
    },
    {
      name: "Love Calculator",
      img: "/ds-img/wedding-cost.webp",
      href: "/homepage/Inlovecat",
      clr: "#ddd6ff",
    },
    {
      name: "Love Gemstones",
      img: "/ds-img/gemstone.png",
      href: "/homepage/Inlovecat",
      clr: "#f6cfff",
    },
    {
      name: "Love Compatibility",
      img: "/ds-img/not-compatible.png",
      href: "/homepage/Inlovecat",
      clr: "#e9d4ff",
    },
    {
        name: "Love Bracelets",
        img: "/ds-img/braceletlov.png",
        href: "/homepage/Inlovecat",
        clr: "#e9d4ff",
      },
    {
      name: "Love Ask 1 Question",
      img: "/ds-img/love-letter.png",
      href: "/homepage/Inlovecat",
      clr: "#ddd6ff",
    },
    {
      name: "Love Ask 3 Question",
      img: "/ds-img/love-letter.png",
      href: "/homepage/Inlovecat",
      clr: "#f6cfff",
    },
    {
      name: "Love Spell Casting",
      img: "/ds-img/love-and-romance.png",
      href: "/homepage/Inlovecat",
      clr: "#ddd6ff",
    },
    {
      name: "Love Psyhic Reading",
      img: "/ds-img/love.png",
      href: "/homepage/Inlovecat",
      clr: "#ddd6ff",
    },
    {
      name: "Intercaste Love Marriage ",
      img: "/ds-img/wedding-rings.png",
      href: "/homepage/Inlovecat",
      clr: "#ddd6ff",
    },
    {
      name: "Puja & Havan for Love ",
      img: "/ds-img/puja.png",
      href: "/homepage/Inlovecat",
      clr: "#e9d4ff",
    },
    {
      name: "Mantras & Yantras for Love ",
      img: "/ds-img/bead.png",
      href: "/homepage/Inlovecat",
      clr: "#e9d4ff",
    },
  ];
  return (
    <section className="healing_service_new mt-2 justify-self-center sm:max-w-7xl w-full  p-4 ">
      <div className="container">
        <h1 className="relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-5 text-center font-semibold">
          • Dhwani Astro <strong>Love Guidance / Solutions</strong> •
        </h1>

        <div className="love-product-new flex flex-wrap gap-4">
          {lovearray.map((lovearr, index) => (
            <Link
              href={lovearr.href}
              key={index}
              style={{ backgroundColor: lovearr.clr }}
              className={`service-card-top w-18 sm:w-32 xl:w-40  rounded-xl shadow-lg p-3 py-3 sm:py-5 text-center flex flex-col items-center justify-center`}
            >
              <Image
                src={lovearr.img}
                className="w-7 h-7  sm:w-14 sm:h-14 mb-2"
                width={35}
                height={35}
                alt="Image 1"
                loading="lazy"
              />
              <h3 className="sm:text-xs xl:text-sm text-[13px] text-[#000] ">
                {lovearr.name}
              </h3>
            </Link>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}
