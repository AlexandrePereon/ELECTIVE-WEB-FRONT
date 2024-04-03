import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import useSetOptionGraph from '../../hooks/useSetOptionGraph';

const Graph = ({dailySummary}) => {
  const [xDate, setXDate] = useState([]);
  const [yTotalPrice, setYTotalPrice] = useState([]);
  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };

  
  useEffect(() => {
    setXDate([])
    setYTotalPrice([])
    dailySummary && dailySummary.map((item) => {
      setXDate((prevXDate) => [...prevXDate, new Date(item._id).toLocaleDateString('fr-FR', optionsDate)]);
      setYTotalPrice((prevYTotalPrice) => [...prevYTotalPrice, item.dailyTotalPrice]);
    });
  }, [dailySummary]);

  const [state, setState] = useState({
    series: [
      {
        name: 'Product One',
        data : yTotalPrice
      }
    ],
  });

useEffect(()=>{
  handleReset(yTotalPrice)
},[xDate, yTotalPrice])
  const handleReset = (newData) => {
    setState(
      {
        series: [
          {
            name: 'Product One',
            data : newData
          }
        ],
      }
    );
  };

  const {optionsGraph} = useSetOptionGraph(yTotalPrice, xDate)
  
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">{xDate[0]} - aujourd'hui</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={optionsGraph}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
