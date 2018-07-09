import React, { Component } from 'react'; //引入React.Component
import $ from 'jquery' //引入jquery
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap样式
//import 'bootstrap/dist/js/bootstrap.min.js'	//引入bootstrapjs会报错
import { Carousel } from 'antd'; //引入antd
import 'antd/dist/antd.css'; //引入antd样式
import '../style/base.css'; //引入公共样式
import '../style/index/index.css'; //引入index样式


class IndexInside extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		var _this = this
		$.ajax({
			type: "get",
			//			url: "http//www.xiachufang.com/index",
			url: "http://10.8.161.38:8000/showDetail",
			dataType: 'json',
			success: function(data) {
				_this.setState({ data: data })
			}
		});
	}
	
	bannerroute(a){
		window.location.href="/detail/"+a
	}

	render() {
		var athis=this;
		return(<div>
			<div className="IN-Inside-contit">
				最近流行
				<span>	全部</span>
			</div>
			<div>
				{
				this.state.data.slice(0,5).map(function(item,i){
					return (<div className="IN-Inside-box" key={i} onClick={athis.bannerroute.bind(athis,item._id)}>
						<div className="IN-Inside-img"><img src={item.imgSrc}/></div>
						<div className="IN-Inside-con">{item.tit}</div>
					</div>)})
				}
			</div>
      	</div>);
	}

}

export default IndexInside;