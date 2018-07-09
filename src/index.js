import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
//import Head from './miracle/Head';
import App from './App';
import Liebiaoye from './miracle/liebiaoye';
import Fenlei from './miracle/fenleiye';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
