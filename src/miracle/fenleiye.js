import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'						//引入jquery
import "../macss/fly.css"
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Head from './Head';


class Fenlei extends Component{
	constructor(props){
		super(props)
		this.state={
			arr:[],
			arr1:[],
			arr2:[],
			arr3:[]
		}
	}
	render(){
		return(
			<div>
			<Head/>
				<div className="fenlei-wrap">
					<h1>分类浏览</h1>
					<div className="fenlei-con">
					<div>
						<h3 className="dalei">热门品类</h3>
								<div className="xiaolei-wrap">
									{
									this.state.arr.map(function(items,i){
										return(
											<div className="xiaolei" key={i}>
												<h4>{items.tit1}</h4>
												<ul>
												{
													items.list2.map(function(item,i){
														return(
															<Link to={{pathname:'/liebiaoye',query:{id:item}}} key={i}><li>{item}</li></Link>
														)
													})
												}	
												</ul>
											</div>
										)	
									})
									}
							</div>
						<h3 className="dalei">烘焙甜品饮料</h3>
								<div className="xiaolei-wrap">
									{
									this.state.arr1.map(function(items,i){
										return(
											<div className="xiaolei" key={i}>
												<h4>{items.tit1}</h4>
												<ul>
												{
													items.list2.map(function(item,i){
														return(
															<Link to={{pathname:'/liebiaoye',query:{id:item}}} key={i}><li>{item}</li></Link>
														)
													})
												}	
												</ul>
											</div>
										)	
									})
									}
							</div>
						<h3 className="dalei">肉类</h3>
								<div className="xiaolei-wrap">
									{
									this.state.arr2.map(function(items,i){
										return(
											<div className="xiaolei" key={i}>
												<h4>{items.tit1}</h4>
												<ul>
												{
													items.list2.map(function(item,i){
														return(
															<Link to={{pathname:'/liebiaoye',query:{id:item}}} key={i}><li>{item}</li></Link>
														)
													})
												}	
												</ul>
											</div>
										)	
									})
									}
							</div>
						<h3 className="dalei">蔬菜水果</h3>
								<div className="xiaolei-wrap">
									{
									this.state.arr3.map(function(items,i){
										return(
											<div className="xiaolei" key={i}>
												<h4>{items.tit1}</h4>
												<ul>
												{
													items.list2.map(function(item,i){
														return(
															<Link to={{pathname:'/liebiaoye',query:{id:item}}} key={i}><li>{item}</li></Link>
														)
													})
												}	
												</ul>
											</div>
										)	
									})
									}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://10.8.161.38:8000/showList",
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({arr:data[0].list1})
				_this.setState({arr1:data[1].list1})
				_this.setState({arr2:data[2].list1})
				_this.setState({arr3:data[3].list1})
//				console.log(this.state.arr)

				
			}
		});
	}
}

export default Fenlei;
