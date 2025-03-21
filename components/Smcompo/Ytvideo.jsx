import Image from "next/image";
// import Link from "next/link";



export default function Ytvideo() {

    return (
        <section>
            <div className="ytvideo flex flex-col gap-2 p-2 shadow-lg rounded-lg">
                <div className="founder-video-frame w-[100%] rounded-lg"><iframe width={300} height={280} className="w-[100%] rounded-lg"
                    src="https://www.youtube.com/embed/Z1xtQkosANM?si=NFC7Ayx8lCwE0eBy" title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex items-start gap-1"> <Image src={"/ds-img/youtube.png"} unoptimized width={30} height={30} alt="yt image" /> <span className="text-[#000] text-xs">Watch this video to know about the benefits of Tulsi  and the rituals you must know to get the best results.</span></div>

            </div>
        </section>
    );
}


