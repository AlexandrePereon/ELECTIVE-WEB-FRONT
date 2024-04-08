import React from "react";
import TitleFade from "../TitleFade/titleFade";
import ImageHero from "../../assets/images/photoHero.jpg"

const Hero = ({name, heroContent}) => {

    if(heroContent) {
        return(
            <div className="hero min-h-screen bg-light-grey">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroContent?.image} alt="" className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <TitleFade title={"Bienvenue " + (name ? name : "sur CESI Eats")}/>
                    <p className="py-6">{heroContent?.description}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="hero min-h-screen bg-light-grey">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ImageHero} alt="" className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <TitleFade title={"Bienvenue " + (name ? name : "sur CESI Eats")}/>
                    <p className="py-6">{"Bienvenue sur le site de CESI Eats"}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Hero;