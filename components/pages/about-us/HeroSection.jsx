import Image from "next/image";

export default function HeroSection({ data }) {
    if(!data) return null;
    return(
        <section>
            <div className="banner about-banner">
                <div className="bg">
                    <video src={data.bgmedia} autoPlay muted loop playsInline></video>
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="heading">
                                <h1>About Us</h1>
                                <p>19 Years of delivering positive business impact with capability and zero failure</p>
                            </div>
                            <div className="ceo_details">
                                <figure>
                                    <Image src={data.ceodetails.imgsrc} width={60} height={60} alt="Ceo Image"></Image>
                                </figure>
                                <figcaption>
                                    <h6>{data.ceodetails.name}</h6>
                                    <p>{data.ceodetails.desgn}</p>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}