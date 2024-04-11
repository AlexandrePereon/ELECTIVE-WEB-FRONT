import React,{ Fragment, useState }  from "react";
import TitleFade from "../TitleFade/titleFade";
import BrandCard from "../BrandCard/brandCard";
import { useNavigate} from 'react-router-dom';
import Pagination from "../Pagination/pagination";
import ButtonWithVerification from "../ButtonWithVerification/buttonWithVerification";

const MyProductsAccountForm = ({productData, handleDelete, pagination, maxPage, type, handleSetPagination, isLoading}) => {
    const navigate = useNavigate();

    const productsList = productData && productData.map((product, index)=>{
        return (
        <Fragment>
            <BrandCard 
                image={product.image}
                name={product.name}
                price={product.price}
                id={product._id}
                key={index}
            >
                <button
                onClick={() => navigate(`/restaurant-accueil/modification-${type}/${product._id}`)}
                className={`rounded-md w-fit p-2 bg-blue-500 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <ButtonWithVerification query={handleDelete} isLoading={isLoading} id={product._id}/> 
            </BrandCard>
        </Fragment>)
    })        
    
    return(
        <Fragment>
            {/* {alertBanner && alertBanner} */}
            <TitleFade title={`Espace modification ${type}`}/>
            {productsList}
            <Pagination 
                pagination={pagination} 
                handleSetPagination={handleSetPagination}
                maxPagination={maxPage}
                type={type}
            />
        </Fragment>
    );
}

export default MyProductsAccountForm;