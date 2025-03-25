"use client"; // Required for interactive UI in Next.js 13+
import Image from "next/image";
import { useState } from "react";
import Kuninterimg from "../Kunfreeimg";
import Sidebanner from "@/components/Smcompo/Sidebanner";
import Bestsell from "@/components/Smcompo/Bestsell";
import Ytvideo from "@/components/Smcompo/Ytvideo";
// import Kundlioth from "@/components/Smcompo/Kundlioth";
import Freereport from "@/components/Smcompo/Freereport";
import Recastro from "@/components/Smcompo/Recastro";
import FAQue from "@/components/FAQue";
import Callchatsec from "@/components/CallChatsec/Callchatsec";

const numarr = [
  {
    name: "Lifepath Number",
    numb: 6,
    para: "The Life Path 6 suggests an extremely responsible and caring individual. The loving and caring aspect of your personality makes you an ideal parent as you are naturally motherly and nurturing. For your family and group of your friends, you are a shock absorber. In extreme situations and environments, you do not react adversely and try to keep your calm. You also try to calm people around you and help them sail through the difficult times. Usually, disagreements and differences of opinion do not trouble you When in a relationship, you are able to hide your anger and hostility and exhibit only your pleasant side very easily. However, when you are trying to resolve a conflict, replace persuasion with diplomacy. Your wisdom would bag you a lot of appreciation and your friends and family would rely on you to be a mediator and solve all the misunderstandings. There is an image of maturity and understanding that you put forward when it comes to family matters. Family members believe that decisions taken by you, are just and trustworthy and they collectively agree on it.",
  },
  {
    name: "Personality Number",
    numb: 11,
    para: "With a Personality number 11, you don’t seem to be extremely confident of oneself. No wonder, being in the limelight makes you uncomfortable. You have grown up to be a nervous individual and little things can easily break your confidence. Only learning to deal with your anxiety could instill confidence in you. You are extremely sensitive at heart. You give more importance and attention to others and if you don’t take care of this trait, their views and opinions could easily hurt you. It is important that you work on your sensitive, gentler side especially when dealing with ruthless, rude people. You need to safeguard yourself and not let your vulnerability wreck you down emotionally. Only with practise and over a period of time, you will be able to project yourself confidently in the public domain.",
  },
  {
    name: "Expression Number",
    numb: 11,
    para: "Personal power is dormant in each of us. Some are awake to it and some simply become oblivious to its presence. You seem to fall in the latter category. Though unconscious of your hidden powers, you have a robust personality and make a commanding presence. You know that you are different. For you, conscious and unconscious are connected via an unbridled path. Sensitive, you possess a tremendous flow of energy. Emotion and psychology are interconnected. To strike a balance between both these, lest you fall into emotional turmoil and nervous tension, you must learn to channelize that effervescence of energy that you experience.",
  },
  {
    name: "Soul Urge Number",
    numb: 1,
    para: "The Soul Urge number 1 gives you clarity of purpose and thought. It makes you proactive and a leader in true sense. You are independent and believe in taking a lead. You are your own guide and most often rely on self for guidance. You believe in oneself and in your capabilities and do not shy from taking initiatives or taking the plunge. You are a self-starter and do not wait for a push or backing from others. Being determined and focused, you can easily take up any daunting task and execute it successfully. Honest attempts at what you do, cannot keep success away from you. You take pride in your work and expect others to respect and recognize what you do. Loyalty is one of your strongest traits.",
  },
  {
    name: "Subconscious Self Number",
    numb: 5,
    para: "With Subconscious Self number 5, you seem to come across as fickle-minded. It is hard for you to keep yourself focused on one task for long and be disciplined especially while shouldering responsibilities. Your attitude to rushing from one thing to another could make you disorganized. You may lack the dedication needed towards completion of what you have taken up and thus, leaving things half done or mid-way is quite common with you. Your escapist tendencies will not do any good, especially when faced with a problem. It would be wise on your part to face the issues and figure out a way to work through it. You need to learn to remain grounded and stay still. Hence, a good self-control and self-discipline are qualities that you need to imbibe to make you more functional and productive at things you do. ",
  },
  {
    name:"Challenge Numbers",
    numb: [1 ,  2 ,  1 ,  1],
    para: "All that is impending your personal growth lies inside you. You are extremely sensitive to other’s opinion of you. You are habituated to taking criticisms from others too seriously and that could be sabotaging. Why be so critical of self that it could belittle you and jeopardize your self-worth. You being over-critical could lead to self-doubt and your inhibitions tend to keep you away from forming deep bonds and strengthen relationships. You may grow suspicious of everyone and everything and that is damaging. Start believing in self. Trust in others and in life in general, is the lesson for you to be learned here.",
  },
];

export default function Numero() {
  // const [activeNatal, setActiveNatal] = useState(0);

  return (
    <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">
      <div className="kundli-top-sec w-full">
        <Kuninterimg />
      </div>

      <div className="kundli-items-box-side flex flex-col md:grid grid-cols-4 md:px-20 gap-5 py-5">
        <div className="basic-kundli-charts col-span-3 flex flex-col gap-2 items-center">
          <section className="basic-details-main">
            <div className="flex  gap-5 flex-col">
              <div className="basic-det w-full">
                <h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">
                  Numerological Numbers
                </h5>
              <div className="img-det flex items-center justify-center bg-purple-300 rounded-lg p-5 w-full gap-5">
                <Image src={"/ds-img/user2.png"} width={50} height={50} alt="usre image"/>
              <div className="name-dob text-[#000] flex flex-col items-center justify-center ">
                  <div>
                    <span>Name : </span> <span>Ajeet kanojia</span>
                  </div>
                  <div>
                    <span>Birth Date : </span> <span>2011-5-15</span>
                  </div>
                </div>
              </div>
              </div>

              <div className="flex flex-col gap-5">
                {numarr.map((num, index) => (
                  <div key={index} className="text-[#000] flex flex-col gap-2 border-violet-300 border rounded-lg p-3">
                    <span className="flex items-center justify-center gap-5">
                      <h5 className="text-sm font-semibold">{num.name}</h5>: <span>{num.numb}</span>
                    </span>
                    <p className="text-sm">{num.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="kundli-side flex flex-col items-center justify-start gap-3">
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
  );
}
