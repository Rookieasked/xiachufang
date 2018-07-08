import React from 'react'
import { Icon } from 'antd';
import '../style/footer.css'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="footer">
                <div>
                    <button>入住下厨房集市</button>
                    <button>广告合作</button>
                </div>
               <div>
                   <p><a href="">美食生活杂志</a><a href="">厨房工作</a><a href="">社区指导原则</a><a href="">下厨房出版的书</a><a href="">帮助中心</a><a
                       href="">联系我们</a><a href="">意见反馈</a><a href="">隐私声明</a></p>
                   <p><Icon type="weibo" style={{fontSize:"18px",color:"#333"}}/><Icon type="twitter" style={{fontSize:"18px",color:"#333"}}/></p>
               </div>
                <div>
                    <p>Copyright © xiachufang.com   京B2-20180499   京ICP备13009078号-1   京公网安备11010802022310号</p>
                    <p>唯有美食与爱不可辜负</p>
                </div>
                <p>违法和不良信息举报电话：010-52800126   举报邮箱：talk@xiachufang.com</p>
            </div>
        )
    }
}

export default Footer