import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button_MUI, { ButtonProps } from './Button_MUI';
import { mockBaseTemplateProps } from './Button_MUI.mocks';

export default {
  title: 'Inputs/Button',
  component: Button_MUI,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/J6poyIak1EygqUcGFQNCuY/UTD-BHCC-Design-Library?node-id=935%3A2224&t=MdYOKVzAq88FRHW4-1'
    }
  }
} as ComponentMeta<typeof Button_MUI>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button_MUI> = (args) => (
  <Button_MUI {...args} />
);

export const Test_Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Test_Button.args = {
  ...mockBaseTemplateProps.MUI_Button,
} as ButtonProps;
