"use client"; // Required for interactive UI in Next.js 13+



const predarr = [
    {
        "prediction": "Do not let your past negative experience hamper your present. You might  face issues related to health. Changing your diet regime might help you feel better. Negative emotions which have been brewing since quite some time shall surface today. You shall be unusually sensitive to criticism. Avoid all activities involving physical risks. You might develop a throat problem.",
        "lucky_color": "White",
        "lucky_number": "7,9",
        "prediction_date": "17-6-2017"
    }
]

const myday = [
    {
        "birth_moon_sign": "Virgo",
        "birth_moon_nakshatra": "Uttra Phalguni",
        "prediction": {
            "health": "A friend shall inspire you to adopt a higher level of physical fitness today. Make sure the food is nutritious and natural. Don’t indulge in overeating. Keep away from unhealthy habits.",
            "emotions": "You shall be in a friendly and cheerful mood today. You shall be in a mood to celebrate with your friends and family. You sense of happiness will be heightened.",
            "profession": "You will be full of enthusiasm and able to handle work efficiently. You can get new responsibilities which will prove to be beneficial for you. Monetary gains are indicated through your efforts.  Use your professional power to improve your career prospects.",
            "luck": "You will be successful in whatever you do. Today you shall get some good news about someone close to you.",
            "personal_life": "Family atmosphere will be cordial. Love relationships are strengthened. This is a good time to relax at home. Avoid all confrontations. There is a possibility of purchase of some household items.  ",
            "travel": "Travel will help you in overcoming your boredom for a short period. You’ll remain enthusiastic during traveling."
        },
        "prediction_date": "7 July 2017"
    }
]


export default function Myday() {
    // const [actFav, setActfav] = useState(0);
    return (
        <section className="kundli-inter-page w-full flex flex-col items-center justify-center md:p-2 p-2">


            <div className="kundli-items-box-side w-full flex md:flex-row flex-col md:grid md:grid-cols-4  md:px-0 gap-5 py-1">
                <div className="basic-kundli-charts  flex flex-col gap-2 md:col-span-4 items-center">
                    <h5 className="text-sm md:text-xl text-[#000] font-semibold">
                        <span className="text-red-500">"Prediction : </span>
                        of the Day"
                    </h5>
                    <section className="basic-details-main w-full flex flex-col gap-5">

                        <div>
                            {predarr.map((pred, index) => (
                                <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-center text-xl">Today's Prediction : </span>
                                        <span className="text-sm">{pred.prediction}</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 gap-5 md:gap-10">
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full  px-5 py-2 "><span className=" text-sm font-semibold">Lucky Color : </span> <span className="text-sm">{pred.lucky_color}</span></div>
                                        <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full px-5 py-2"><span className=" text-sm font-semibold">Lucky Number : </span> <span className="text-sm">{pred.lucky_number}</span></div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            {myday.map((mday, index) => (
                                <div key={index} className="flex flex-col gap-5 text-[#000] border border-purple-200 rounded-lg shadow-lg px-5 py-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-center text-xl">Daily Prediction : </span>
                                        <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-20 gap-5 md:gap-10">
                                            <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full  px-5 py-2 "><span className="text-sm font-semibold">Birth Moon Sign : </span> <span className="text-sm">{mday.birth_moon_sign}</span></div>
                                            <div className="flex items-center bg-purple-100 justify-between shadow-lg rounded-full px-5 py-2"><span className="text-sm font-semibold">Birth Moon Nakshatra : </span> <span className="text-sm">{mday.birth_moon_nakshatra}</span></div>
                                        </div>
                                        <div className="pred-day flex flex-col gap-2 text-sm text-[#000]">
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Health : </span><span>{mday.prediction.health}</span></div>
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Emotions : </span><span>{mday.prediction.emotions}</span></div>
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Profession : </span><span>{mday.prediction.profession}</span></div>
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Luck : </span><span>{mday.prediction.luck}</span></div>
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Personal Life : </span><span>{mday.prediction.personal_life}</span></div>
                                            <div className="flex flex-col gap-0"><span className="font-semibold">Travel : </span><span>{mday.prediction.travel}</span></div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>



                    </section>
                </div>


            </div>


        </section>
    );
}
