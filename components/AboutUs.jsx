"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {

  return (

    <section className="bg-[#2f1254] p-5 mb-1">
    <div
      className="about-us-da max-w-6xl gap-3 sm:gap-10 flex flex-col sm:flex-row items-center justify-between justify-self-center ">
      <div className="image-da  justify-self-center">
        <Image src="/ds-img/logo.webp" alt="about us image" className="w-43 h-15 sm:w-85 sm:h-22 justify-self-center" unoptimized
          width={200} height={200} />
      </div>
      <div className="about-con flex flex-col w-full ">
        <h5 className="text-[#ffd70a] text-xl font-semibold">About Us</h5>
        <p className="text-[#fff] text-xs sm:text-base">Dhwani Astro is India's most renowned astrology consultancy
          company. We're an online
          marketplace for
          astrology and related counseling services. Promoted by Mrs. Dhwani Jain with blessing and mentorship of
          Pandit Gajanand Jee. We have expanded our focus on young people who need help with their mental health
          issues. In the meantime, our teams are working on different modalities in Reiki Healing, Vedic Practices,
          Meditation.</p>
      </div>

      <div className="subsc-mail flex flex-col   gap-1 sm:gap-5 ">
        <h5 className="text-[#fff] text-sm sm:text-xl">SUBSCRIBE TO OUR NEWSLETTER</h5>
        <p className="text-[#fff] text-sm sm:text-xl">Get Astrology Updates delivered to your doorstep.</p>
        <div className="input-search flex items-center w-full">
          <input className="input-email bg-[#fff] py-2 px-5 w-2/3" type="mail" placeholder="Enter E-mail ID" /> <button
            className="submit-email bg-[#ffd70a] text-[#000] py-2 px-5 w-1/3" type="submit">SUBMIT</button>
        </div>
      </div>
    </div>
  </section>
      );
    }