import React, { Fragment } from "react";

const Input = ({title, handleOnChange,id, type}) => {
    return(
        <Fragment>
            <label htmlFor={id} className="block text-sm font-medium leading-6 ">
            {title}
            </label>
            <div className="mt-2">
                <input
                type={type}
                name={id}
                id={id}
                autoComplete={title}
                onChange={(e)=>{handleOnChange(e.target.value ,id)}}
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </Fragment>
    );
}

export default Input;