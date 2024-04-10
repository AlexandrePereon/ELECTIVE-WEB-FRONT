import React from "react";

const HorizontalCard = ({title, description, handleOnOpenModal, id, children}) => {

        return (
            <div className={`grid grid-cols-3 sm:grid-cols-3 border-b border-stroke`}>
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <p className=" text-black">
                        {title}
                    </p>
                </div>

                <div className="items-center justify-center p-2.5 xl:p-5">
                        <p className="text-meta-3">{description}</p>
                        <button 
                            className="flex"
                            onClick={()=>{handleOnOpenModal(id)}}
                        >
                            <span className="text-blue-500 hover:text-blue-600">consulter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 m-auto w-4 h-4 text-blue-500 hover:text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>
                </div>

                <div className=" items-center justify-center p-2.5 sm:flex xl:p-5">
                    {children}
                </div>
            </div>
        );

}

export default HorizontalCard