import React from "react";

const Card = ({isLoading, image, title, description, price, children}) => {

    return(
        <div className="card bg-base-100 shadow-xl mr-1 w-fit">
            <figure className={`${isLoading && "skeleton"} h-40`}>
               {!isLoading && <img src={image} alt="" className="w-x-large h-auto" />}
            </figure>
            <div className={`${isLoading && "skeleton"} card-body indicator w-fit`}>
                {price >= 0 && <span className="text-white indicator-item indicator-top p-2 w-fit h-fit indicator-center badge">{price} €</span>}
                <h2 className={`${isLoading && "skeleton"} `}>{title}</h2>
                <p className={`${isLoading && "skeleton"} text-xs`}>{description}</p>
                <div className="card-actions justify-end">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;