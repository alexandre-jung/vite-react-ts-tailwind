import alias from '../config/alias';
import svgr from '../config/svgr';

module.exports = {
  async viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, svgr()];
    config.resolve = { alias };
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
};
