import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import '../node_modules/blurb-buildkit/assets/css/main-drupal.css';
import Modernizr from '../node_modules/blurb-buildkit/assets/js/vendor/modernizr/modernizr-custom.min.js';
import Buildkit from '../node_modules/blurb-buildkit/assets/js/main-eng.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
