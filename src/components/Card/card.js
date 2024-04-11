import React from "react";

const Card = ({isLoading, image, title, description, price, children}) => {

    return(
        <div className="card bg-base-100 shadow-xl mr-1">
               {!isLoading && <img src={image} alt="" className="rounded-t-xl w-full h-36 object-cover" />}
            <div className={`${isLoading && "skeleton"} m-auto card-body indicator`}>
                {price >= 0 && <span className="text-white indicator-item indicator-top p-2 w-fit h-fit indicator-center badge">{price} €</span>}
                <h2 className={`${isLoading && "skeleton"} `}>{title}</h2>
                <p className={`${isLoading && "skeleton"} text-xs w-36`}>{description}</p>
                <div className="card-actions justify-end">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Card;