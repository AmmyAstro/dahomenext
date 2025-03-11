import Footerlinks from "@/components/Footerlinks";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footerlinks />
    </>
  );
}
