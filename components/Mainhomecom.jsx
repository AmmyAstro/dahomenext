"use client";
import Header from "./Header";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Chathoro from "./Chathoro";
import Astrocard from "./Astrocard";
import Astroserv from "./Astroserv";
// import RemeCalc from "./RemeCalc";
import Pujahome from "./Pujahome";
import Pujaupcom from "./Pujaupcom";
import Downapp from "./Downapp";
import Astrostore from "./Astrostore";
import Consulque from "./Consulque";
import Aboutdirect from "./Aboutdirect";
import Credent from "./Credent";
import Blogsection from "./Blogsection";
import FAQue from "./FAQue";
import Testimon from "./Testimon";
import AboutUs from "./AboutUs";
import Footerlinks from "./Footerlinks";




export default function Mainhomecom() {
   

  return (
    <div className="dawebnew">
    <div className="head_nav_top_all fixed top-0 left-0 z-999">
      <Header />
      <NavBar />
    </div>
   <div className="main_body-content flex flex-col  ">
   <Banner />
   <Chathoro />
   <Astrocard/>  
   <Astroserv/>
   {/* <RemeCalc/> */}
   {/* <RemeCalc/> */}
   <Pujahome/>
   <Pujaupcom/>
   <Downapp/>
   <Astrostore/>
   <Consulque/>  
   <Aboutdirect/>
   <Credent />
   <Blogsection/>
   <FAQue/>
   <Testimon/>
   <AboutUs />
   <Footerlinks/>
   </div>
  </div>
     
      );
    }