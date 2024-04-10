import React, { Fragment, useState } from "react";
import Modal from "../Modal/modal"
import Loader from "../Loader/loader";

const ButtonWithVerification = ({query, isLoading, id}) => {

    const [isOpen, setIsOpen]=useState(null)
    const handleOnOpenModal = () => {
        setIsOpen(true)
    }
    const handleOnCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <Fragment>
        {isOpen && 
            <Modal
                title={"Êtes-vous sûr de vouloir supprimer votre compte ?"}
                handleOnCloseModal={handleOnCloseModal}
            >
                <button
                type="button"
                onClick={()=>handleOnCloseModal()}
                className={` px-3 text-sm font-semibold shadow-sm hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit`}
                >
                    Annuler
                </button>
                <button
                type="button"
                onClick={()=>{query(id && id)}}
                className={`rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit`}
                >
                    {isLoading ? <Loader/> : "Supprimer"}
                </button>

            </Modal>}
        <button
        type="button"
        onClick={()=>handleOnOpenModal()}
        className={`rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-fit`}
        >
            Supprimer
        </button>
    </Fragment>)
}

export default ButtonWithVerification;