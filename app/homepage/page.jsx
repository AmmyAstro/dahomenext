import Astrocard from "@/components/Astrocard";
import Astroserv from "@/components/Astroserv";
import Banner from "@/components/Banner";
import Chathoro from "@/components/Chathoro";
import Downapp from "@/components/Downapp";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Pujahome from "@/components/Pujahom";
import Pujaupcom from "@/components/Pujaupcom";
import RemeCalc from "@/components/Remecalc";

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
     </div>
    </div>
  );
}
