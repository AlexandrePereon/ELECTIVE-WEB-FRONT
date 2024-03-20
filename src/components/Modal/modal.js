import React from "react";

const Modal = ({handleOnCloseModal}) => {
  
    // Gérez l'événement de clic en dehors de la modal pour la fermer
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        handleOnCloseModal();
      }
    };
  
    // Gérez l'événement de la touche "Échap" pour fermer la modal
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleOnCloseModal();
      }
    };


    return(
            <div className="bg-white w-2/3 m-auto absolute z-10" onClick={(e)=>{handleClickOutside(e)}} onKeyDownCapture={(e)=>handleKeyPress(e)}>
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg m-auto mt-2 ">Hello!</h3>
                    <button className="btn btn-sm btn-circle btn-ghost m-2" onClick={()=>handleOnCloseModal()}>✕</button>
                </div>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
    );
}

export default Modal;