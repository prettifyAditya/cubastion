import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

export default function AboutSec(){
    return(
        <section>
            <div className="about_sec sec-pad-all">
                <div className="container">
                    <div className="about_wrapper">
                        <figcaption>
                            <div className="heading">
                                <h1>19 Years of Delivering</h1>
                                <p>With 19 years of consistent delivery, we have helped businesses achieve measurable outcomes through strong execution, proven capability, and dependable processes. Our focus on quality, reliability, and long-term partnerships has enabled us to deliver complex projects with confidence and zero delivery failures.</p>
                                <Button linkHref="/about-us" buttonText="Get to Know Us" />
                            </div>
                        </figcaption>
                        <figure>
                            <Image src="/assets/images/home/about_img.jpg" width="325" height="325" alt="About Image"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}