import React from "react";

/**
 * Composant title fade.
 * 
 * @typedef TitleFade
 * @kind functionnal component
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Titre du composant.
 * @returns {React.JSX.Element} - Le composant TitleFade.
 */

const TitleFade = ({title}) => {
    return (
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-light-green">
            {title}
        </h1>
    )
}

export default TitleFade;