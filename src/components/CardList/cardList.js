import React from "react";
import Pagination from "../Pagination/pagination";

const CardList = ({children, pagination, handleSetPagination, maxPagination, type}) => {

    return(
        <div>
            <div className="flex">
                {children}
            </div>
            <Pagination 
            pagination={pagination} 
            handleSetPagination={handleSetPagination}
            maxPagination={maxPagination}
            type={type}
            />
        </div>
    );
}

export default CardList;