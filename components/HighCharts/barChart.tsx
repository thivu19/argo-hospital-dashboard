import * as Highcharts from 'highcharts';

const options: Highcharts.Options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Patient Wait Time',
  },
  xAxis: {
    categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Time (hour)',
    },
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
      name: 'Cristiano Ronaldo',
      type: 'bar',
      data: [4, 4, 6, 15, 12],
    },
    {
      name: 'Lionel Messi',
      type: 'bar',
      data: [5, 3, 12, 6, 11],
    },
    {
      name: 'Robert Lewandowski',
      type: 'bar',
      data: [5, 15, 8, 5, 8],
    },
  ],
};

export default options;
