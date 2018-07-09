import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import 'bootstrap/dist/css/bootstrap.min.css'	//引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Button } from 'antd';					//引入antd
import 'antd/dist/antd.css';					//引入antd样式
import Detail from './detail';
import Footer from './footer'
import ReactDOM from 'react-dom';				//引入react-dom
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';				//需要什么引什么

class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="App">
          <Router>
              <Route path="/detail/:id" component={Detail}/>
          </Router>
          <Footer/>
      </div>
    );
    
  }
  
}


export default App;
