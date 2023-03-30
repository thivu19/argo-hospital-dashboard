import { Checkbox } from '@mui/material';
import React from 'react';
import { Checkboxes } from './Checkboxes';

export default {
    title: 'Inputs/Checkboxes',
    component: Checkboxes,
    argTypes: {},
    parameters: {
        design: {
          type: 'figma',
          url: 'https://www.figma.com/file/J6poyIak1EygqUcGFQNCuY/UTD-BHCC-Design-Library?node-id=957%3A1634&t=Sdmd46PppyP0YkoH-1'
        }
      }
};

export const DefaultChecked = () => (
    <div>
      <Checkbox 
      defaultChecked 
      sx={{
        color: '#000000',
        '&.Mui-checked': {
            color: '#3050F8',
        },
        }}
        />
    </div>
);

export const DefaultUnChecked = () => (
    <div>
      <Checkbox />
    </div>
);

export const DisabledChecked = () => (
    <div>
      <Checkbox 
      disabled checked 
      sx={{
        color: '#000000',
        '&.Mui-checked': {
            color: '#909090',
        },
        }}
        />
    </div>
);

export const DisabledUnChecked = () => (
    <div>
      <Checkbox disabled />
    </div>
);

export const ErrorChecked = () => (
    <div>
      <Checkbox 
      defaultChecked 
      sx={{
        color: '#000000',
        '&.Mui-checked': {
            color: '#C62828',
        },
        }}
        />
    </div>
);

export const ErrorUnChecked = () => (
    <div>
      <Checkbox />
    </div>
);
