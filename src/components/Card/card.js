import React from "react";

const Card = ({isLoading, image, title, description, price, children}) => {

    return(
        <div className="card w-96 bg-base-100 shadow-xl mr-1">
            <figure className={`${isLoading && "skeleton"} h-40`}>
               {!isLoading && <img src={image} alt="" className="w-x-large h-auto" />}
            </figure>
            <div className={`${isLoading && "skeleton"} card-body`}>
                <h2 className={`${isLoading && "skeleton"} card-title`}>{title}</h2>
                <p className={isLoading && "skeleton"}>{description}</p>
                <p className={isLoading && "skeleton"}>{price} €</p>
                <div className="card-actions justify-end">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;