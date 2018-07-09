import React, { Component } from 'react'; //引入React.Component
import $ from 'jquery' //引入jquery
import '../style/index/backtop.css'

class BackTop extends Component {
	constructor(props) {
		super(props)
	}
	backtop(){
		$("html,body").animate({scrollTop:0}, 500);
	}
	render() {
		return(<div className="backtop" onClick={this.backtop.bind(this)}>
			<img src="http://www.xiachufang.com/pic/2013/scroll_top.png"/>
		</div>);
	}

}

export default BackTop;