import * as Highcharts from 'highcharts';

const mortalityRate: Highcharts.Options = {
  chart: {
    type: 'container',
  },
  title: {
    text: 'Hospital Death Rate',
  },
  subtitle: {
    text: 'Source: cdc.gov',
  },
  xAxis: {
    title: {
      text: 'Year',
    },
    type: 'datetime',
    dateTimeLabelFormats: {
      year: '%Y',
    },
    max: Date.UTC(2010, 11, 31),
  },
  yAxis: {
    min: 0,
    max: 10,
    title: {
      text: 'Rate per 100 persons hospitalized',
    },
  },
  plotOptions: {
    series: {
      pointStart: Date.UTC(2000, 0, 1),
      pointInterval: 365 * 24 * 3600 * 1000 * 5, // One year in milliseconds

      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: 'Respitaroy Failure',
      type: 'line',
      data: [25.3, 19.3, 16.5],
    },
    {
      name: 'Pneumonitis',
      type: 'line',
      data: [17.4, 15.2, 13.6],
    },
    {
      name: 'Septicemia',
      type: 'line',
      data: [13.9, 19.3, 16.3],
    },
    {
      name: 'Kidney disease',
      type: 'line',
      data: [9.9, 6.5, 3.5],
    },
    {
      name: 'Cancer',
      type: 'line',
      data: [8.1, 6.8, 4.4],
    },
    {
      name: 'Stroke',
      type: 'line',
      data: [6.4, 6.5, 4.7],
    },
    {
      name: 'Pneumonia',
      type: 'line',
      data: [4.9, 3.3, 3.3],
    },
    {
      name: 'Heart disease',
      type: 'line',
      data: [3.7, 2.8, 3.1],
    },
  ],
};

export default mortalityRate;
