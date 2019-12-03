const alias = [
  'object-assign',
  'whatwg-fetch',
  '@babel/polyfill',
  '@buffetjs/styles',
  'classnames',
  'history',
  'hoist-non-react-statics',
  'immutable',
  'invariant',
  'moment',
  'react',
  'react-copy-to-clipboard',
  'react-dnd',
  'react-dnd-html5-backend',
  'react-dom',
  'react-helmet',
  'react-loadable',
  'react-redux',
  'react-router',
  'react-router-dom',
  'react-transition-group',
  'reactstrap',
  'redux',
  'redux-immutable',
  'remove-markdown',
  'reselect',
  'styled-components',
  'yup',
];

module.exports = alias.reduce((acc, curr) => {
  acc[curr] = require.resolve(curr);

  return acc;
}, {});
