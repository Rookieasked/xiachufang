import React, { Component } from 'react'; //引入React,Component
import $ from 'jquery' //引入jquery
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap样式
import { Carousel } from 'antd'; //引入antd
import 'antd/dist/antd.css'; //引入antd样式
import '../style/base.css'; //引入公共样式
import '../style/index/index.css'; //引入index样式
// import './indexmockdata.js'; //引入mock
import IndexInside from './IndexInside';
import BackTop from './BackTop';


class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			summerfood: [],
			page: '',
			pages: [],
			chicken: '',
			chickens: [],
			beef: '',
			beefs: [],
			duck: '',
			ducks: [],
			Lamb: '',
			Lambs: [],
			page1: '',
			pages1: [],
			chicken1: '',
			chickens1: [],
			beef1: '',
			beefs1: [],
			duck1: '',
			ducks1: [],
			Lamb1: '',
			Lambs1: []
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
		$.ajax({
			type: "get",
			url: "http://10.8.161.38:8000/showList",
			dataType: 'json',
			success: function(data) {
				//				_this.setState({ dataList: data[2] })
				_this.setState({ page: data[2].list1[0].tit1 })
				_this.setState({ pages: data[2].list1[0].list2 })
				_this.setState({ chicken: data[2].list1[1].tit1 })
				_this.setState({ chickens: data[2].list1[1].list2 })
				_this.setState({ beef: data[2].list1[2].tit1 })
				_this.setState({ beefs: data[2].list1[2].list2 })
				_this.setState({ duck: data[2].list1[3].tit1 })
				_this.setState({ ducks: data[2].list1[3].list2 })
				_this.setState({ Lamb: data[2].list1[4].tit1 })
				_this.setState({ Lambs: data[2].list1[4].list2 })

				_this.setState({ page1: data[3].list1[0].tit1 })
				_this.setState({ pages1: data[3].list1[0].list2 })
				_this.setState({ chicken1: data[3].list1[1].tit1 })
				_this.setState({ chickens1: data[3].list1[1].list2 })
				_this.setState({ beef1: data[3].list1[2].tit1 })
				_this.setState({ beefs1: data[3].list1[2].list2 })
				_this.setState({ duck1: data[3].list1[3].tit1 })
				_this.setState({ ducks1: data[3].list1[3].list2 })
				_this.setState({ Lamb1: data[3].list1[4].tit1 })
				_this.setState({ Lambs1: data[3].list1[4].list2 })
				//				data[2].list1[0].list2.map(function(item,i){
				////					console.log(item)
				//				})
			}
		});
		var chefElement = {
			minSpeed: 5, //每次移动的距离
			stopTime: 5000, //动画停留的时间，毫秒为单位 包含移动所花费的时间
			//获取页面元素
			prev: document.getElementById('prev'),
			next: document.getElementById('next'),
			parent: document.getElementById('parent'),
			ul: document.getElementById('ul'),
			li: document.getElementById('ul').getElementsByTagName('li'),
			arc: document.getElementById("arcBox"),
			liWidth: document.getElementById('ul').getElementsByTagName('li')[0].offsetWidth,
			type: true,
			nextTimer: null,
			prevTimer: null,
			parent_n: null
		};
		//初始化小圆点/指定放图片的盒子 ul 的宽度
		var elemSpan = (function() {
			chefElement.ul.style.width = chefElement.liWidth * chefElement.li.length + 'px';
			for(var i = 0; i < chefElement.li.length; i++) {
				chefElement.li[i].index = i;
				var span = document.createElement('span');
				span.className = 'span';
				span.index = i;
				span.style.background = chefElement.bgColor1;
				span.innerHTML = i + 1;
			}
		})();
		//根据参数显示对应的图片。
		function showImg(inde) {
			var this_li = chefElement.li[0].index;
			//把第一个元素放到最后面。
			if(inde > this_li) {
				var x = inde - this_li;
				for(var y = 0; y < x; y++) {
					chefElement.ul.appendChild(chefElement.li[0]);
				}
			}
			//把最后一个元素放到第一的位置
			if(inde < this_li) {
				var x_x = this_li - inde;
				for(var g = 0; g < x_x; g++) {
					chefElement.ul.insertBefore(chefElement.li[chefElement.li.length - 1], chefElement.li[0]);
				}
			}
		}
		chefElement.prev.onclick = function() {
			if(chefElement.type) {
				clearInterval(chefElement.prevTimer);
				chefElement.ul.insertBefore(chefElement.li[chefElement.li.length - 1], chefElement.li[0]);
				chefElement.liWidth = chefElement.li[0].offsetWidth;
				chefElement.ul.style.left = '-' + chefElement.liWidth + 'px';
				chefElement.prevTimer = setInterval(pre, chefElement.animationSpeed);
				chefElement.type = false;
			}
		};
		chefElement.next.onclick = function() {
			if(chefElement.type) {
				chefElement.liWidth = 0;
				clearInterval(chefElement.nextTimer);
				chefElement.nextTimer = setInterval(nex, chefElement.animationSpeed);
				chefElement.type = false;
			}
		};
		//next动画函数
		function nex() {
			chefElement.ul.style.left = '-' + chefElement.liWidth + 'px';
			chefElement.liWidth += chefElement.minSpeed;
			if(chefElement.liWidth >= chefElement.li[0].offsetWidth) {
				clearInterval(chefElement.nextTimer);
				chefElement.ul.appendChild(chefElement.li[0]);
				chefElement.ul.style.left = 0;
				chefElement.type = true;
			}
		}
		//prev动画函数
		function pre() {
			chefElement.ul.style.left = '-' + chefElement.liWidth + 'px';
			chefElement.liWidth -= chefElement.minSpeed;
			if(chefElement.liWidth <= -1) {
				chefElement.ul.style.left = 0;
				clearInterval(chefElement.prevTimer);
				chefElement.type = true;
			}
		}

	}
	

	
	bannerroute(a){
//		this.props.history.push("/detail/"+a)
		window.location.href="/detail/"+a
	}
	register(){
//		this.props.history.push("/register")
		window.location.href="/register"
	}
	login(){
		this.props.history.push("/login")
	}
		


	render() {
		var athis = this
		return(
			<div>
			<BackTop></BackTop>
			<div className="IN-top"></div>
			<div className="IN-content">
				<div className="IN-left">
					<div className="IN-nav">
						<div className="IN-menu">
							<span className="tubiao">&#xe6b2;</span>
							<em>家常菜</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe896;</span>
							<em>快手菜</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe604;</span>
							<em>下饭菜</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe612;</span>
							<em>早餐</em>
						</div>
						<div className="IN-menu IN-meat">
							<span className="tubiao">&#xe69a;</span>
							<em>肉</em>
							<i>&gt;</i>
							<ul className="IN-list IN-listrou">
								<li>
									<div className="IN-lei">{this.state.page}</div>
									<div className="IN-leiinfo">
										{
											this.state.pages.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.chicken}</div>
									<div className="IN-leiinfo">
										{
											this.state.chickens.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.beef}</div>
									<div className="IN-leiinfo">
										{
											this.state.beefs.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.duck}</div>
									<div className="IN-leiinfo">
										{
											this.state.ducks.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li id="IN-bordernon">
									<div className="IN-lei">{this.state.Lamb}</div>
									<div className="IN-leiinfo">
										{
											this.state.Lambs.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
							</ul>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe614;</span>
							<em>鱼</em>
						</div>
						<div className="IN-menu IN-shucai">
							<span className="tubiao">&#xe635;</span>
							<em>蔬菜</em>
							<i>&gt;</i>
							<ul className="IN-list IN-listcai">
								<li>
									<div className="IN-lei">{this.state.page1}</div>
									<div className="IN-leiinfo">
										{
											this.state.pages1.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.chicken1}</div>
									<div className="IN-leiinfo">
										{
											this.state.chickens1.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.beef1}</div>
									<div className="IN-leiinfo">
										{
											this.state.beefs1.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
								<li>
									<div className="IN-lei">{this.state.duck1}</div>
									<div className="IN-leiinfo">
										{
											this.state.ducks1.slice(0,7).map(function(item,i){
											return(<span key={i}>{item}</span>)
											})
										}
										<span>更多</span>
									</div>
								</li>
							</ul>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe6cf;</span>
							<em>鸡蛋</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe7e8;</span>
							<em>汤羹</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe602;</span>
							<em>烘焙</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe61a;</span>
							<em>主食</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe603;</span>
							<em>面</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe7ff;</span>
							<em>素食</em>
						</div>
					</div>
					<div className="IN-nav">
						<div className="IN-menu">
							<span className="tubiao">&#xe819;</span>
							<em>孕妇</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe61d;</span>
							<em>产妇</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe617;</span>
							<em>婴儿</em>
						</div>
						<div className="IN-menu">
							<span className="tubiao">&#xe675;</span>
							<em>儿童</em>
						</div>
					</div>
					<div id="IN-AllKind">
						全部菜谱分类
					</div>
					<div id="IN-getAPP">
						<img src="http://ubmcmm.baidustatic.com/media/v1/0f000PLHkwYnWqa-7ncyYs.png"/>
					</div>
					
				</div>
				<div className="IN-con">
					<div className="IN-IN-banner-wrap">
						<Carousel autoplay>
						{
							this.state.data.slice(0,5).map(function(item,i){
							return (
								<div key={i} onClick={athis.bannerroute.bind(athis,item._id)}>
									<img src={item.imgSrc} title={item.tit}/>
									<div className="IN-banner-con">
										<span>{item.tit}</span>
										<em> {item.message[0].good} 人做过这道菜	by	{item.user}</em>
									</div>
								</div>
							)
							})
						}
						</Carousel>
					</div>
					<div className="IN-contit">
						新秀菜谱
						<span>	全部</span>
						<button id="prev" type="button" className="btn btn-default btn-sm">&gt;</button>
						<button id="next" type="button" className="btn btn-default btn-sm">&lt;</button>
					</div>
					<div className="IN-IN-banner-nav-wrap">
						<div id="imgBox">
					        <ul id='ul'>
					            <li className='imgBoxLi'>
					            {
					            	this.state.data.slice(0,3).map(function(item,i){
					            		return(
					            			<dl key={i} onClick={athis.bannerroute.bind(athis,item._id)}>
				            			<dt><img src={item.imgSrc} title={item.tit} /></dt>
				            			<dd>{item.tit}</dd>
				            		</dl>
					            		)
					            	})
					            }
					            </li>
					            <li className='imgBoxLi'>
					            {
					            	this.state.data.slice(4,7).map(function(item,i){
					            		return(
					            			<dl key={i} onClick={athis.bannerroute.bind(athis,item._id)}>
				            			<dt><img src={item.imgSrc}  title={item.tit}/></dt>
				            			<dd>{item.tit}</dd>
				            		</dl>
					            		)
					            	})
					            }
					            </li>
					            <li className='imgBoxLi'>
					            {
					            	this.state.data.slice(8,11).map(function(item,i){
					            		return(
					            			<dl key={i} onClick={athis.bannerroute.bind(athis,item._id)}>
				            			<dt><img src={item.imgSrc}  title={item.tit}/></dt>
				            			<dd>{item.tit}</dd>
				            		</dl>
					            		)
					            	})
					            }
					            </li>
					            
					        </ul>
					    </div>
					</div>
					<div className="IN-contit">
						最近流行
						<span>	全部</span>
					</div>
					<div className="IN-hot-wrap">
					{
						this.state.data.slice(0,12).map(function(item,i){
						return (<div key={i} className="IN-hot" onClick={athis.bannerroute.bind(athis,item._id)}>
								<div className="IN-hot-img">
									<img src={item.imgSrc} title={item.tit} alt="待加载"/>
								</div>
								<div className="IN-hot-name">
									{item.tit}
								</div>
								<div className="IN-hot-use">
									{item.user}<span><em> {item.message[0].good} </em>做过</span>
								</div>
							</div>)
						})
					}
					</div>
					<div className="IN-contit">
						时令食材
						<span>	全部</span>
					</div>
					<div className="IN-summerfood">
						{
							this.state.data.slice(0,12).map(function(item,i){
								return (
									<div key={i}  className="IN-summerfoods" onClick={athis.bannerroute.bind(athis,item._id)}>
										<img src={item.imgSrc} alt="待加载" title={item.tit}/>
										<span>{item.tit}</span>
									</div>
								)}
							)
						}
					</div>
				</div>
				<div className="IN-right">
					<div id="IN-login">
						<div id="IN-qq-login">
							<em className="tubiao">&#xe609;  </em><span>QQ 登录</span>
						</div>
						<div id="IN-wb-login">
							<em className="tubiao">&#xe605;  </em><span>微博登录</span>
						</div>
						<div id="IN-tel-login">
							<em onClick={this.login.bind(this)}>手机/邮箱登录</em><i>|</i><span onClick={this.register.bind(this)}>注册</span>
						</div>
						<div id="IN-login-jubao">
							<span>网上不良信息举报专区</span>
						</div>
					</div>
					
					<div id="IN-right-pic">
						<img src="http://ubmcmm.baidustatic.com/media/v1/0f000KpVYoY5zuYuC3hEjs.jpg"/>
					</div>
					<div className="IN-contit">
						流行搜索
					</div>
					<div className="IN-hot-search">
						<div><em>1</em><span>茄子</span><i className="tubiao">&#xe600;</i></div>
						<div><em>2</em><span>土豆</span><i className="tubiao">&#xe837;</i></div>
						<div><em>3</em><span>可乐鸡翅</span><i className="tubiao">&#xe601;</i></div>
						<div><em>4</em><span>凉面</span><i className="tubiao">&#xe600;</i></div>
						<div><em>5</em><span>炸酱面</span><i className="tubiao">&#xe601;</i></div>
						<div><em>6</em><span>糖醋排骨</span><i className="tubiao">&#xe600;</i></div>
						<div><em>7</em><span>秋葵</span><i className="tubiao">&#xe601;</i></div>
						<div><em>8</em><span>豆腐</span><i className="tubiao">&#xe837;</i></div>
						<div><em>9</em><span>豆角</span><i className="tubiao">&#xe601;</i></div>
						<div><em>10</em><span>虾</span><i className="tubiao">&#xe600;</i></div>
					</div>
					
					<IndexInside></IndexInside>
					
					<div className="IN-contit">
						下厨房的厨友们
						<span>	更多</span>
					</div>
					{
						this.state.data.slice(0,5).map(function(item,i){
							return(
								<div className="IN-KitchenFriends" key={i}>
									<div className="IN-KitchenFriendPic">
										<img src={item.message[0].userImg}/>
									</div>
									<div className="IN-KitchenFrienInfo">
										<div className="IN-KitchenFrienName">{item.message[0].user}</div>
										<div><em>{item.message[0].good}</em> 关注</div>
										<div><span>{item.message[0].good} </span>个菜谱  <i>{item.message[0].good}</i> 个作品</div>
									</div>
									<div className="IN-Follow">
										关注
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			
			
			<div id="IN-proshowWrap">
				<div id="IN-proshow">
					<div className="IN-proshowcon">
						<p>参照 <em>1083173 </em>菜谱，大家做出 <i>42699066</i> 作品</p>
						<div>
							<span>最新上传</span>
							<span>正在流行</span>
							<span>24小时最佳</span>
						</div>
					</div>
					{
						this.state.data.slice(0,5).map(function(item,i){
							return(
								<div className="IN-proshowcon" key={i}>
									<div className="IN-proshowLeft">
										<div>#{item.tit}#</div>
										<div>{item.message[0].con}</div>
									</div>
									<div className="IN-proshowpic"><img src={item.imgSrc} /></div>
									<div className="IN-proshowpic"><img src={item.imgSrc} /></div>
									<div className="IN-proshowpic"><img src={item.imgSrc} /></div>
								</div>
							)
						})
					}
				</div>
			</div>
      </div>
		);
	}

}

export default Index;