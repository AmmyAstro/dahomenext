"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="head-top p-1 flex bg-[#2f1254] justify-between items-center w-full  z-50 shadow-lg">
      <div className="w-1/3">
        <Link href="/">
          <Image
            src="/ds-img/logo.webp"
            width={160}
            height={40}
            alt="Logo image"
            className="w-28 md:w-40"
            priority
          />
        </Link>
      </div>

      <div className="w-1/3 justify-center sm:flex hidden">
        <Image
          src="/ds-img/ganeshji.webp"
          width={50}
          height={50}
          alt="Ganesh Ji Image"
          className="w-13"
          loading="lazy"
        />
      </div>

      <div className="sm:flex justify-end gap-4 hidden items-center w-1/3 pr-5">
        <Link
          href="#"
          className="p-1.5 text-[13.5px] font-medium text-[#000] rounded-md bg-[#ffd70a]"
        >
          Live Session
        </Link>
        <Link
          href="#"
          className="p-1.5 text-[13.5px] font-medium text-[#000] rounded-md bg-[#ffd70a]"
        >
          Blogs
        </Link>

        <select
          aria-label="language"
          name="lang"
          id="lang"
          className="p-1.5 text-[13.5px] font-medium text-[#000] rounded-md bg-[#ffd70a]"
          defaultValue="English (EN)"
        >
          <option value="English (EN)" className="text-[#000]">English (EN)</option>
          <option value="Hindi (HI)" className="text-[#000]">Hindi (HI)</option>
        </select>
        <Link
          href="#"
          className="p-1.5 text-[13.5px] font-medium rounded-md bg-[#dc3545] text-[#ffd70a]"
        >
          Sign In
        </Link>
        <Link href="#">
          <i className="fa-solid fa-cart-shopping text-[#ffd70a] text-[25px]"></i>
        </Link>
        <div className="user-container relative inline-block">
          <Link href="#">
            <Image
              src="/ds-img/user2.webp"
              width={35}
              height={35}
              alt="User Image"
              className="user-image"
              loading="lazy"
            />
          </Link>
        </div>
      </div>

      <div className="sm:hidden flex justify-end gap-2 items-center w-2/3 md:w-1/3 pr-2 md:pr-5">
        <Link href="#" className="p-1 text-[10px] rounded-sm bg-[#ffd70a]">
          Blogs
        </Link>
        <Link
          href="#"
          className="p-1 text-[10px] font-medium rounded-sm bg-[#dc3545] text-[#ffd70a]"
        >
          Sign In
        </Link>
        <Link href="#">
          <i className="fa-solid fa-cart-shopping text-[#ffd70a] text-[20px]"></i>
        </Link>
        <div className="user-container relative inline-block">
          <Link href="#">
            <Image
              src="/ds-img/user2.webp"
              width={35}
              height={35}
              alt="User Image"
              className="user-image w-6 h-6"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
