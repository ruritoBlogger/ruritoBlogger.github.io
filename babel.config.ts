import { TransformOptions } from '@babel/core';

export const devBabelConfig: TransformOptions = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'current' }, runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
};
