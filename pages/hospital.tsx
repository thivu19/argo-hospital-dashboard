import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const options: Highcharts.Options = {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Patient Wait Time'
  },
  xAxis: {
    categories: ['2022', '2021', '2020', '2019', '2018', '2017', '2016']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Time (hour)'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'New Patient',
    type: 'bar',
    data: [4, 4, 4, 4, 6, 5, 6]
  }, {
    name: 'Hospital Patient',
    type: 'bar',
    data: [2, 3, 5, 3, 5, 6, 4]
  }]
};

const Hospital: NextPageWithLayout = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="title">
        Hospital KPI Dashboard
      </h1>
      <HighchartsReact className="stackedbar"
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
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
