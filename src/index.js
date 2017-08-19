import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/normalize.css/normalize.css';
import './../node_modules/basscss/css/basscss.min.css';
import './../node_modules/basscss-responsive-margin/css/responsive-margin.css';
import './../node_modules/basscss-responsive-padding/css/responsive-padding.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
