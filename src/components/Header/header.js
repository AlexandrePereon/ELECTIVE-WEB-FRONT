import React, { Fragment, useState } from "react";
import HeaderProfile from "./headerProfile";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ConnexionButton from "../ConnexionButton/connexionButton";
import logo from "../../assets/images/logoCesiEats.png"
import useLogOut from "../../hooks/useLogOut";
import HeaderNotification from "./headerNotification";

const Header = ({role}) => {
  const [isSelected, setIsSelected] = useState(false);
  const {logout} = useLogOut();
  const navigate = useNavigate();

  const handleSetIsSelected = () => {
    setIsSelected(!isSelected)
  }

  const login = () =>{
    navigate('/login');
  }

  const menuTab = [
    {
      title : "Mon compte",
      link : "/mon-compte"
    },
    {
      title : "Les restaurants",
      link : "/restaurants"
    }]

  const menu = menuTab.map((menu,index)=>{
    return (
      <li className={`relative max-w-fit pr-3 md:pr-0 py-1 ${isSelected && "absolute h-1 bottom-0 left-0  hover:w-full transition-all duration-300"}`} key={index}>
        <Link to={menu.link}>
          {menu.title}
        </Link>
      </li>
  )
  })
  
  
    return (
      <header className="bg-light-grey relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">

        <div className="w-[130px] md:w-[200px] flex items-center">
          <Link to={role?`/${role}-accueil`:'/'}>
              <img src={logo} className="w-20"/>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 z-50 ${isSelected && "left-[0%] bg-white"}`} >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {menu}
             </ul>
          </div>

          <div className="flex items-center gap-2">
          { role && <HeaderNotification role={role}/>}
            {
              role ?
              <Fragment>
                 <ConnexionButton
                    handleOnClick={logout}
                    title={"Log out"}
                 />
                <HeaderProfile isSelected={isSelected} handleSetIsSelected={handleSetIsSelected}/>
                </Fragment>
              :
              <ConnexionButton
                handleOnClick={login}
                title={"Log in"}
              />
            }
          </div>
        </div>
      </nav>
    </header>
     );
}

export default Header;