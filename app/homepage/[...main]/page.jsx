"use client"
import Inblog from "@/components/Inblog/Inblog";
import Lovecat from "@/components/Lovecat/Lovecat";
import { useParams } from "next/navigation";
import Inhoro from "@/components/Horoscope/Horoscope";
import Kundlimain from "@/components/Kundli/Kundlimain";
import Chatastro from "@/components/navbarcomp/Chatastro";
import Callastro from "@/components/talkto/Callastro";
import Dhservices from "@/components/Dhservice/Dhservices";
import Healing from "@/components/Healing/Healing";
import Kuninter from "@/components/Kundli/Kundliinter/Kuninter";
import Blogcomp from "@/components/Blogsec/Blogcomp";
import Matchkuinter from "@/components/Kundli/Kundliinter/Matchkundli/Matchkuinter";
import Panchangmain from "@/components/Panchang/Panchangmain";



export default function ServicePage() {
    const params = useParams();
    const path = params.main || [];


    const navmainComponent = {
        chatAstro: <Chatastro />,
        callAstro: <Callastro />,
        dhServices: <Dhservices />,
        inHealing: <Healing />,
        inLovecat: <Lovecat />,
        inBlog: <Inblog />,
        inHoroscope: <Inhoro />,
        inKundli: <Kundlimain />,
        blogComp: <Blogcomp />,
        problemBaseLove: <Lovecat />,
        panchangmain : <Panchangmain/>,
    }

    const getKundlibtn = {
        getKundlipage: <Kuninter />,
    }


  

    let Componentrender = null;

    if (path.length === 1) {
        Componentrender = navmainComponent[path[0]];
    }
    else if (path.length === 2 && path[0] === "inKundli") {
        Componentrender = getKundlibtn[path[1]];
    }
 


    return (
        <>
            {Componentrender ? (
                Componentrender) : (
                <div>
                    Page not found
                </div>
            )}
        </>
    );
}


