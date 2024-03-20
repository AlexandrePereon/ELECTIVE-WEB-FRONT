import React from "react";

const DiffText = () => {

    return (
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <div className="bg-green-500 text-primary-content text-9xl font-black grid place-content-center">Uber</div>
            </div>
            <div className="diff-item-2">
                <div className="bg-base-200 text-9xl font-black grid place-content-center">Uber</div>
            </div>
            <div className="diff-resizer"></div>
        </div>
    );
}

export default DiffText;