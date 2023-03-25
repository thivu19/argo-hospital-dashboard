import { ComponentMeta, ComponentStory } from '@storybook/react';
import AlertLight, { IAlert } from './AlertLight';
import { mockBaseTemplateProps } from './AlertLight.mocks';

export default {
  title: 'Alert/AlertLight',
  component: AlertLight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AlertLight>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertLight> = (args) => (
  <AlertLight {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IAlert;
