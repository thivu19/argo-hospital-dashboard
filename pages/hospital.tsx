import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import acute from '../public/acute_data';
import childbirth from '../public/childbirth_data';
import styles from '../styles/Hospital.module.css';
import { NextPageWithLayout } from './page';

const acuteValues: number[] = acute.map((object) => object.Value);
const childbirthValues: number[] = childbirth.map((object) => object.Value);

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

const lengthOfStay: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Average Length of Stay',
  },
  subtitle: {
    text: 'Source: data.world',
  },
  xAxis: {
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
      type: 'column',
      color: '#7db249',
      data: acuteValues,
    },
    {
      name: 'Child Birth',
      type: 'column',
      color: '#faaa3a',
      data: childbirthValues,
    },
  ],
};

const Hospital: NextPageWithLayout = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>Hospital KPI Dashboard al;ksdjf;alskjf;alskjfal;kjf</h1>
      <div className={styles.display}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          {...props}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={lengthOfStay}
          ref={chartComponentRef}
          {...props}
        />
      </div>
    </section>
  );
};

export default Hospital;

Hospital.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
