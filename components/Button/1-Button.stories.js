import React from 'react';

import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import MatButton from '@material-ui/core/Button';

const StyledButton = styled(MatButton)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

export default {
  title: 'Inputs/Button',
};

export const Default = () => (
  <Button onClick={action('Default button clicked')} variant="contained">
    Default
  </Button>
);

export const Primary = () => (
  <Button
    color="primary"
    onClick={action('Primary button clicked')}
    variant="contained"
  >
    Primary
  </Button>
);

export const Secondary = () => (
  <Button
    color="secondary"
    onClick={action('Secondary button clicked')}
    variant="contained"
  >
    Secondary
  </Button>
);

export const Styled = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);
