/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 17:17:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 13:48:47
 * @FilePath: \thunk-toolkit\src\pages\main\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import { Layout } from 'antd';
import  Headers  from '@/components/header/index'
import { Outlet } from "react-router-dom";

const {  Content, Footer } = Layout;

const Main = () => {

    return (
        <Layout className="layout">
           <Headers />
            <Content
                style={{
                    padding: '0 50px',
                    width:'100%',
                    height:'100%'
                }}
            >
                {/* <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                {/* <div className="site-layout-content">Content</div> */}
                <Outlet/>
            </Content>
            {/* <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer> */}
        </Layout>
    )
}

export default Main;