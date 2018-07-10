import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import 'bootstrap/dist/css/bootstrap.min.css'	//引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Button } from 'antd';					//引入antd
import 'antd/dist/antd.css';					//引入antd样式
import Detail from './detail';
import Footer from './footer';
import Index from './Index';
import Head from '../miracle/Head';
import Fenlei from '../miracle/fenleiye';
import Liebiaoye from '../miracle/liebiaoye';
import Login from './login';
import Reg from './register';

import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';				//需要什么引什么

class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Route path="/login" component={Login}/>
                  <Route path="/reg" component={Reg}/>
                  <Router>
                      <div>
                          <Head/>
                          <Route path="/detail/:id" component={Detail}/>
                          <Route path="/index" component={Index}/>
                          <Route path="/fenleiye"  component={Fenlei}></Route>
                          <Route path="/liebiaoye/:id" component={Liebiaoye}></Route>
                          <Footer/>
                      </div>
                  </Router>
              </div>
          </Router>
      </div>
    );
    
  }
  
}


export default App;
