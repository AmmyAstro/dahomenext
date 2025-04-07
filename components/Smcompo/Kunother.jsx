import Image from "next/image";

const kuother = [
    {
        id: 0,
        name: "Kundli",
        src: "/ds-img/k1.png",
    },
    {
        id: 1,
        name: "Kalsharp",
        src: "/ds-img/k7.png",

    },
    {
        id: 2,
        name: "Sani Report",
        src: "/ds-img/k11.png",
    },
    {
        id: 3,
        name: "Gemstone Report",
        src: "/ds-img/gemstone.png",
    },  
    {
        id: 4,
        name: "Nakshatra",
        src: "/ds-img/nak.jpg",
    },

    {
        id: 5,
        name: "Numerology",
        src: "/ds-img/num.webp",
    },


];

export default function Kundliother() {

    return (
        <section>
            <div className="side-pop p-3 flex flex-col gap-3 border-2 rounded-lg">
                <span className="text-[#000] text-center font-semibold text-xl"> Kundli and Astrology Services</span>
                <div className="grid grid-cols-2 gap-2">
                    {kuother.map((kuot, index) => (
                        <div className=" p-3 border flex flex-col items-center gap-2 justify-center border-b-gray-600 rounded-lg" key={index}>
                            <Image src={kuot.src} width={100} height={100} className="w-13 h-13 rounded-full" alt="kundli images" />
                            <h5 className="text-[#000] text-xs font-semibold text-center">{kuot.name}</h5>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}
