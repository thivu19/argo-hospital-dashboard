import options from '@/components/HighCharts/barChart';
import lengthOfStay from '@/components/HighCharts/containerChart';
import mortalityRate from '@/components/HighCharts/lineChart';
import cost from '@/components/HighCharts/radiusPieChart';
import Button from '@material-ui/core/Button';
import { Box, Typography } from '@mui/material';
import { action } from '@storybook/addon-actions';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';
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
        <Box>
          <Button
            color="primary"
            onClick={action('Secondary button clicked')}
            variant="contained"
          >
            Secondary
          </Button>
        </Box>
      </Box>
    </Box>
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
