import React from "react";

const Pagination = ({pagination, handleSetPagination, maxPagination, type}) => {
    if(maxPagination === null) {
        return(null);
    } else {
        return(
            <div className="w-fit m-auto pt-6">
                <div className="join">
                    <button className="join-item btn" onClick={() => { handleSetPagination(pagination - 1, type) }}>«</button>
                    <input className=" join-item text-center select-none bg-black text-light-gray" disabled value={pagination + '/' + maxPagination} max={maxPagination} />
                    <button className="join-item btn" onClick={() => { handleSetPagination(pagination + 1, type) }}>»</button>
                </div>
            </div>
        )
    }
    
}

export default Pagination;