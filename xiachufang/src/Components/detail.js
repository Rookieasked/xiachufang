import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
class Detail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='detail'>
                <Layout>
                    <Layout>
                        <Content>Content</Content>
                        <Sider>Sider</Sider>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Detail