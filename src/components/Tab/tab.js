import React,{useState} from "react";

const Tab = () => {
    const [activeStep, setActiveStep]= useState(null)
    const tabData= ['Tab 1','Tab 2','Tab 3']

    const handleSetStep = (index) =>{
        setActiveStep(index)
    }
    
    const tabList = tabData.map((tab, index)=> {

    return(<button role="tab" className={`tab ${activeStep === index && 'bg-medium-green text-black'}`} onClick={()=>{handleSetStep(index)}} key={index}>{tab}</button>)
})
    return(
        <div role="tablist" className="tabs tabs-boxed w-60 m-auto">
          {tabList}
        </div>
    )
}

export default Tab;