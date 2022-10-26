import { useEffect, useRef } from "react";
import { revealAnimation } from "../../gsap/gsap";
import { IconArrowDown } from "../../assets/images/svg";

const HeroBanner = () => {

    let introText = useRef(null);

    useEffect(() => {
        revealAnimation(introText);
    }, []);

    return (
        <div className="heroBanner">
            <div className="img-wrapper">
                <figure></figure>
            </div>

            <div className="container">
                <div className="content-wrapper">
                    <div className="intro-text gs_reveal" ref={(el) => (introText = el)}>
                        <h2 className="hero-title">What is Lorem Ipsum?</h2>
                        <p className="hero-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <a href="#page-content" className="anchor-round">
                        <IconArrowDown/>
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default HeroBanner;
