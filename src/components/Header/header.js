import React, { Fragment, useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import TitleFade from "../TitleFade/titleFade";
import HeaderShoppingCart from "./headerShoppingCart";
import HeaderProfile from "./headerProfile";
import HeaderDelivery from "./headerDelivery";


const Header = ({role}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSetIsSelected = () => {
    setIsSelected(!isSelected)
  }

  const logout = () =>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfos');
    window.location.href = '/login';
  }

  const menuTab = ["Mon compte","Les restaurants","Autres"]

  const menu = menuTab.map((menu,index)=>{
    return (
      <li className={`relative max-w-fit pr-3 md:pr-0 py-1 ${isSelected && "absolute h-1 bottom-0 left-0  hover:w-full transition-all duration-300"}`} key={index}><a href="#">{menu}</a></li>
  )
  })
  
  
    return (
      <header className="bg-light-grey relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
          <TitleFade title="CESI EATS"/>
        </div>
        <div className="flex items-center gap-3">
          <div className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 z-50 ${isSelected && "left-[0%] bg-white"}`} >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                {menu}
             </ul>
          </div>

          <div className="flex items-center gap-2">
          { role !== "user" ?<HeaderDelivery role={role} NumberValue={2}/> : <HeaderShoppingCart/>}
            {/* <HeaderShoppingCart/> */}
            {
              role ?
              <Fragment>
                  <button 
                  className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
                  onClick={()=>logout()}
                  >
                  Logout
                </button>
                <HeaderProfile isSelected={isSelected} handleSetIsSelected={handleSetIsSelected}/>
                </Fragment>
              :
                <a 
                  href="/login"
                  className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full "
                >
                  Login
                </a>
            }
          </div>
        </div>
      </nav>
    </header>
     );
}

export default Header;