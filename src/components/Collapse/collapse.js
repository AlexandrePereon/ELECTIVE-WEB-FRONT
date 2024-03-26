import React from "react";
import BrandCard from "../BrandCard/brandCard";

const BrandListData = [
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Google',
      visitors: 3.5,
      revenues: '5,768',
      sales: 590,
      conversion: 4.8,
    },
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Twitter',
      visitors: 2.2,
      revenues: '4,635',
      sales: 467,
      conversion: 4.3,
    },
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Github',
      visitors: 2.1,
      revenues: '4,290',
      sales: 420,
      conversion: 3.7,
    },
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Vimeo',
      visitors: 1.5,
      revenues: '3,580',
      sales: 389,
      conversion: 2.5,
    },
    {
      logo: 'https://react-demo.tailadmin.com/assets/brand-01-10b0313f.svg',
      name: 'Facebook',
      visitors: 3.5,
      revenues: '6,768',
      sales: 390,
      conversion: 4.2,
    },
  ];

const Collapse = ({title, children}) => {
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
                visitors={brand.visitors}
                revenues={brand.revenues}
                sales={brand.sales}
                conversion={brand.conversion}
                key={index}
            >
                {children}
            </BrandCard>
        ))}
            </div>
        </div>
    );
}

export default Collapse;