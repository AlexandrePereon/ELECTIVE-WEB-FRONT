import React from "react";

const SearchBar = () => {
    return (
        <div className="flex-none gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
            </div>
        </div>
     );
}

export default SearchBar;