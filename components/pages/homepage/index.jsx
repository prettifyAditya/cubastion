import ClientsSec from "./ClientsSec";
import HeroSection from "./HeroSection";
import "@/uploads/styles/home/home.css"
import MapSec from "./MapSec";
import AboutSec from "./AboutSec";
import IndustriesSec from "./IndustriesSec";
import staticData from "@/uploads/data/StaticData.json"
import HighlightsSec from "./HighlightsSec";
import ExpertInsights from "./ExpertInsights";

export default function Homepage() {
    const aboutSecData = staticData.Homepage.Section2
    const HighlightsSecData = staticData.Homepage.Section7
    return(
        <main>
            <HeroSection />
            <AboutSec data={aboutSecData} />
            <ClientsSec />
            <IndustriesSec />
            <HighlightsSec data={HighlightsSecData} />
            <ExpertInsights />
            <MapSec />
        </main>
    )
}