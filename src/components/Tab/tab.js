import React from "react";

const Tab = ({steps, partsName, handleOnSwitchSteps}) => {

    const tabList = partsName.map((tab, index)=> {
    return(<button type="button" className={`content-center p-3 tab w-max ${steps === index && 'bg-medium-green text-black'}`} onClick={()=>{handleOnSwitchSteps(index)}} key={index}>{tab}</button>)
})
    return(
        <div role="tablist" className="tabs tabs-boxed w-fit m-auto mt-2.5">
          {tabList}
        </div>
    )
}

export default Tab;