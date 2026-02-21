import ClientsSec from "./ClientsSec";
import HeroSection from "./HeroSection";
import "@/uploads/styles/home/home.css"
import MapSec from "./MapSec";
import AboutSec from "./AboutSec";
import IndustriesSec from "./IndustriesSec";

export default function Homepage() {
    return(
        <main>
            <HeroSection />
            <AboutSec />
            <ClientsSec />
            <IndustriesSec />
            <MapSec />
        </main>
    )
}