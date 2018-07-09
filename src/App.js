import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Redirect,Switch,Link} from 'react-router-dom'
import Head from './miracle/Head';
import Liebiaoye from './miracle/liebiaoye';
import Fenlei from './miracle/fenleiye';

class App extends Component {
  render() {
    return (
      <div className="App" >
      	<Router>
      		<div>
      				<Switch>
      					
	      				<Route path="/fenleiye"  component={Fenlei}></Route>
	      				<Route path="/liebiaoye" component={Liebiaoye}></Route>
	      				
      				</Switch>
      		</div>
      	</Router>
      </div>
    );
  }
}

export default App