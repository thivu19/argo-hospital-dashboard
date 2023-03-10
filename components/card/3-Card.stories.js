import React from 'react';
import Card from '../card';

export default {
  title: 'Surfaces/Card/ShaneCard',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const card1 = Template.bind({});
card1.args = { title: 'Hello Card' };

export const card2 = Template.bind({});
card2.args = {
  title: 'Hello Card',
  subheading: 'This is a picture.',
  image: 'logo192.png',
};

export const card3 = Template.bind({});
card3.args = {
  title: 'Hello Card',
  subheading: 'This is a card with a paragraph note.',
};
