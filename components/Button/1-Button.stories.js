import { action } from '@storybook/addon-actions';
import React from 'react';
//import { Button } from "@storybook/react/demo";

import Button from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const button1 = () => (
  <Button onClick={action('clicked')}>Test Button</Button>
);
