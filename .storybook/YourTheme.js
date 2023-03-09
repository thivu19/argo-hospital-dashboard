// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from '../public/ArgoLogo.png';

export default create({
  base: 'light',

  colorPrimary: '#a04031',
  colorSecondary: 'SlateGray',

  // UI
  appBg: 'whiteSmoke',
  appContentBg: 'whiteSmoke',
  appBorderColor: 'whiteSmoke',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'whiteSmoke',
  barSelectedColor: 'black',
  barBg: '#a04031',

  // Form colors
  inputBg: 'whiteSmoke',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  //brandImage: 'https://place-hold.it/350x150',
  //brandImage: 'https://localhost/desktop/ArgoLogo.png',
  brandImage: logo,
  brandTarget: '_self',
});
