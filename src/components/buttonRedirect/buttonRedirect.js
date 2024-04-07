import React from 'react'
import { Link } from 'react-router-dom';


const ButtonRedirect = ({size, title, url}) => {

  return (            
    <Link to={url} target="_blank" rel="noopener noreferrer"> 
      <button className={`${size} btn btn-outline btn-success`}>{title}</button>
    </Link>
  )
}

export default ButtonRedirect;