import React from "react";

const AddNumberButton = ({value, numberOfArticle, handleOnChange}) => {

    return(
        <div className="join">
            <button type="button" className="join-item btn" onClick={()=>{handleOnChange(value,"remove")}} disabled={numberOfArticle === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </button>
            <p className="join-item btn text-center bg-black">{numberOfArticle}</p>
            <button type="button" className="join-item btn" onClick={()=>{handleOnChange(value,"add")}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>          
    );
}

export default AddNumberButton;