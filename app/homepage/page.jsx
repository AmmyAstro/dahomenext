import Aboutdirect from "@/components/Aboutdirect";
import AboutUs from "@/components/AboutUs";
import Astrocard from "@/components/Astrocard";
import Astroserv from "@/components/Astroserv";
import Astrostore from "@/components/Astrostore";
import Banner from "@/components/Banner";
import Blogsection from "@/components/Blogsection";
import Chathoro from "@/components/Chathoro";
import Consulque from "@/components/Consulque";
import Credent from "@/components/Credent";
import Downapp from "@/components/Downapp";
import FAQue from "@/components/FAQue";
import Footerlinks from "@/components/Footerlinks";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Pujahome from "@/components/Pujahom";
import Pujaupcom from "@/components/Pujaupcom";
import RemeCalc from "@/components/Remecalc";
import Testimon from "@/components/Testimon";

export default function Home() {
  return (
    <div className="">
      <div className="head_nav_top_all fixed top-0 left-0 z-999">
        <Header />
        <NavBar />
      </div>
     <div className="main_body-content flex flex-col  ">
     <Banner />
     <Chathoro />
     <Astrocard/>  
     <Astroserv/>
     <RemeCalc/>
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
