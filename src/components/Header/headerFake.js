import React from "react";
import logo from "../../assets/images/logoCesiEats.png"

const HeaderFake = () => {
 
  
  
    return (
      <header className="bg-light-grey relative shadow-lg px-3 py-2">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[200px] flex items-center">
              <img src={logo} className="w-20"/>
        </div>       
      </nav>
    </header>
     );
}

export default HeaderFake;