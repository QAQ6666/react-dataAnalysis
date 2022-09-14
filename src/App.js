/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 16:55:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 13:55:54
 * @FilePath: \thunk-toolkit\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import * as echarts from 'echarts';//引入主模块
import 'echarts/lib/chart/line';
import BaseRouter from './router/router.config.js'
import { Spin } from 'antd'
import { useSelector } from 'react-redux'


function App() {
  const spinShow = useSelector((state) => state.spinShow.value)
  const spinStyle = {
    display: 'flex',
    backgroundColor: 'white', opacity: ".8", position: 'absolute',
    height: '100%', zIndex: '100', width: '100%', justifyContent: 'center',
    alignItems: 'center'
  }
  spinStyle.display = spinShow
  // useEffect(()=>{
    

  // },[spinShow])
  return (
    <>
      <BrowserRouter>
        <Spin size="large" style={spinStyle} tip={'跳转中...'} />
        <BaseRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
