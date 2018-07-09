import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import 'bootstrap/dist/css/bootstrap.min.css'	//引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Button } from 'antd';					//引入antd
import 'antd/dist/antd.css';					//引入antd样式
import ReactDOM from 'react-dom';				//引入react-dom


class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          content
        </p>
				<button type="button" className="btn btn-primary">
					Single toggle
				</button>
				<Button type="primary">Button</Button>
      </div>
    );
    
  }
  
}


export default App;
