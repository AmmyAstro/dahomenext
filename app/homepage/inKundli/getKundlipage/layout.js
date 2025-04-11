import Callchatsec from "@/components/CallChatsec/Callchatsec";
import FAQue from "@/components/FAQue";
import Kuninterimg from "@/components/Kundli/Kundliinter/Kunfreeimg";
import Bestsell from "@/components/Smcompo/Bestsell";
import Freereport from "@/components/Smcompo/Freereport";
import Kundliother from "@/components/Smcompo/Kunother";
import Recastro from "@/components/Smcompo/Recastro";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Ytvideo from "@/components/Smcompo/Ytvideo";

export default function layout({ children }) {
  return (
    <>
      <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-5 p-2">
        <div className="kundli-top-sec w-full">
          <Kuninterimg />
        </div>

        <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">
          <div className="kundli-items-main col-span-3 flex flex-col gap-10">
            {children}
          </div>
          <div className="kundli-side flex flex-col items-center justify-start gap-3">
            <Kundliother />
            {/* <Kunservice/> */}
            <Ytvideo />
            <Bestsell />
            <Sidebanner />
          </div>
        </div>

        <Freereport />
        <Recastro />
        <FAQue />
        <Callchatsec />

      </section>
    </>
  );
}
