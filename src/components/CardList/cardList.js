import React from "react";
import Card from "../Card/card";
import Skeleton from "../Skeleton/skeleton";
import Pagination from "../Pagination/pagination";

const CardList = ({cardData, isLoading, pagination, handleSetPagination, maxPagination, type}) => {

    return(
        <div>
            <div className="flex">
            {isLoading ?
                <Skeleton/> :
                cardData && cardData.map((menu, index)=><Card
                title={menu.name}
                description={menu.description}
                image={menu.image}
                key={index}
                />)}
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