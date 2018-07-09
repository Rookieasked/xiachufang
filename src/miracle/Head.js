import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import  $ from  'jquery'						
import ReactDOM from 'react-dom';               
import "../macss/Head.css"



class Head extends Component {
	constructor(props){
		super(props)
	}
	tap(){
		this.props.history.push('/fenleiye')
	}

  render() {
    return (
      <div>
       		<div className='tou-wrap'>
       			<div className='tou'>
       				<Link to="/head"><div className='tou-logo'>

       				</div></Link>
       				<div className='tou-search'>
       					<input type="text" placeholder="搜索菜谱、食材"/>
       					<button>搜菜谱</button>
       				</div>
       				<ul className='tou-list'>
       					<li>会员专区</li>
       					<li className='tou-cpfl' onClick={this.tap.bind(this)}>菜谱分类</li>
       					<li onClick={this.tap.bind(this)}>菜单</li>
       					<li>作品动态</li>
       				</ul>
       				<ul className='tou-zcdl'>
       					<li>注册</li>
       					<li><span>登录</span></li>
       				</ul>
       			</div>
       		</div>
       		
      </div>
    );
    
  	}
  	componentDidMount(){
		$(function(){
			var $div = $('<div class="flcp"></div>');
			$(".tou-cpfl").append($div);
			var $box = $('<div class="box"></div>');
			$div.append($box);
			$.ajax({
			type:"get",
			url:"http://10.8.161.38:8000/showList",
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data)
				for(var i=0;i<3;i++){
				var $ul=$('<ul class="boxs"></ul>');
				$box.append($ul);
				for(var j=0;j<9;j++){
					var menu=data[j];
					var $li=$('<li></li>');
					$li.html(menu.tit);
					$ul.append($li);
					
				}
			}
				
			}
		});
			
			
		})
	}
  
}



export default Head;
