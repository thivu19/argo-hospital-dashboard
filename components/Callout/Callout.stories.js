import React from "react";

import Callout from "../Callout";

export default {
    title: 'Feedback/Callout',
    component: Callout,
};

const Template = (args) => <Callout {...args} />;

export const Default = Template.bind({});
Default.args = { color: "grey", message: "This is a default callout." };

export const Good = Template.bind({});
Good.args = { color: "green", message: "This is a good callout." };

export const Caution = Template.bind({});
Caution.args = { color: "orange", message: "This is a caution callout." };

export const Bad = Template.bind({});
Bad.args = { color: "red", message: "This is a bad callout." };