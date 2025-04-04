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
import Basichart from "@/components/Kundli/Kundliinter/Basichart";
import General from "@/components/Kundli/Kundliinter/Generallife/General";
import Western from "@/components/Kundli/Kundliinter/Western/Western";

import Doshas from "@/components/Kundli/Kundliinter/Kundlidosha/Doshas";
import Matchkundli from "@/components/Kundli/Kundliinter/Matchkundli/Matchkundli";
import Matchkuinter from "@/components/Kundli/Kundliinter/Matchkundli/Matchkuinter";
import Numerokundli from "@/components/Kundli/Kundliinter/Numerokundli/Numerokundli";
import Myday from "@/components/Kundli/Kundliinter/Myday/Myday";
import Varshaphal from "@/components/Kundli/Kundliinter/Varshaphal/Varshaphal";



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
        problemBaseLove: <Lovecat />
    }

    const getKundlibtn = {
        getKundlipage: <Kuninter />,
    }


    const matchkundliinter = {
        matchKundli: <Matchkuinter />
    }

    let Componentrender = null;

    if (path.length === 1) {
        Componentrender = navmainComponent[path[0]];
    }
    else if (path.length === 2 && path[0] === "inKundli") {
        Componentrender = getKundlibtn[path[1]];
    }
    // else if (path.length === 3 && path[1] === "getKundlipage" && path[0] === "inKundli") {
    //     Componentrender = kundliinteral[path[2]];
    // }


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


