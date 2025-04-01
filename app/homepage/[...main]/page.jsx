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
import Natal from "@/components/Kundli/Kundliinter/Western/Natal";
import Numero from "@/components/Kundli/Kundliinter/Western/Numero";
import Compatwest from "@/components/Kundli/Kundliinter/Western/Compatwest";
import Solar from "@/components/Kundli/Kundliinter/Western/Solar";
import Lunar from "@/components/Kundli/Kundliinter/Western/Lunar";
import Transit from "@/components/Kundli/Kundliinter/Western/Transit";
import Doshas from "@/components/Kundli/Kundliinter/Kundlidosha/Doshas";
import Matchkundli from "@/components/Kundli/Kundliinter/Matchkundli/Matchkundli";
import Matchkuinter from "@/components/Kundli/Kundliinter/Matchkundli/Matchkuinter";
import Numerokundli from "@/components/Kundli/Kundliinter/Numerokundli/Numerokundli";



export default function ServicePage() {
    const params = useParams();
    const path = params.main || [];


    const navmainComponent = {
       chatAstro : <Chatastro/>,
       callAstro : <Callastro/>,
       dhServices : <Dhservices/>,
       inHealing : <Healing/>,
       inLovecat : <Lovecat/>,
       inBlog: <Inblog/>,
       inHoroscope : <Inhoro/>,
       inKundli : <Kundlimain/>,
       blogComp : <Blogcomp/>,
       problemBaseLove : <Lovecat/>

    }

    const getKundlibtn = {
        getKundlipage : <Kuninter/>, 
    }
     const kundliinteral ={
        kundliBasic1 : <Basichart/>,
        generalPred : <General/>,
        westernPage : <Western/>,
        doshakundli : <Doshas/>,
        matchHoro : <Matchkundli/>,
        numerokundli : <Numerokundli/>
     }

     const matchkundliinter = {
        matchKundli : <Matchkuinter/>
     }

     const westerninter = {
        natalpage : <Natal/>,
        numberpage : <Numero/>,
        compatwest : <Compatwest/>,
        solarwest : <Solar/>,
        transitwest : <Transit/>,
        lunarwest : <Lunar/>,
     }

    let Componentrender = null;

    if (path.length === 1) {
        Componentrender = navmainComponent[path[0]];
    }
    else if (path.length === 2 && path[0] === "inKundli") { 
        Componentrender = getKundlibtn[path[1]];
    }
    else if (path.length === 3 && path[1] === "getKundlipage" && path[0] === "inKundli") {
        Componentrender = kundliinteral[path[2]];
    }
    else if (path.length === 4 && path[2] === "westernPage" && path[1] === "getKundlipage" ) {
        Componentrender = westerninter[path[3]];
    }
    else if (path.length === 4 &&  path[2] === "matchHoro" && path[1] === "getKundlipage" && path[0] === "inKundli"  ) {
        Componentrender = matchkundliinter[path[3]];
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


