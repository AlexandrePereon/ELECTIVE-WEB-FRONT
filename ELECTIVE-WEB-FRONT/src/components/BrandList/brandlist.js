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

const BrandList = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">
        Top Channels
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {BrandListData.map((brand, index) =>(
            <BrandCard 
                logo={brand.logo}
                name={brand.name}
                visitors={brand.visitors}
                revenues={brand.revenues}
                sales={brand.sales}
                conversion={brand.conversion}
                key={index}
            />
        ))}
          
      </div>
    </div>
  );
};

export default BrandList;
