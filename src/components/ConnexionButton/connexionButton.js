import React from "react";

const ConnexionButton = ({handleOnClick, title}) => {
    return (                
    <button 
        onClick={()=>{handleOnClick()}}
        className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-light-green to-medium-green border-solid border-2 border-light-green  font-bold text-white px-5 py-2 rounded-full "
      >
        {title}
      </button>);
}

export default ConnexionButton;