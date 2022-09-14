/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 11:07:09
 * @LastEditors: LAPTOP-E57K1O16\yisa 2606292175@qq.com
 * @LastEditTime: 2022-09-13 17:26:42
 * @FilePath: \thunk-toolkit\src\components\homeUpBox\leftBox\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Statistic } from 'antd'
import { Descriptions } from 'antd';
import {getDailyAdd,getMonAdd } from '@/api/home'
import { useEffect, useState } from 'react';

const descDiv = {
    padding: '13px',
    border: '1px solid #d7d4d4',
    // marginLeft: '0px'
}

const LeftBox = () => {
    const [today,setToday] = useState(0)
    const [tadd,setTadd] = useState('')
    const [cur,setCur] = useState(0)
    const [last,setLast] = useState()
    useEffect(()=>{
        let v = getDailyAdd()
        let v2 = getMonAdd()
        v.then((v)=>{
            v = v.data
            let t = v.today
            setToday(t)
            let gap = t - v.yesterday
            if(gap>=0){
                setTadd('+'+ gap)
            }else{
                setTadd(gap.toString())
            }
        })
        
        v2.then((res)=>{
            res = res.data
            setCur(res.current)
            let gap = res.current - res.last
            if(gap>=0){
                setLast('+'+ gap)
            }else{
                setLast(gap.toString())
            }
        })
       
    },[])


    return (
        <>
            <Descriptions title="今日新增" style={descDiv}>
                <Descriptions.Item label="共">{today}条</Descriptions.Item>
                <Descriptions.Item label="较昨日">{tadd}条</Descriptions.Item>

            </Descriptions>
            <Descriptions title="本月新增" style={descDiv}>
                <Descriptions.Item label="共">{cur}条</Descriptions.Item>
                <Descriptions.Item label="较上月">{last}条</Descriptions.Item>

            </Descriptions>
        </>
    )

}
export default LeftBox;