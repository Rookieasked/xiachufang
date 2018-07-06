import React from 'react'
import $ from 'jquery'
import { Layout,Breadcrumb } from 'antd';
import '../style/detail.css'
const { Header, Footer, Sider, Content } = Layout;


class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            obj:{},
            foods:[]
        }
    }

    render(){
        return(
            <div id='detail'>
                <Layout>
                    <Layout>
                        <Content style={{background:'#fff',overflowX:'visible'}}>
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className="red" href="">首页</Breadcrumb.Item>
                                <Breadcrumb.Item className="red" href="">馒头</Breadcrumb.Item>
                                <Breadcrumb.Item href="">{this.state.obj.tit}</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>{this.state.obj.tit}</h1>
                            <div className="img-row">
                                <img src={this.state.obj.imgSrc} alt=""/>
                            </div>
                            <div className="row">
                                <p><span>{this.state.obj.score}</span>综合评分</p>
                                <p><span>10</span>人做过这道菜</p>
                                <button>收藏</button>
                            </div>
                            <div className="user-row">
                                <img src={this.state.obj.userImg} alt=""/>
                                <p>{this.state.obj.user}</p>
                            </div>
                            <h2 className="yellow">用料</h2>
                            <ul className="yongliao">
                                {
                                    this.state.foods.map(function (item) {
                                        return(<li>{item}</li>)
                                    })
                                }
                            </ul>
                            <h2 className="yellow">红糖馒头的做法</h2>
                        </Content>
                        <Sider style={{background:'#fff'}}>Sider</Sider>
                    </Layout>
                </Layout>
            </div>
        )
    }

    componentDidMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:'http://localhost:8000/showDetail',
            async:true,
            success:function (data) {
                // console.log(data);
                _this.setState({obj:data[0],foods:data[0].foods});
                // console.log(_this.state.obj.foods)
                _this.state.obj.foods.map(function (item) {
                    console.log(item)
                })
                // _this.state.obj.foods.forEach(function (item) {
                //     console.log(item)
                // })
            }
        })
    }
}

export default Detail