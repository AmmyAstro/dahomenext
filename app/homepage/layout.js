import Footerlinks from "@/components/Footerlinks";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function layout({ children }) {
  return (
    <>
      <div className="head_nav_top_all fixed top-0 left-0 z-333">
         <Header />
         <NavBar />
       </div>
  <div className="pt-40"> 
  {children}
  </div>

      <Footerlinks />
    </>
  );
}
