import options from '@/components/HighCharts/barChart';
import lengthOfStay from '@/components/HighCharts/containerChart';
import mortalityRate from '@/components/HighCharts/lineChart';
import cost from '@/components/HighCharts/radiusPieChart';
import { AppBar, Box, Typography } from '@mui/material';
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
    <Box className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Typography className={styles.header}>Hospital KPI Dashboard</Typography>
      <Box className={styles.display}>
        <Box className={styles.chart}>
          <HighchartsReact
            className="stackedbar"
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
          />
        </Box>
        <Box className={styles.chart}>
          <HighchartsReact
            highcharts={Highcharts}
            options={lengthOfStay}
            ref={chartComponentRef}
            {...props}
          />
        </Box>
        <Box className={styles.chart}>
          <HighchartsReact
            className="radiusPieChart"
            highcharts={Highcharts}
            options={cost}
            ref={chartComponentRef}
            {...props}
          />
        </Box>
        <Box className={styles.chart}>
          <HighchartsReact
            className="radiusPieChart"
            highcharts={Highcharts}
            options={mortalityRate}
            ref={chartComponentRef}
            {...props}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hospital;

Hospital.getLayout = (page) => {
  return (
    <Box>
      <Box>
        <AppBar>
          <Typography>
            <Header>BHCareChain</Header>
          </Typography>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
      </Box>

      <Box>
        <PrimaryLayout>
          <SidebarLayout />
          {page}
        </PrimaryLayout>
      </Box>
    </Box>
  );
};
