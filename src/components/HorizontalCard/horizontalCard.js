import React from "react";

const HorizontalCard = ({title, description, children}) => {
    return(
        <div className={`grid grid-cols-3 sm:grid-cols-3 border-b border-stroke`}>
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className=" text-black">
                    {title}
                </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{description}</p>
            </div>

            <div className=" items-center justify-center p-2.5 sm:flex xl:p-5">
                {children}
            </div>
        </div>
);}

export default HorizontalCard