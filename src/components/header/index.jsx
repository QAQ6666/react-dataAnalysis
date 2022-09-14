/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 16:36:46
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 17:38:00
 * @FilePath: \thunk-toolkit\src\components\header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout, Menu, Button,Tooltip,Popconfirm ,message} from 'antd';
import headerList from '@/config/header';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'
import './index.css'
import { useDispatch } from 'react-redux'
import { appear, hide } from '@/store/reducers/spinShowSlice'
import { logout } from '@/api/global';


const { Header } = Layout;


const Headers = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const confirm = ()=>{
        dispatch(appear())
        let v = logout()
        v.then((res)=>{
            console.log(res)
            if(res.status == 'suc'){
                window.localStorage.clear(); 
                message.success(res.meg)

                dispatch(hide())
                window.location.href = '/login'
            }
        })
    }
    const select = (v) => {
        // console.log(v)
        navigate(v.key)
    }

    const lastTime = window.localStorage.getItem('lastTime')
    const ip = window.localStorage.getItem('ip')
    const count = window.localStorage.getItem('count')
    const userName = window.localStorage.getItem('userName')
    const  UseInfo= ()=>{
        return (
            <> <p>上次登录时间:{lastTime}</p>
            <p>上次登录ip:{ip}</p>
            <p>累计登录次数:{count}</p></>
        )
    }
    return (
        <Header
            className='headerHome'
        >
            <h1 style={{ color: 'white', marginRight: "50px" }}>数据分析系统</h1>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={headerList}
                onSelect={select}

            />
            <span style={{ color: '#a6adb4' }}>
                <Tooltip title={<UseInfo/>} style={{whiteSpace:'pre-line'}}>
                <UserOutlined /><span style={{marginLeft:'5px'}}>{userName}</span>
                </Tooltip>
                <Popconfirm   onConfirm={confirm} title="确定要退出当前用户码?">
                <Button ghost={true} size='small'  style={{border:'none',marginLeft:'30px'}}>退出登录</Button>
                </Popconfirm>
            </span>
        </Header>
    )
}

export default Headers;