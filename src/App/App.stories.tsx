import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppComponent from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Application/App',
  component: AppComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppComponent> = () => <AppComponent />;

export const App = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
App.args = {};
