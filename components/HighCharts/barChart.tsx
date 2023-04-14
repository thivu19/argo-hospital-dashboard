import * as Highcharts from 'highcharts';

// Data Cited
// Cardiology: https://www.healthgrades.com/pro/cardiology-appointment-wait-times-across-15-metro-markets?tpc=latest-news#:~:text=The%20average%20wait%20time%20to,%2C%20Texas%20(13%20days).
// Neruology: https://www.sciencedaily.com/releases/2013/04/130417164444.htm
// Oncology: https://www.cancerresearchuk.org/about-cancer/worried-about-cancer/cancer-waiting-times
// Pediatrics: https://pubmed.ncbi.nlm.nih.gov/3978978/
// Surgery: https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-07976-6#:~:text=The%20mean%20waiting%20time%20for,73.1)%20(Table%201).

const options: Highcharts.Options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Patient Wait Time',
  },
  xAxis: {
    categories: ['Cardiology', 'Neruology', 'Oncology', 'Pediatrics', 'Surgery'],
    
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Day',
    },
    plotLines: [{
      color: 'red',
      dashStyle: 'Dash',
      value: (49+54+62+1+65)/5,
      width: 2
    }]
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: '2022',
      type: 'bar',
      data: [49-32, 54-35, 62-31, 1-1, 65-60],
    },
    {
      name: '2017',
      type: 'bar',
      data: [32, 35, 31, 1, 60],
    },
  ],
};

export default options;
