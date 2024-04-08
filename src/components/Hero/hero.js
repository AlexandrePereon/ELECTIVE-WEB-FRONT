import React from "react";
import photoHero from "../../assets/images/photoHero.jpg"
import TitleFade from "../TitleFade/titleFade";

const Hero = ({name}) => {
    return(
        <div className="hero min-h-screen bg-light-grey">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photoHero} alt="" className="sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <TitleFade title={"Bienvenue " + (name ? name : "sur CESI Eats")}/>
                <p className="py-6">Découvrez une palette de saveurs irrésistibles livrées directement chez vous ! Où chaque bouchée est une aventure. Commandez dès maintenant ..</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;