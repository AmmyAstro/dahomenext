import Footerlinks from "@/components/Footerlinks";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Navbarmob from "@/components/Navbarmob";

export default function layout({ children }) {
  return (
    <>
      <div className="head_nav_top_all fixed top-0 left-0 z-333">
         <Header /> 
         <Navbarmob/>      </div>
  <div className="lg:pt-41 pt-12 flex justify-center"> 
  {children}
  </div>

      <Footerlinks />
    </>
  );
}
