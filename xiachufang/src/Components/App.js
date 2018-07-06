import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import 'bootstrap/dist/css/bootstrap.min.css'	//引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Button } from 'antd';					//引入antd
import 'antd/dist/antd.css';					//引入antd样式
import Detail from './detail';
// import React from 'react';						//引入react
import ReactDOM from 'react-dom';				//引入react-dom
// import {Route,Link,NavLink,Switch}				//需要什么引什么

class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="App">
          <Detail/>
      </div>
    );
    
  }
  
}


export default App;
