import React from "react";

/**
 * Composant card brand.
 * 
 * @typedef BrandCard
 * @kind functionnal component
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.logo - L'URL de l'image.
 * @param {string} props.name - Le nom de la marque.
 * @param {number} props.visitors - Le nombre de visiteurs.
 * @param {string} props.revenues - Les revenus de la marque.
 * @param {number} props.sales - Le nombre de ventes de la marque.
 * @param {number} props.conversion - Le taux de conversion de la marque.
 * @returns {React.JSX.Element} - Le composant BrandCard.
 */
  
  const BrandCard = ({logo, name, visitors, revenues, sales, conversion}) => {
    return (
            <div className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke`}>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={logo} alt="Brand" />
                </div>
                <p className=" text-black">
                  {name}
                </p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black">{visitors}K</p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">${revenues}</p>
              </div>
  
              <div className=" items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black">{sales}</p>
              </div>
  
              <div className=" items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{conversion}%</p>
              </div>
            </div>
    );
  };
  
  export default BrandCard;
  