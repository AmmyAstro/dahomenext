"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"

export default function Footerlinks() {
  const footlink = [
    { id: 1, ulname: "Horoscope 2024" },
    { id: 2, ulname: "Today's Horoscope" },
    { id: 3, ulname: "Today's Love Horoscope" },
    { id: 4, ulname: "Yesterday's Horoscope" },
    { id: 5, ulname: "Tomorrow's Horoscope" },
    { id: 6, ulname: "Weekly Horoscope" },
    { id: 7, ulname: "Monthly Horoscope" },
    { id: 8, ulname: "Yearly Horoscope" },
  ];
  const implink = [
    { id: 1, ulname: "Chat with Astrologer" },
    { id: 2, ulname: "Talk To Astrologer" },
    { id: 3, ulname: "Dhwani Store" },
    { id: 4, ulname: "Kundali" },
    { id: 5, ulname: "Numerology" },
    { id: 6, ulname: "Match Making" },
    { id: 7, ulname: "Blogs" },
    { id: 8, ulname: "Live Session" },
    { id: 10, ulname: "Panchang" },
  ];
  const othrlinks = [
    { id: 1, ulname: "Love Calculator" },
    { id: 2, ulname: "Solar Eclipse 2024" },
    { id: 3, ulname: "Lunar Eclipse 2024" },
    { id: 4, ulname: "Festival Calendar 2024" },
    { id: 5, ulname: "Vrat Calendar 2024" },
    { id: 6, ulname: "Zodiac Signs" },
    { id: 7, ulname: "Planetary Transit 2024" },
    { id: 8, ulname: "Tarot" },
  ];
  return (
    <footer>
      <section className="footer-new  footer-mb">
        <div className="container footer-cont">
          <div className="ds-imp-links flex items-start justify-around">
              <div
               
                className="horo-links flex flex-col w-1/2 md:w-1/4 items-center"
              >
                <h5 className="ab-po-h underline underline-offset-4">
                  Horoscope Links
                </h5>


                <ul  className="foot-horo-link">
                {footlink.map((flink) => (
                  <li key={flink.id} >
                    <i className="fa fa-solid fa-chevron-right"></i>
                    <a href="{{ url('horoscope/aries') }}">{flink.ulname}</a>
                  </li>
                  ))}
                </ul>
                            

              </div>
            
              <div
               
                className="imp-links w-1/2 md:w-1/4 flex flex-col items-center"
              >
                <h5 className="ab-po-h underline underline-offset-4">
                  Important Links
                </h5>
      

                <ul  className="footer_head">
                {implink.map((impli) => (
                  <li key={impli.id} >
                    <i className="fa fa-solid fa-chevron-right"></i>
                    <a href="{{ route('chat.astro') }}">{impli.ulname}</a>
                  </li>
                            ))}
                </ul>
                  

              </div>
            
              <div
            
                className="imp-links w-1/2 md:w-1/4 flex flex-col items-center"
              >
                <h5 className="ab-po-h underline underline-offset-4">
                  Other Links
                </h5>
               

                <ul       className="footer_head">
                {othrlinks.map((otlin) => (
                  <li key={otlin.id}>
                    <i className="fa fa-solid fa-chevron-right"></i>
                    <a href="{{ route('chat.astro') }}">{otlin.ulname}</a>
                  </li>
                       ))}
                </ul>
              
              </div>
         
            
            <div className="imp-links w-1/2 md:w-1/4 flex flex-col items-center">
              <h5 className="ab-po-h underline underline-offset-4">
                Dhwani Astro Links
              </h5>
              <ul className="footer_head">
                <li className="ft_a">
                  <a href="#" >
                    <b>Astrologer</b>
                  </a>
                </li>
                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a href="{{ route('signin') }}"> Astrologer Login</a>
                </li>
                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a
                    href="https://docs.google.com/forms/d/1VDdBy2ZPtnXu0ok9V4o0m9M78bk0jdtZ9L5qFmRVY_w/edit#responses"
                    target="_blank"
                  >
                    Astrologers Registration
                  </a>
                </li>

                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a href="{{url('page/disclaimer')}}" target="_blank">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-con-trst flex content-around ">
            <div className="contact_list w-1/2 md:w-1/4 items-center flex flex-col">
              <h5 className="ab-po-h underline underline-offset-4">Contact Us</h5>
              <ul className="footer_head">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <a href="#" >
                    908, 9th Floor, Mercantile
                    <br />
                    House, KG Marg, New Delhi
                  </a>
                </li>
                <li>
                  <i className="fa fa fa-regular fa-envelope"></i>
                  <a href="mailto:support@dhwaniastro.com">
                    support@dhwaniastro.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-solid fa-phone"></i>
                  <a href="tel:916366526901">+91 6366526901</a>
                </li>
              </ul>
            </div>

            <div className="ab-pr-po w-1/2 md:w-1/4 flex  content-start flex-col items-center  text-end">
              <h5 className="ab-po-h underline underline-offset-4">
                Business Information
              </h5>

              <ul className="footer_head flex items-start flex-col">
                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a href="{{ url('about-us') }}">About Us </a>
                </li>
                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a href="{{ url('privacy-policy') }}">Privacy Policy </a>
                </li>
                <li>
                  <i className="fa fa-solid fa-chevron-right"></i>
                  <a href="{{ url('refund-policy') }}">Refund Policy </a>
                </li>
              </ul>
            </div>

            <div className="footer-trust w-1/2 md:w-1/4 flex items-center flex-col">
              <h5 className="ab-po-h underline underline-offset-4">
                Why We’re Trusted
              </h5>

              <ul className="fot_link flex  flex-col">
                <li className="foot-li">
                  <a
                    href="#"
               
                    
                    className="flex items-center"
                  >
                    <img
                      src="/ds-img/Privacy.webp"
                      alt="logo image"
                      loading="lazy"
                    />
                    <span className="foot-trst-spn flex  items-center">
                      <h5 className="foot-h-sp">Private &</h5>
                      <span className="ft-span">Confidential</span>
                    </span>
                  </a>
                </li>

                <li className="foot-li">
                  <a
                    href="#"
                  
                    
                    className="flex items-center"
                  >
                    <img
                      src="/ds-img/verifide-icon.webp"
                      alt="logo image"
                      loading="lazy"
                    />
                    <span className="foot-trst-spn flex  items-center">
                      <h5 className="foot-h-sp">Verified Expert</h5>
                      <span className="ft-span">Astrologer</span>
                    </span>
                  </a>
                </li>

                <li className="foot-li">
                  <a
                    href="#"
      
                    
                    className="flex items-center"
                  >
                    <img
                      src="/ds-img/foot-sure-img.webp"
                      alt="logo image"
                      loading="lazy"
                    />
                    <span className="foot-trst-spn flex  items-center">
                      <h5 className="foot-h-sp">100% Secure</h5>
                      <span className="ft-span">Payments</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="app-down w-1/2 md:w-1/4 flex items-center justify-center flex-col  gap-2">
              <h5 className="ab-po-h underline underline-offset-4">
                Get It On Your Device{" "}
              </h5>

              <a
                href="https://play.google.com/store/apps/we?id=com.DhwaniAstro.app"
                target="_blank"
              >
                <Image
                  className="dwonload-img"
                  src="/ds-img/googlelabel.png"
                  alt="Play store"
                  loading="lazy"
                  height={120}
                  width={120}
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.DhwaniAstro.app"
                target="_blank"
              >
                <Image
                  className="dwonload-img"
                  src="/ds-img/apd.webp"
                  alt="Play store"
                  loading="lazy"
                  height={120}
                  width={120}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="foot-down-app" id="foot-down-app">
        <div className="download-app">
          <div className="dwn-app-img flex items-center justify-between">
            <Image
              className="dwn-app-image"
              src="/ds-img/logo.webp"
              loading="lazy"
              height={120}
              width={120}
              alt="logo-2 image"
            />
            <span className="dwn-span">
              Unlock more features by downloading the Dhwani Astro app today!
            </span>
            <div className="dwn-btn-open">
              <button className="open-btn">App</button>
            </div>
            <span className="dwn-icon" 
            >
              <i className="fa-regular fa-circle-xmark text-white"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
