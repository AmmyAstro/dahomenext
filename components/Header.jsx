"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="head-top p-1 flex bg-[#2f1254] justify-between items-center w-full  z-50 shadow-lg md:px-5 px-2">
      <div className="dslogo w-1/3 ml-10 sm:ml-0">
        <Link href="/homepage">
          <Image
            src="/ds-img/logo.webp"
            width={160}
            height={40}
            alt="Logo image"
            className="w-28 sm:w-40"
            priority
          />
        </Link>
      </div>

      <div className="justify-center items-center sm:flex hidden w-1/3">
        <Image
          src="/ds-img/ganeshji.webp"
          width={50}
          height={50}
          alt="Ganesh Ji Image"
          className="w-13"
          loading="lazy"
        />
      </div>

      <div className="sm:flex justify-end gap-4 hidden items-center w-1/3">
        <Link
          href="#"
          className="max-md:hidden p-1.5 text-[13.5px] sm:w-24 font-medium text-[#000] rounded-md bg-[#ffd70a]"
        >
          Live Session
        </Link>
        <Link
          href={"/homepage/blogComp"}
          className="max-md:hidden p-1.5 text-[13.5px] sm:w-15 font-medium text-[#000] rounded-md bg-[#ffd70a]"
        >
          Blogs
        </Link>

        <select
          aria-label="language"
          name="lang"
          id="lang"
          className="p-1.5 text-[13.5px] font-medium text-[#000] rounded-md bg-[#ffd70a]"
          defaultValue="Eng (EN)"
        >
          <option value="Eng (EN)" className="text-[#000]">Eng (EN)</option>
          <option value="Hin (HI)" className="text-[#000]">Hin (HI)</option>
        </select>
        <Link
          href="#"
          className="p-1.5 text-[13.5px] sm:w-15 font-medium rounded-md bg-[#dc3545] text-[#ffd70a]"
        >
          Sign In
        </Link>
        <Link href="#">
        <FaShoppingCart  className="text-[#ffd70a] text-[25px]"/>
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

      <div className="sm:hidden flex justify-end gap-2 items-center   sm:pr-5 ">
        <Link href={"/homepage/blogComp"} className="p-1 text-[10px] rounded-sm text-[#000] bg-[#ffd70a]">
          Blogs
        </Link>
        <Link
          href="#"
          className="p-1 text-[10px] w-13 font-medium rounded-sm bg-[#dc3545] text-[#ffd70a]"
        >
          Sign In
        </Link>
        <Link href="#">
        <FaShoppingCart  className="text-[#ffd70a] text-[25px]"/>
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
