import React,{useEffect, useState} from "react";
import Input from "../Input/input";

const Password = ({handlesetIsPasswordValid, title, id, type, size}) => {

    const [passwordValue,setPasswordValue] = useState(null);

    const handleSetPasswordValue = (e) => {
        setPasswordValue(e)
    }

    const conditionTab = [{
        label : "1 maj",
        isCondionValid :/(?=.*[A-Z])/.test(passwordValue)
    },
    {
        label : "1 caractère spécial",
        isCondionValid :/(?=.*[!@#$%^&*()])/.test(passwordValue)
    },
    {
        label : "10 valeurs",
        isCondionValid :/.{10}/.test(passwordValue)
    },
    {
        label : "1 numéro",
        isCondionValid :/(?=.*[0-9])/.test(passwordValue)
    }]

    const conditionList = conditionTab.map((condition,index) => {
        return(
            <li key={index} className="flex">
                {condition.isCondionValid ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                } 
                {condition.label}
            </li>
        );
    })

    useEffect(()=>{
        if( conditionTab[0].isCondionValid &&
            conditionTab[1].isCondionValid &&
            conditionTab[2].isCondionValid &&
            conditionTab[3].isCondionValid
        ) {
            handlesetIsPasswordValid(true) 
        } else {
            handlesetIsPasswordValid(false) 
        }
    },[passwordValue])


    return(
              <>
               <Input
                    title={title}
                    handleOnChange={handleSetPasswordValue}
                    id={id}
                    type={type}
                    size={size}
               />
                <ul>
                    {conditionList}
                </ul>
              </>
            )
}

export default Password;