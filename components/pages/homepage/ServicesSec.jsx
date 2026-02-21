export default function ServicesSec({ data }){
    if(!data) return null;
    return(
        <section>
            <div className="services_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                        <p>{data.subheading}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}