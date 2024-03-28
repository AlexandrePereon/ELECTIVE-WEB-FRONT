import React from 'react'
import Loader from '../Loader/loader';


const ButtonValidationForm = ({isLoading, cancelRedirection, isPasswordValid}) => {

  return (            
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a href={cancelRedirection} className="text-sm font-semibold leading-6 ">
          Cancel
        </a>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isPasswordValid && !isPasswordValid || isLoading}
        >
          {isLoading ? <Loader/> : 'Sauvegarder'} 
        </button>
      </div>
  )
}

export default ButtonValidationForm;