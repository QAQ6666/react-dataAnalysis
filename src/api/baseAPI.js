/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 17:56:49
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 09:53:40
 * @FilePath: \thunk-toolkit\src\api\baseAPI.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
import axios from "axios";
import {message} from 'antd'

const client = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  // credentials :'include'
});
client.interceptors.request.use(config => {
  // if (config.method === 'post') {
  if (config.url !== '/login') {
    let token = window.localStorage.getItem('authorization')
    let userName = window.localStorage.getItem('userName')
    // console.log(userName)
    if (token) {

      config.headers.Authorization = token
      config.headers.Username = userName
    }
  }
  // }
  return config

})
// 添加响应拦截器
client.interceptors.response.use(function (response) {
  if(response.status != 200 || response.statusText != 'OK'){
    message.error(response.config.url+'该接口数据请求失败')
  }
  // console.log(response)
  return response
}, function (error) {
  console.log(error)
  if (error.response.status === 401) {
    // token过期，先告诉用户登录失效，并重新登录
    // store.dispatch({
    //   typr: 'showAlert', value: {
    //     alertType: 'error',
    //     alertContent: '登录失效，即将跳转登录页'
    //   }
    // })
    alert('用户认证信息失效，请重新登录')
    // setTimeout(() => {
    //   //   // 关闭alert弹框
    //   //   // store.dispatch({ type: 'hideAlert' });
    //   //   // 跳转登录页,开发阶段都是在locahast：8080根路径下开发，所以可以用window.location.href='/login'，
    //   //   // window.location.href='/login'
    //   //   // 项目上线，由于路由模式改成啦HashRouter。所以应该修改的是hash值
    //   window.location.href = '/login'
    // }, 2000)

  }
  return
  // 对响应错误做点什么
  // return Promise.reject(error);
});
// 401-unauthorized

export default client;