import options from '@/components/HighCharts/barChart';
import lengthOfStay from '@/components/HighCharts/columnChart';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
import Header from '../components/Header/Header';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Hospital.module.css';
import { NextPageWithLayout } from './page';

const Hospital: NextPageWithLayout = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="title">Hospital KPI Dashboard</h1>
      <div className={styles.display}>
        <HighchartsReact
          className="stackedbar"
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
    <section>
      <div>
        <Header>BHCareChain</Header>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
      </div>

      <div>
        <PrimaryLayout>
          <SidebarLayout />
          {page}
        </PrimaryLayout>
      </div>
    </section>
  );
};
