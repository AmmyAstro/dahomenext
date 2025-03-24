import { useState } from "react";
import Image from "next/image";

const planetarr = [
	{
		"id": 0,
		"name": "Sun",
		"fullDegree": 72.18954079246434,
		"normDegree": 12.189540792464342,
		"speed": 0.9537797443255392,
		"isRetro": "false",
		"sign": "Gemini",
		"signLord": "Mercury",
		"nakshatra": "Ardra",
		"nakshatraLord": "Rahu",
		"nakshatra_pad": 2,
		"house": 9,
		"is_planet_set": false,
		"planet_awastha": "Yuva"
	},
	{
		"id": 1,
		"name": "Moon",
		"fullDegree": 11.72351598586304,
		"normDegree": 11.72351598586304,
		"speed": 13.920316198066743,
		"isRetro": "false",
		"sign": "Aries",
		"signLord": "Mars",
		"nakshatra": "Ashwini",
		"nakshatraLord": "Ketu",
		"nakshatra_pad": 4,
		"house": 7,
		"is_planet_set": false,
		"planet_awastha": "Kumara"
	},
	{
		"id": 2,
		"name": "Mars",
		"fullDegree": 73.41992352157277,
		"normDegree": 13.41992352157277,
		"speed": 0.6649777633290916,
		"isRetro": "false",
		"sign": "Gemini",
		"signLord": "Mercury",
		"nakshatra": "Ardra",
		"nakshatraLord": "Rahu",
		"nakshatra_pad": 3,
		"house": 9,
		"is_planet_set": true,
		"planet_awastha": "Yuva"
	},
	{
		"id": 3,
		"name": "Mercury",
		"fullDegree": 85.49171301406825,
		"normDegree": 25.491713014068253,
		"speed": -0.29467903633858694,
		"isRetro": "true",
		"sign": "Gemini",
		"signLord": "Mercury",
		"nakshatra": "Punarvasu",
		"nakshatraLord": "Jupiter",
		"nakshatra_pad": 2,
		"house": 9,
		"is_planet_set": false,
		"planet_awastha": "Mrit"
	},
	{
		"id": 4,
		"name": "Jupiter",
		"fullDegree": 35.53009646668099,
		"normDegree": 5.5300964666809875,
		"speed": 0.2119922731034037,
		"isRetro": "false",
		"sign": "Taurus",
		"signLord": "Venus",
		"nakshatra": "Krittika",
		"nakshatraLord": "Sun",
		"nakshatra_pad": 3,
		"house": 8,
		"is_planet_set": false,
		"planet_awastha": "Mrit"
	},
	{
		"id": 5,
		"name": "Venus",
		"fullDegree": 76.57181911264793,
		"normDegree": 16.57181911264793,
		"speed": 1.2289765385390012,
		"isRetro": "false",
		"sign": "Gemini",
		"signLord": "Mercury",
		"nakshatra": "Ardra",
		"nakshatraLord": "Rahu",
		"nakshatra_pad": 3,
		"house": 9,
		"is_planet_set": true,
		"planet_awastha": "Yuva"
	},
	{
		"id": 6,
		"name": "Saturn",
		"fullDegree": 32.39707346334402,
		"normDegree": 2.3970734633440216,
		"speed": 0.10910000257030411,
		"isRetro": "false",
		"sign": "Taurus",
		"signLord": "Venus",
		"nakshatra": "Krittika",
		"nakshatraLord": "Sun",
		"nakshatra_pad": 2,
		"house": 8,
		"is_planet_set": false,
		"planet_awastha": "Mrit"
	},
	{
		"id": 7,
		"name": "Rahu",
		"fullDegree": 91.7592615626992,
		"normDegree": 1.7592615626991943,
		"speed": -0.05299201968813196,
		"isRetro": "true",
		"sign": "Cancer",
		"signLord": "Moon",
		"nakshatra": "Punarvasu",
		"nakshatraLord": "Jupiter",
		"nakshatra_pad": 4,
		"house": 10,
		"is_planet_set": false,
		"planet_awastha": "Mrit"
	},
	{
		"id": 8,
		"name": "Ketu",
		"fullDegree": 271.7592615626992,
		"normDegree": 1.75926156269918,
		"speed": -0.05299201968813196,
		"isRetro": "true",
		"sign": "Capricorn",
		"signLord": "Saturn",
		"nakshatra": "Uttra Shadha",
		"nakshatraLord": "Sun",
		"nakshatra_pad": 2,
		"house": 4,
		"is_planet_set": false,
		"planet_awastha": "Mrit"
	},
	{
		"id": 9,
		"name": "Ascendant",
		"fullDegree": 207.92868587120444,
		"normDegree": 27.928685871204436,
		"speed": 0,
		"isRetro": false,
		"sign": "Libra",
		"signLord": "Venus",
		"nakshatra": "Vishakha",
		"nakshatraLord": "Jupiter",
		"nakshatra_pad": 3,
		"house": 1,
		"is_planet_set": false,
		"planet_awastha": "--"
	}
]

