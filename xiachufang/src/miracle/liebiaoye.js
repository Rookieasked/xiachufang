import React, { Component } from 'react';		//引入React.Component
import  $ from  'jquery'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';					//引入antd样式
import "../macss/lby.css"
import ReactDOM from 'react-dom';               //引入react-dom
import Head from './Head';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;


class Liebiaoye extends Component {
	constructor(props){
		super(props)
		this.state={
			arr1:[],
			arr2:[],
			arr3:[1,2,3],
			strtit:""
		}
	}
	detail(a){
		window.location.href="/detail/"+a
	}
  render() {
  	var athis=this
    return (
      <div>
      <Head/>
      	<div className="lby-con">
       		 <Layout>
			    <Content style={{ padding: '',background: '#fff' }}>
			      <Breadcrumb style={{ margin: '12px 0',fontSize:"16px" }}>
			        <Link to="/head"><Breadcrumb.Item>首页</Breadcrumb.Item></Link>
			        <Breadcrumb.Item>全部分类</Breadcrumb.Item>
			        <Breadcrumb.Item>{this.state.strtit}</Breadcrumb.Item>
			      </Breadcrumb>
			      <Layout style={{ background: '#fff' }}>
			        <Sider width={155} style={{ background: '#fff' }}>
				        <div className="lby-list">
					      	<ul>
					      		<li><Icon type="arrow-left" />全部分类</li>
					      		<li>本周最受欢迎</li>
					      		<li>新秀菜谱</li>
					      		<li>往期头条</li>
					      		<li>厨房101</li>
					      		<li>月度最佳</li>
					      		<li>最新创建</li>
					      		<li>流行菜单</li>
					      	</ul>
					    </div>
			          <Menu
			            mode="inline"
			            defaultSelectedKeys={['1']}
			            defaultOpenKeys={['']}
			            style={{ height: '100%',borderRight: '0' }}
			          >
			            <SubMenu key="sub1" title={<span><Icon type="arrow-right" />菜式</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="1">option1</Menu.Item>
			              <Menu.Item key="2">option2</Menu.Item>
			              <Menu.Item key="3">option3</Menu.Item>
			              <Menu.Item key="4">option4</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub2" title={<span><Icon type="arrow-right" />特殊场合</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="5">option5</Menu.Item>
			              <Menu.Item key="6">option6</Menu.Item>
			              <Menu.Item key="7">option7</Menu.Item>
			              <Menu.Item key="8">option8</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub3" title={<span><Icon type="arrow-right" />特色食品</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="9">option9</Menu.Item>
			              <Menu.Item key="10">option10</Menu.Item>
			              <Menu.Item key="11">option11</Menu.Item>
			              <Menu.Item key="12">option12</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub4" title={<span><Icon type="arrow-right" />人群</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="13">option9</Menu.Item>
			              <Menu.Item key="14">option10</Menu.Item>
			              <Menu.Item key="15">option11</Menu.Item>
			              <Menu.Item key="16">option12</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub5" title={<span><Icon type="arrow-right" />功效</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="17">option9</Menu.Item>
			              <Menu.Item key="18">option10</Menu.Item>
			              <Menu.Item key="19">option11</Menu.Item>
			              <Menu.Item key="20">option12</Menu.Item>
			            </SubMenu>
			            <SubMenu key="sub6" title={<span><Icon type="arrow-right" />视频专题</span>} style={{ borderBottom: '1px solid #cecece' }}>
			              <Menu.Item key="21">味蕾工坊</Menu.Item>			              
			            </SubMenu>
			          </Menu>
			        </Sider>
			        <Content style={{ padding: '0 0 0 24px', minHeight: 280 ,width:495}}>
			        	<h1 className="lby-leiname">{this.state.strtit}</h1>
			        	<div className="lby-bqian">
			        		<span>最近流行</span>&nbsp;|&nbsp;
			        		<span>最受欢迎</span>&nbsp;|&nbsp;
			        		<span>评分</span>
			        	</div>
			        	<div>
			        	{
			        		this.state.arr2.map(function(item,i){
			        			return(
			        				<figure key={i} onClick={athis.detail.bind(athis,item._id)}>
						  <img src={item.imgSrc} alt=""/>
						  <figcaption className="mid-fig">
						  	<p className="lby-cm">
						  	
						  		<span>{item.tit}</span>
						  		<span>步骤图</span>
						  	</p>
						  	<p className="lby-cl">{item.foods.join("、")}</p>
						  	<p className="lby-pf">评分<span>{item.score}</span></p>
						  	<p className="lby-zz">{item.user}</p>
						  </figcaption>
						</figure>
			        			)
			        		})
			        	
						}
			        	{
			        		this.state.arr2.map(function(item,i){
			        			return(
			        				<figure key={i}>
						  <img src={item.imgSrc} alt=""/>
						  <figcaption className="mid-fig">
						  	<p className="lby-cm">
						  		<span>{item.tit}</span>
						  		<span>步骤图</span>
						  	</p>
						  	<p className="lby-cl">{item.foods.join("、")}</p>
						  	<p className="lby-pf">评分<span>{item.score}</span></p>
						  	<p className="lby-zz">{item.user}</p>
						  </figcaption>
						</figure>
			        			)
			        		})
			        	
						}
						</div>
			        </Content>
			        
			         <div className="rt-list">
			         	<div className="rt-listtit">最新发布菜谱</div>
			         	<div>
			         	{
			         		this.state.arr2.map(function(item,i){
			         			return(
			         				<figure className="lby-rtpic" key={i}  onClick={athis.detail.bind(athis,item._id)}>
									  <img src={item.imgSrc} alt=""/>
									  <figcaption className="rt-fig">
									  	<p className="lbyr-cm">
									  		<span>{item.tit}</span>
									  		<span>步骤图</span>
									  	</p>
									  	<p className="lbyr-cl">{item.foods.join("、")}</p>
									  	<p className="lbyr-zz">{item.user}</p>
									  </figcaption>
									</figure>
			         			)
			         		})
			         	
						}
			         	</div>
						<div className="rt-listtitx">
							<div>{this.state.strtit}的相关菜单</div><span>全部</span>
						</div>
						<div>
						{
							this.state.arr3.map(function(item,i){
								return(
									<div className="lby-rtxpic" key={i}>
							  <img src={require('../maimg/tudou.jpg')} alt=""/>
							  <div className="rtx-fig">家常菜</div>
							  	
							  
							</div>
								)
							})	
			         	}
						
						</div>
						<div className="rtx-ewm"><img src={require('../maimg/erweima.png')} title="扫一扫下载下厨房App" alt=""/></div>
						
			         </div>

			      </Layout>
			    </Content> 
			  </Layout>
			</div>
      </div>
    );
    
  	}
  	componentWillMount(){
		var _this=this;
		_this.setState({strtit:_this.props.match.params.id})
	}
  	

  	
  	componentDidMount(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://10.8.161.38:8000/showList",
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({arr1:data})
			}
		});
		$.ajax({
			type:"get",
			url:"http://10.8.161.38:8000/showDetail",
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({arr2:data})
			}
		});
	}
  
}



export default Liebiaoye;
