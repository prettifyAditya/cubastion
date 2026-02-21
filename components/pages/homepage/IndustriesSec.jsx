"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/atoms/Button";

export default function IndustriesSec(){
    const [activeIndustry, setActiveIndustry] = useState('industry-tab1')
    return(
        <section>
            <div className="industry_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Industries We Drive Growth In</h2>
                    </div>
                    <div className="tab-nav industry-nav">
                        <li className={`${activeIndustry === "industry-tab1" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab1")}>Automobile</li>
                        <li className={`${activeIndustry === "industry-tab2" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab2")}>Communications</li>
                        <li className={`${activeIndustry === "industry-tab3" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab3")}>Financial Services</li>
                        <li className={`${activeIndustry === "industry-tab4" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab4")}>Consumer Durables</li>
                        <li className={`${activeIndustry === "industry-tab5" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab5")}>Connected Devices</li>
                        <li className={`${activeIndustry === "industry-tab6" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab6")}>US Government</li>
                    </div>
                    <div className="tab-nav-content">
                        <div className={`tabs ${activeIndustry === "industry-tab1" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab2" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab3" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab4" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab5" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab6" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="white-border" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}