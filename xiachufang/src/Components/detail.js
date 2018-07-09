import React from 'react'
import $ from 'jquery'
import { Layout,Breadcrumb,Avatar,Icon,Input } from 'antd';
import '../style/detail.css'
import Store from "./Store";

const {  Sider, Content } = Layout;
const { TextArea } = Input;

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tuijian:[],
            obj:{},
            foods:[],
            step:[],
            message:[],
            user:Store.getState()
        }
    }

    collection(id){
        $.ajax({
            type:'post',
            url:'http://10.8.161.38:8000/showDetail',
            data:{
                username:'gzj',
                collection:[]
            },
            success:function (data) {

            }
        })
    }

    message(){
        var _this = this;
        var message = this.state.message;
        var oDate = new Date();
        var year = oDate.getFullYear(),
            month = oDate.getMonth()+1,
            day = oDate.getDate();
        var obj={
            con:_this.refs.mes.value,
            user:_this.state.user.username,
            userImg:'',
            good:0,
            date:year+month+day
        }
        message.push(obj)
        $.ajax({
            type:"post",
            url:"'http://10.8.161.38:8000/message",
            data:{
                id:_this.props.match.params.id,
                message:message
            }
        })
    }

    render(){
        return(
            <div id='detail'>
                <Layout style={{ width: "980px",margin: "0 auto"}}>
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
                                <button onClick={this.collection.bind(this,this.state.obj._id)}>收藏</button>
                            </div>
                            <div className="user-row">
                                <img src={this.state.obj.userImg} alt=""/>
                                <p>{this.state.obj.user}</p>
                            </div>
                            <h2 className="yellow">用料</h2>
                            <ul className="yongliao">
                                {
                                    this.state.foods.map(function (item,i) {
                                        return(<li key={i}>{item}</li>)
                                    })
                                }
                            </ul>
                            <div className="introduction">{this.state.obj.introduction}</div>
                            <h2 className="yellow">{this.state.obj.tit}的做法</h2>
                            <div>
                                {
                                    this.state.step.map(function (item,i) {
                                        return(<div className="step" key={i}><span className="yellow">{i}</span>{item}</div>)
                                    })
                                }
                            </div>

                        </Content>
                        <Sider style={{background:'#fff'}}>Sider</Sider>
                    </Layout>
                </Layout>
                <div className="tuijian-wrap">
                    <div>
                        <h2 className="yellow">喜欢{this.state.obj.tit}的也喜欢</h2>
                        <div className="IN-hot-wrap">
                            {
                                this.state.tuijian.map(function(item,i){
                                    return (<div key={i} className="IN-hot">
                                        <img src={item.imgSrc}/>
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
                    </div>
                </div>
                <div className="message-wrap">
                    <h2 className="yellow">{this.state.obj.tit}的评论</h2>
                    <TextArea rows={4} ref="mes"/>
                    <button className="pinglun" onClick={this.message.bind(this)}>评论</button>
                    <div>
                        {
                            this.state.message.map(function (item,i) {
                                return(
                                    <div className="message" key={i}>
                                        <Avatar size="default" icon="user" src={item.userImg} style={{margin:"5px 10px",float:"left"}}/>
                                        <div>
                                            <p><a href="">{item.user}</a><span>{item.date}</span></p>
                                            <p>{item.con}</p>
                                        </div>
                                        <div className="good">
                                            <Icon type="like" style={{ fontSize: "20px"}}/>
                                            <span>{item.good}</span>赞
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:'http://10.8.161.38:8000/showDetail',
            async:true,
            success:function (data) {
                var arr=[];
                for(var i = 0;i<4;i++){
                    arr.push(data[i]);
                }
                _this.setState({tuijian:arr});
            }
        })
    }
    componentDidMount(){
        var _this=this;
        var id = this.props.match.params.id;
        $.ajax({
            type:'get',
            url:'http://10.8.161.38:8000/showDetail',
            async:true,
            data:{id:id},
            success:function (data) {
                _this.setState({obj:data,foods:data.foods,step:data.step,message:data.message});
            }
        })
    }
}

export default Detail