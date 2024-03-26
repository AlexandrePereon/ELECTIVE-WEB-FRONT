import React from "react";

const Breadcrumb = () => {
    const splittedUrl = window.location.href.split("/");
    splittedUrl.splice(0, 3);

    const getHrefOfThePart = (index) => {
        return(
            splittedUrl.slice(0,index+1).join("/")
        );    
    } 

    const partUrlList = splittedUrl.map((part,index) => {
        if(index == splittedUrl.length-1){
            return(
                <li key={index}> <p>{part} </p></li>
            );
        } else {
            return(
                <li key={index}> <a href={"/" + getHrefOfThePart(index)}>{part} </a></li>
            );
        }
    })

    return ( 
        <div className="text-sm breadcrumbs">
            <ul>
                {partUrlList}
            </ul>
        </div>
    );
}

export default Breadcrumb;