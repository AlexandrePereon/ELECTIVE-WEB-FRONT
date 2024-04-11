import React, { Fragment } from "react";
import Pagination from "../Pagination/pagination";

const CardList = ({children, pagination, handleSetPagination, maxPagination, type}) => {

    return(
        <Fragment>
            <div className="flex sm:justify-center overflow-x-auto lg:overflow-x-visible ">
                {children}
            </div>
            <Pagination 
            pagination={pagination} 
            handleSetPagination={handleSetPagination}
            maxPagination={maxPagination}
            type={type}
            />
        </Fragment>
    );
}

export default CardList;