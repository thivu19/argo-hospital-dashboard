import React from "react";

import { Table } from './Table';

export default {
    title: 'Data Display/Table ',
    component: Table,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' }
    },
    parameters: {
        design: {
          type: 'figma',
          url: 'https://www.figma.com/file/J6poyIak1EygqUcGFQNCuY/UTD-BHCC-Design-Library?node-id=1030%3A12105&t=Sdmd46PppyP0YkoH-1'
        }
      }
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

export const Filled = Template.bind({});
Filled.args = {
    rows: [
        ['Williams, Steven', '123452', 'Dr. Jones', 'Medicaid',],
        ['Patterson, Taylor', '234111', 'Dr. Daugherty', 'Cigna',],
        ['Louis, Blake', '331029', 'Dr. Smiley', 'Cigna',],
        ['Ung, Tang', '987326', 'Dr. Smith', 'Anthem',],
    ],
    headers: ['Patient Name', 'Chart #', 'Provider', 'Insurance'],
};

export const SmallPadded = Template.bind({});
SmallPadded.args = {
    rows: [
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
        ['Data text / #', 'Data text / #', 'Data text / #', 'Data text / #', 'Data text / #',],
    ],
    headers: ['Header', 'Header', 'Header', 'Header', 'Header'],
    cellPadding: 'small',
};