"use client"; // Required for interactive UI in Next.js 13+

import Image from "next/image";
import Link from "next/link";

export default function Downapp() { 
  return (
  <section className=" m-2  rounded-2xl relative">
      <div className="absolute inset-0 shadow-lg flex items-center justify-center">
    <div className="w-full h-full bg-cover bg-center opacity-80"     style={{ backgroundImage: "url('/ds-img/bg-dsw.webp')"}}>
    </div>
  </div>
  <div className="mobile-app">
    <h1 className="text-[#2f1254] text-md md:text-2xl text-center font-semibold"> • Download our mobile app to access
      exclusive features anytime, anywhere •</h1>
  </div>

  <div className="app-img-content  flex  md:flex-row items-center  justify-around ">
    <div className="content-wrapper-spin-im">
      <div className="spinn-app-img overflow-hidden">
        <Image className="spin-image-back w-full  " src="/ds-img/image.png" alt="spin chakra image" unoptimized loading="lazy" width={50} height={50}/>
        <Image className="mob-app-image w-65" src="/ds-img/bckmob.webp" alt="app image" loading="lazy" unoptimized width={50} height={50}/>
      </div>

    </div>

    <div className="down-app-scan   rounded-lg p-1 md:p-5  flex flex-col items-center justify-between">
      <h1 className="text-[#000] text-[20px] align-center"> <span className="text-xl md:text-3xl font-bold">Scan</span><span
          className="text-[#2f1254] text-2xl md:text-4xl  font-bold"> QR</span> <br /> To Get the App</h1>

      <div className="scan-image">
        <Image className="w-35 h-35 md:w-50 md:h-50 rounded-lg" src="/ds-img/scanner-app.webp" alt="scanner image" unoptimized
          loading="lazy" width={50} height={50}/>
      </div>
      <div className="download-ios-ps">
        <Image className="w-35 h-12 md:w-40 md:h-14" src="/ds-img/and-n.png"  unoptimized alt="playstore image" loading="lazy"
          width={50} height={50}/>
      </div>
    </div>
  </div>

  </section>
    

  )
}; 
