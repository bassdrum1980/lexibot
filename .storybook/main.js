/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const path = require('path');
const customWebpackConfig = require('../webpack.config.js');

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...customWebpackConfig.module.rules],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...customWebpackConfig.resolve.alias,
        },
      },
    };
  },
};
export default config;
