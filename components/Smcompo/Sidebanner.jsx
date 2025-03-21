import Image from "next/image";
import Link from "next/link";



export default function Sidebanner() {

    return (
        <section>
            <div className="">
                <Link className="flex items-center justify-center" href="#"> 
                <Image src="/ds-img/d.jpg" className="md:w-[100%] md:h-[100%] w-80 h-60 rounded-lg" width={100} unoptimized height={100} alt="banner free chat" />
                </Link>
            </div>
        </section>
    );
}


