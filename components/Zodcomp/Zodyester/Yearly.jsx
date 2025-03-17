import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: 0, name: "yearly Life", icon: "/ds-img/user2.png", content: "Your personal relationships are highlighted by today's celestial alignments..." },
  { id: 1, name: "Professional Life", icon: "/ds-img/handshake.png", content: "Today, a wave of innovation might sweep through your professional life..." },
  { id: 2, name: "Health", icon: "/ds-img/healthcare.png", content: "Your health receives a gentle nudge towards transformation today..." },
  { id: 3, name: "Travel", icon: "/ds-img/airplane.png", content: "Travel plans may need a flexible approach today..." },
  { id: 4, name: "Luck", icon: "/ds-img/fingers.png", content: "Embrace spontaneity and allow adventure to guide you today..." },
  { id: 5, name: "Emotions", icon: "/ds-img/emotional.png", content: "Emotions run high today, inviting introspection and self-awareness..." },
];

export default function Yearly() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="zod-life-det">
            <div className="zod-luck py-5">
                <h5 className="text-xl text-[#000] text-center">
                    Good luck charms for you
                </h5>
                <div className="luck-box flex items-center justify-between">
                    <div
                        className="rounded-lg px-5 py-3 bg-violet-300 w-1/4 flex items-center justify-center flex-col gap-2">
                        <h5 className="text-[#000] text-base">Lucky Colours</h5>
                        <div className="col-luck flex items-center justify-center gap-5">
                            <div className="luck-col w-8 h-8 rounded-full bg-amber-400"> </div>
                            <div className="luck-col w-8 h-8 rounded-full bg-fuchsia-700"> </div>
                        </div>
                    </div>
                    <div
                        className="rounded-lg px-5 py-3 bg-fuchsia-300 w-1/4 flex items-center justify-center flex-col gap-2">
                        <h5 className="text-[#000] text-base">Lucky Numbers</h5>
                        <div className="col-luck">
                            <span className="text-[#000] text-sm"> 1,2,6</span>
                        </div>
                    </div>
                    <div
                        className="rounded-lg px-5 py-3 bg-purple-300 w-1/4 flex items-center justify-center flex-col gap-2">
                        <h5 className="text-[#000] text-base">Lucky Alphabets</h5>
                        <div className="col-luck">
                            <span className="text-[#000] text-sm"> Q , W , E</span>
                        </div>
                    </div>
                </div>
            </div>
      <div className="mob-dsp-none py-3 flex flex-wrap items-center justify-between">
        {categories.map((category) => (
          <div key={category.id} className="zod-det-mob-card">
            <p
              onClick={() => setActiveCategory(category.id)}
              className={`bg-gradient-to-r from-[#8d5c9c8b] to-[#5a35b3aa] flex items-center justify-center w-48  py-2 rounded-lg gap-2 cursor-pointer transition-all ${
                activeCategory === category.id ? "border border-white shadow-lg" : ""
              }`}
            >
              <Image alt={category.name} className="zodiac-imgs" loading="lazy" width={25} height={25} src={category.icon} />
              <span>{category.name}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="car-swn-zod-det position-relative mt-4">
        <div className="horoscope_single_box rounded-lg border-2 border-violet-300 p-3">
          <div className="horoscope_single_heading flex items-center gap-4">
            <div className="horoscope_single_image">
              <Image alt={categories[activeCategory].name} width={30} height={30} loading="lazy" src={categories[activeCategory].icon} />
            </div>
            <div className="horoscope_single_title">
              <h3 className="text-[#000] text-base">{categories[activeCategory].name}</h3>
            </div>
          </div>
          <div className="text-[#000] text-base mt-2">{categories[activeCategory].content}</div>
        </div>
      </div>
    </div>
  );
}
