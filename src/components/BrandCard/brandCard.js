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
 * @param {number} props.price - Le nombre de visiteurs.
 * @param {string} props.id - Les revenus de la marque.
 * @param {number} props.childen - Le taux de conversion de la marque.
 * @returns {React.JSX.Element} - Le composant BrandCard.
 */
  
  const BrandCard = ({logo, name, price, id, children}) => {
    return (
            <div className={`grid grid-cols-3 sm:grid-cols-3 border-b border-stroke`}>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={logo} alt="Brand" />
                </div>
                <p className=" text-black">
                  {name}
                </p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{price}€</p>
              </div>
  
  
              <div className=" items-center justify-center p-2.5 sm:flex xl:p-5">
                 {children}
              </div>
            </div>
    );
  };
  
  export default BrandCard;
  