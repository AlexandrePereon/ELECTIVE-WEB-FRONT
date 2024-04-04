import React from 'react'
import Loader from '../Loader/loader';


const ButtonValidationForm = ({isLoading, isPasswordValid, size, title}) => {

  return (            
        <button
          type="submit"
          className={`rounded-md ${size} bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-light-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          disabled={isPasswordValid ? !isPasswordValid :  false}
        >
          {isLoading ? <Loader/> : title} 
        </button>
  )
}

export default ButtonValidationForm;