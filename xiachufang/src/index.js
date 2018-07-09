import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Components/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
