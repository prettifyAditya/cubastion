import ClientsSec from "./ClientsSec";
import HeroSection from "./HeroSection";
import MapSec from "./MapSec";
import AboutSec from "./AboutSec";
import IndustriesSec from "./IndustriesSec";
import HighlightsSec from "./HighlightsSec";
import ExpertInsights from "./ExpertInsights";
import CustomerSec from "./CustomerSec";
import staticData from "@/uploads/data/StaticData.json"
import "@/uploads/styles/home/home.css"

export default function Homepage() {
    const aboutSecData = staticData.Homepage.Section2
    const customerSecData = staticData.Homepage.Section6
    const HighlightsSecData = staticData.Homepage.Section7
    const expertSecData = staticData.Homepage.Section8
    return(
        <main>
            <HeroSection />
            <AboutSec data={aboutSecData} />
            <ClientsSec />
            <IndustriesSec />
            <CustomerSec data={customerSecData} />
            <HighlightsSec data={HighlightsSecData} />
            <ExpertInsights data={expertSecData} />
            <MapSec />
        </main>
    )
}