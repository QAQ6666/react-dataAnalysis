/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 09:56:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 17:00:55
 * @FilePath: \thunk-toolkit\src\pages\login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined, ExclamationOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { appear, hide } from '@/store/reducers/spinShowSlice'
import React, { useState } from 'react'
import styles from './login.module.scss'
import CodeImg from '@/components/codeImg'
import client from "@/api/baseAPI"
import notificationConfig from '@/utils/notifyConfig'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate()
    // const imgRef = useRef(null)
    const imgRef = React.createRef()
    const [toLarger, setToLarger] = useState(false)
    const dispatch = useDispatch()

    const onFinish = (values) => {
        // console.log(values)
        client.post('/login', {
            params: values,
            // codeSession:codeSession
        }
            //    { withCredentials:true}
        ).then((res) => {
            // console.log(res)
            let v = res.data
            if (v.status === 'fail') {
                notificationConfig('error', v.meg)
                if (v.code) {
                    imgRef.current.imgCode()
                    notificationConfig('warn', '已刷新验证码')
                }

            } else if (v.status === 'warn') {
                notificationConfig('warn', v.meg)
            } else {
                notificationConfig('success', v.meg)
                // data
                localStorage.setItem('authorization', v.token)
                localStorage.setItem('userName', v.data.userName)
                localStorage.setItem('lastTime', v.data.lastTime)
                localStorage.setItem('ip', v.data.ip)
                localStorage.setItem('count', v.data.count)
                dispatch(appear())
                setTimeout(() => {
                    dispatch(hide())
                    navigate('/main/home', { replace: true })
                }, 1000)

                // console.log(imgRef)
            }
        })
        // fetch("", {
        //     method: "POST", 
        //     body: JSON.stringify(values),
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     withCredentials:true
        // }).then(v => {
        //   return v.text()
        // }).then(data => {
        //     console.log(data) 
        //   }).catch(e => {
        //     console.log(e);
        // })

    };
    const onFinishFailed = (v) => {

    }

    return (
        <div className={styles.login}>
            <div>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', transform: 'translateY(-10px)' }}>数据分析系统</h1>

                <Form className={styles.login_form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                        // label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} autoComplete="true" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                        // label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} autoComplete="true" placeholder='单行输入' />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                        // label="验证码"
                        name="codeVerify"
                        rules={[
                            {
                                required: true,
                                message: '验证码不能为空',
                            },
                        ]}
                    >
                        <Input onFocus={() => setToLarger(true)} onBlur={() => { setToLarger(false) }}
                            addonAfter={
                                <CodeImg toLarger={toLarger} onRef={imgRef} />
                            } prefix={<ExclamationOutlined />}
                            autoComplete="true" placeholder='' />
                    </Form.Item>


                    <Form.Item

                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Login;