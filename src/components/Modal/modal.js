import React from "react";

const Modal = ({handleOnCloseModal, title, children}) => {
  
    // Gérez l'événement de clic en dehors de la modal pour la fermer
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        handleOnCloseModal();
      }
    };
  
    // Gérez l'événement de la touche "Échap" pour fermer la modal
    const handleKeyPress = (event) => {
      if (event.key === 27) {
        handleOnCloseModal();
      }
    };


    return(
    <div className="h-screen w-screen fixed inset-0 z-50 bg-gray-600 bg-opacity-80 flex justify-center items-center" 
      onClick={(e)=>{handleClickOutside(e)}} 
      onKeyDown={(e)=>handleKeyPress(e)}
    >
      <div className="p-4 rounded-xl sm:modal-content bg-white sm:w-2/3 z-10">
          <div className="flex justify-between">
              <h3 className="font-bold text-lg mt-2">{title} </h3>
              <button className="btn btn-sm btn-circle btn-ghost m-2" onClick={()=>handleOnCloseModal()}>✕</button>
          </div>
          {children}
      </div>
  </div>
    );
}

export default Modal;