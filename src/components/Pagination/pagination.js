import React from "react";

const Pagination = ({pagination, handleSetPagination, maxPagination, type}) => {
    return(
        <div className="join">
            <button className="join-item btn" onClick={()=>{handleSetPagination(pagination-1,type)}}>«</button>
            <input className="join-item btn" value={pagination+'/'+maxPagination} max={maxPagination}/>
            <button className="join-item btn" onClick={()=>{handleSetPagination(pagination+1,type)}}>»</button>
        </div>
    );
}

export default Pagination;