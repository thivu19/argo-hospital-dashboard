import * as Highcharts from 'highcharts';
import acute from '../../public/acute_data';
import childbirth from '../../public/childbirth_data';

const acuteValues: number[] = acute.map((object) => object.Value);
const childbirthValues: number[] = childbirth.map((object) => object.Value);

const lengthOfStay: Highcharts.Options = {
  chart: {
    type: 'container',
  },
  title: {
    text: 'Average Length of Stay',
  },
  subtitle: {
    text: 'Source: data.world',
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
      text: 'Length of Stay (days)',
    },
  },
  plotOptions: {
    series: {
      pointStart: Date.UTC(1990, 0, 1),
      pointInterval: 365 * 24 * 3600 * 1000, // One year in milliseconds

      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: 'Acute',
      type: 'area',
      color: '#7db249',
      data: acuteValues,
    },
    {
      name: 'Child Birth',
      type: 'area',
      color: '#faaa3a',
      data: childbirthValues,
    },
  ],
};

export default lengthOfStay;
