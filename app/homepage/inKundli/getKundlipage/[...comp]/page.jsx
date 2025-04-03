"use client";

import { useParams } from "next/navigation";
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
import Myday from "@/components/Kundli/Kundliinter/Myday/Myday";
import Varshaphal from "@/components/Kundli/Kundliinter/Varshaphal/Varshaphal";

export default function Kundlipage() {
    const params = useParams();
    const path = params.comp || [];


    if (!path || path.length === 0) {
        return <div>Invalid URL structure</div>;
    }

    const kundliinteral = {
        kundliBasic1: <Basichart />,
        generalPred: <General />,
        westernPage: <Western />,
        doshakundli: <Doshas />,
        matchHoro: <Matchkundli />,
        numerokundli: <Numerokundli />,
        mydaytoday: <Myday />,
        varshaphal : <Varshaphal/>,
    };

    const westerninter = {
        natalpage: <Natal />,
        numberpage: <Numero />,
        compatwest: <Compatwest />,
        solarwest: <Solar />,
        transitwest: <Transit />,
        lunarwest: <Lunar />,
        
    };

    const matchkundliinter = {
        matchKundli: <Matchkuinter />,
    };

    let Componentrender = null;


    if (path.length === 1) {
        Componentrender = kundliinteral[path[0]];
    }

    else if (path.length === 2 && path[0] === "westernPage") {
        Componentrender = westerninter[path[1]];
    }

    else if (path.length === 2 && path[0] === "matchKundli") {
        Componentrender = matchkundliinter[path[1]];
    }



    return (
        <>
            {Componentrender ? Componentrender : <div>Page not found</div>}
        </>
    );
}
