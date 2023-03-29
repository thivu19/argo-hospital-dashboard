import React from "react";

import Snackbar from "../Snackbar";

export default {
    title: 'Feedback/Snackbar',
    component: Snackbar,
};

const Template = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = { msg: 'This is a general snackbar', button: undefined };

export const WithButton = Template.bind({});
WithButton.args = { msg: 'This is a general snackbar', button: "View" };

export const WithClose = Template.bind({});
WithClose.args = { msg: 'This is a general snackbar', button: undefined, closeicon: 'Vector.png' };

export const WithButtonAndClose = Template.bind({});
WithButtonAndClose.args = { msg: 'This is a general snackbar', button:  "View", closeicon: 'Vector.png' };

