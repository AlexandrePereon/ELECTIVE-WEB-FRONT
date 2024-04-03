import AlertBannerSuccess from '../components/AlertBanner/alertBannerSuccess'
import AlertBannerError from '../components/AlertBanner/alertBannerError'

/**
 * Hook display alert.
 * 
 * @typedef useDisplayAlert
 * @kind hook
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.message - Message reçu de la requête.
 * @returns {React.JSX.Element} - Le composant d'alert correspondant.
 */
const useSetOptionGraph = (maxValue, xDate) => {
    const optionsGraph = {
        legend: {
          show: false,
          position: 'top',
          horizontalAlign: 'left',
        },
        colors: ['#3C50E0', '#80CAEE'],
        chart: {
          fontFamily: 'Satoshi, sans-serif',
          height: 335,
          type: 'area',
          dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
          },
      
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 1024,
            options: {
              chart: {
                height: 300,
              },
            },
          },
          {
            breakpoint: 1366,
            options: {
              chart: {
                height: 350,
              },
            },
          },
        ],
        stroke: {
          width: [2, 2],
          curve: 'straight',
        },
        labels: {
          show: false,
          position: "top",
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 4,
          colors: '#fff',
          strokeColors: ['#3056D3', '#80CAEE'],
          strokeWidth: 3,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          hover: {
            size: undefined,
            sizeOffset: 5,
          },
        },
        xaxis: {
          type: 'category',
          categories: xDate,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          title: {
            style: {
              fontSize: '0px',
            },
          },
          min: 0,
          max: Math.max(...maxValue),
        },
      };
    return {optionsGraph};
}

export default useSetOptionGraph;