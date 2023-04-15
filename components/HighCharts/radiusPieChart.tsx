import * as Highcharts from 'highcharts';

const cost: Highcharts.Options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Spending Cost',
    },
    tooltip: {
        headerFormat: '',
    },
    series: [{
        innerSize: '20%',
        name: 'spending cost',
        type: 'pie',
        data: [{
            name: 'Spain',
            y: 505992,
            z: 92
        }, {
            name: 'France',
            y: 551695,
            z: 119
        }, {
            name: 'Poland',
            y: 312679,
            z: 121
        }, {
            name: 'Czech Republic',
            y: 78865,
            z: 136
        },],
    },
    ],
};

export default cost;