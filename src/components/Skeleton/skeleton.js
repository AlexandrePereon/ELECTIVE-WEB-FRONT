import React from "react";

const Skeleton = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="skeleton h-40"></figure>
        <div className="skeleton card-body">
            <h2 className="skeleton card-title"></h2>
            <p className="skeleton"></p>
            <div className="card-actions justify-end">
                <button className="skeleton"></button>
            </div>
        </div>
    </div>
    );
}

export default Skeleton;