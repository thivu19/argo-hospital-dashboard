import React from "react";

import { Table } from './Table';

export default {
    title: 'Data Display/Table ',
    component: Table,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' }
    },
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: [
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
    ],
    headers: ['Header', 'Header', 'Header', 'Header', 'Header'],
};