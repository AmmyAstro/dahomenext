"useState";
"use client";
import { useState } from "react";

export default function Lovecalc() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [yourGender, setYourGender] = useState("male");
  const [partnerGender, setPartnerGender] = useState("female");
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLove = () => {
    if (!yourName || !partnerName) {
      alert("Please enter both names!");
      return;
    }
    const randomLove = Math.floor(Math.random() * 100) + 1;
    setLovePercentage(randomLove);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">❤️ Love Calculator 💕</h1>

        {/* Your Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white outline-none border border-gray-600 focus:border-purple-400"
          />
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="yourGender"
                value="male"
                checked={yourGender === "male"}
                onChange={() => setYourGender("male")}
                className="mr-1"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="yourGender"
                value="female"
                checked={yourGender === "female"}
                onChange={() => setYourGender("female")}
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>

        {/* Partner's Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Partner's Name</label>
          <input
            type="text"
            placeholder="Enter Partner's Name"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white outline-none border border-gray-600 focus:border-purple-400"
          />
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="partnerGender"
                value="male"
                checked={partnerGender === "male"}
                onChange={() => setPartnerGender("male")}
                className="mr-1"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="partnerGender"
                value="female"
                checked={partnerGender === "female"}
                onChange={() => setPartnerGender("female")}
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateLove}
          className="w-full p-2 mt-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
        >
          Calculate Love ❤️
        </button>

        {/* Display Love Percentage */}
        {lovePercentage !== null && (
          <div className="mt-4 text-center text-xl font-bold text-pink-400">
            💖 Love Match: {lovePercentage}%
          </div>
        )}
      </div>
    </div>
  );
}
