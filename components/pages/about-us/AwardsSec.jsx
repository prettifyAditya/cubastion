import AwardsSlider from "@/components/organisms/AwardsSlider";

export default function AwardsSec({ data }){
    if(!data) return null;
    return(
        <section>
            <div className="awards_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Awards and Recognition</h2>
                    </div>
                    <AwardsSlider data={data} />
                </div>
            </div>
        </section>
    )
}