const vim_dasha = [
	{
		"planet": "Ketu",
		"planet_id": 8,
		"start": "2-5-1994  ",
		"end": "2-5-2001 "
	},
	{
		"planet": "Venus",
		"planet_id": 5,
		"start": "2-5-2001 ",
		"end": "2-5-2021 "
	},
	{
		"planet": "Sun",
		"planet_id": 0,
		"start": "2-5-2021 ",
		"end": "2-5-2027  "
	},
	{
		"planet": "Moon",
		"planet_id": 1,
		"start": "2-5-2027  ",
		"end": "2-5-2037 "
	},
	{
		"planet": "Mars",
		"planet_id": 2,
		"start": "2-5-2037 ",
		"end": "2-5-2044 "
	},
	{
		"planet": "Rahu",
		"planet_id": 7,
		"start": "2-5-2044 ",
		"end": "2-5-2062  "
	},
	{
		"planet": "Jupiter",
		"planet_id": 4,
		"start": "2-5-2062  ",
		"end": "2-5-2078  "
	},
	{
		"planet": "Saturn",
		"planet_id": 6,
		"start": "2-5-2078  ",
		"end": "2-5-2097 "
	},
	{
		"planet": "Mercury",
		"planet_id": 3,
		"start": "2-5-2097 ",
		"end": "3-5-2114  "
	}
]
const planets =[
	{
		"nm": "GOOD",
		"pla":"Mars, Venus",		
	},
	{
		"nm": "BAD",
		"pla":"Venus, Venus, Moon"	,	
	},
	{
		"nm": "KILLER",
		"pla":"Venus, Jupiter"	,	
	},
	{
		"nm": "YOGAKARAKA",
		"pla":"Saturn"	,	
	}
]

function roundUp(num, decimalPlaces) {
	const factor = Math.pow(10, decimalPlaces);
	return Math.ceil(num * factor) / factor;
}
export default function Planets() {
	//   const [activeCategory, setActiveCategory] = useState(0);

	return (
		<section className="basic-details-main">
			<div className="flex  gap-5 flex-col">

				<div className="basic-det w-full">
					<h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Planets Details</h5>
					<div className="basic-box flex flex-col gap-3 text-[#000]">
						<div className="pl-ul grid grid-cols-9 bg-purple-400 rounded-lg px-5 py-2">
							<h5 className="text-sm font-semibold">Planet</h5>
							<h5 className="text-sm font-semibold">Sign</h5>
							<h5 className="text-sm font-semibold">Sign Lord</h5>
							<h5 className="text-sm font-semibold">Nakshatra</h5>
							<h5 className="text-sm font-semibold">Naksh Lord	</h5>
							<h5 className="text-sm font-semibold">Degree</h5>
							<h5 className="text-sm font-semibold">Retro(R)</h5>
							<h5 className="text-sm font-semibold">Awastha</h5>
							<h5 className="text-sm font-semibold">House</h5>
						</div>

						{planetarr.map((plan, index) => (
							<div key={index} className="basic-card grid grid-cols-9 gap-4 bg-purple-200 rounded-lg px-5 py-2">
								<span className="text-sm">{plan.name}</span>
								<span className="text-sm">{plan.sign}</span>
								<span className="text-sm">{plan.signLord}</span>
								<span className="text-sm">{plan.nakshatra}</span>
								<span className="text-sm">{plan.nakshatraLord}</span>
								<span className="text-sm">{roundUp(plan.normDegree, 3)}</span>
								<span className="text-sm">{plan.isRetro}</span>
								<span className="text-sm">{plan.planet_awastha}</span>
								<span className="text-sm">{plan.house}</span>
							</div>
						))}
					</div>
				</div>


				<div className="vim-planet grid grid-cols-2 gap-3">

					<div className="vimh-det ">
						<h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Vimshotri Dasha</h5>
						<div className="basic-box flex flex-col gap-3 text-[#000]">
							<div className="pl-ul grid grid-cols-4 bg-purple-400 rounded-lg px-5 py-2">
								<h5 className="text-sm font-semibold">Planet</h5>
								<h5 className="text-sm font-semibold">Start Date </h5>
								<h5 className="text-sm font-semibold">End Date</h5>
								<h5 className="text-sm font-semibold">Next</h5>
							</div>

							{vim_dasha.map((vim, index) => (
								<div key={index} className="basic-card grid grid-cols-4 gap-4 bg-purple-200 rounded-lg px-5 py-2">
									<span className="text-sm">{vim.planet}</span>
									<span className="text-sm">{vim.start}</span>
									<span className="text-sm">{vim.end}</span>
									<span className="text-sm">{vim.nxt}</span>

								</div>
							))}
						</div>
					</div>

					<div className="planets-det">
						<h5 className="p-5 text-center justify-self-center text-2xl text-[#000]">Planet Nature</h5>
						<div className="pla-det-bx gap-5 flex flex-col justify-center justify-self-center">
							{planets.map((pln,index) =>(

							
							<div key={index} className="flex gap-5 text-[#000] text-sm">
								<h5 className="bg-purple-400 rounded-lg px-5 py-2">{pln.nm} : </h5>
								<span className="bg-purple-200 rounded-lg px-5 py-2"> {pln.pla}</span>
							</div>
							))}
						</div>
					</div>


				</div>



			</div>
		</section>

	);
}
