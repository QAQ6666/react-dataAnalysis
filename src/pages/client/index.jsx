/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 17:10:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-09 17:36:55
 * @FilePath: \thunk-toolkit\src\pages\client\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {  Input, Button,  } from 'antd';
import { useEffect, useState } from 'react';
import ClientUpdateForm from '@/components/clientUpdateForm';
import ModalTemplate from '@/components/modalTemplate'
import ClientTreeSelect from '@/components/clientTreeSelect';
import ClientTable from '@/components/clientTable'

import './index.css'

const Client = () => {
    
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState()
    const [formData,setFormData] = useState('')
   
    const [depart,setDepart] = useState([])
    const [text,setText] = useState('')
    
    
    const insertData = (record) => {
        if(title==='u' || !title){
            setTitle('a')
        }
        setFormData('')
        setVisible(true)
    };
    

    function treechange(v){
        console.log(v)
        setDepart(v)
    }
    function ichange(v){
        // console.log(v)
        setText(v.target.value)
    }
    function tos(){
        // setLoad(true)
    }
    const edithandle = (record) => {
        
        if(title==='a' || !title){
            setTitle('u')
        }
        setFormData(record)
        setVisible(true)
    };
    
   

    return (
        <>
            <div className='clientFilter'>
                <div style={{ display: 'flex' }}>
                    <ClientTreeSelect style={{ minWidth: "200px",width:'auto' }} value={depart} onChange={treechange} />
                    <Input placeholder='请输入账户/姓名/身份证号/手机号进行检索' 
                    onChange={ichange}
                    value={text} allowClear style={{ marginLeft: '20px', marginRight: '20px' }} />
                    <Button className='currentButton' onClick={tos}>检索</Button>
                </div>

                <Button className='currentButton' onClick={insertData}>添加用户</Button>
            </div>

            <ClientTable edithandle={(v)=>edithandle(v)}  />
            
            <ModalTemplate formData={formData}  Children={ClientUpdateForm} title={title} visible={visible} setVisible={(v) => setVisible(v)} >
                {/* <ClientUpdateForm /> */}
            </ModalTemplate>
            {/* <ClientModal visible={visible} setVisible={(v) => setVisible(v)} /> */}
        </>
    )
}
export default Client;