import staticData from "@/uploads/data/StaticData.json"
import ClientsSec from "@/components/organisms/ClientsSec";
import "@/uploads/styles/home/home.css"

export default function IndustryDetailsPage(){
    const clientsData = staticData.IndustryDetails.Section2
    return(
        <main>
            <ClientsSec data={clientsData} />
        </main>
    )
}