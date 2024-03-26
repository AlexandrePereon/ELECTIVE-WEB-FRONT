import React from "react";
import BrandCard from "../BrandCard/brandCard";
import AddNumberButton from "../AddNumberButton/addNumberButton";

const BrandListData = [
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Article1',
      price: 2.5,
      id : '1a3'
    },
    {
        logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
        name: 'Article2',
        price: 3.5,
        id : '1b4'
    },
    {
        logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
        name: 'Article3',
        price: 4.5,
        id : '1c5'
    }
  ];

const Collapse = ({title, listArticle, handleOnChange}) => {
    return(
        <div className="collapse collapse-plus rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <input type="checkbox" /> 
            <div className="collapse-title mb-6 text-xl font-semibold text-black">
                {title}
            </div>
            <div className="collapse-content"> 
            {BrandListData.map((brand, index) =>(
            <BrandCard 
                logo={brand.logo}
                name={brand.name}
                price={brand.price}
                id={brand.id}
                key={index}
            >
                <AddNumberButton handleOnChange={handleOnChange} value={brand.id} numberOfArticle={listArticle.filter(id => id === brand.id).length}/>
            </BrandCard>
        ))}
            </div>
        </div>
    );
}

export default Collapse;