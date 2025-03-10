"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"

const faqs = [
    {
      question: "How do I pay for a session?",
      answer:
        "Simply go to the recharge option, choose the desired package, and click on Proceed to Pay. Then, select your preferred payment method, such as UPI, cards, net banking, or other wallet options. Once your payment is successfully completed, the recharge amount will be added to your Dhwani Astro wallet. You can then use this balance to consult with an astrologer.",
      bgColor: "bg-purple-200",
    },
    {
      question: "Is Astrology Prediction True?",
      answer:
        "One of the main criticisms of astrology is that there is no evidence to support the idea that the alignment of celestial bodies has any effect on human affairs...",
      bgColor: "bg-violet-200",
    },
    {
      question: "How can Online Astrology help in predicting the future?",
      answer:
        "Online astrology can provide you with personalized horoscopes and predictions based on your birth date and astrological sign...",
      bgColor: "bg-fuchsia-200",
    },
    {
      question: "What kind of questions can one ask from Online Astrologers?",
      answer:
        "As long as you're polite and honest with your questions, you can ask an astrologer anything. Astrology has answers for almost everything...",
      bgColor: "bg-purple-200",
    },
  ];

export default function FAQue() {
 

      const [openIndex, setOpenIndex] = useState(null);

      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (

        <div className="max-w-7xl mx-auto bg-white p-1 md:p-6 px-4 py-3">
          <h2 className="relative text-[#2f1254] text-md md:text-2xl py-5 text-center font-semibold">
            • Frequently Asked Questions •
          </h2>
          <div className="space-y-4">
            <div className="faq-sec flex flex-wrap gap-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b-purple-100 border-b pb-0 md:pb-2 w-full"
                >
                  <button
                    className={`rounded-lg p-3 flex justify-between w-full text-xs md:text-base font-medium focus:outline-none toggle-faq ${faq.bgColor}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#000]">{faq.question}</span>
                    <span className="icon text-[#000]">{openIndex === index ? "-" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-xs md:text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }