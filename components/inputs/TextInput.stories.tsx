import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput, { ITextInput } from './TextInput';
import { TextInputProps } from './TextInput.mock';


export default {
  title: 'inputs/TextInput',
  component: TextInput,
  
  argTypes: {},
} as ComponentMeta<typeof TextInput>;


const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);


export const Base = Template.bind({});


export const Placeholder = {
    args:{
        placeholder: "email@host.com",
        type: "email",
    },
};




Base.args = {
  ...TextInputProps.base,
} as ITextInput;
