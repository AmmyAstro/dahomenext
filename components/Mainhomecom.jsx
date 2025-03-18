"use client";
import Header from "./Header";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Chathoro from "./Chathoro";
import Astroserv from "./Astroserv";
import Remecalc from "./Remecalc";
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
import Astrocard from "./Astrocard";
import Lovecalc from "./incomp/Lovecalc";
import Navbarmob from "./Navbarmob";

export default function Mainhomecom() {
  return (
    <div className="dawebnew w-full">
      <div className="head_nav_top_all fixed top-0 left-0 z-333">
        <Header />
    <Navbarmob/>
</div>
      <div className="main_body-content flex flex-col  pt-0">
        {/* <Banner /> */}
        <Astrocard />
        <Chathoro />
        <Astroserv />
        <Remecalc />
        {/* <Pujahome/> */}
        {/* <Pujaupcom/> */}
        <Downapp />
        <Astrostore />
        <Consulque />
        <Aboutdirect />
        <Credent />
        <Blogsection />
        <FAQue />
        <Testimon />
        <AboutUs />
      </div>
    </div>
  );
}
