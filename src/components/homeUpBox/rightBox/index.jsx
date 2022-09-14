/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 11:07:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 17:59:49
 * @FilePath: \thunk-toolkit\src\components\homeUpBox\rightBox\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Descriptions } from 'antd';

const RightBox = ({data}) => {
    return (
        <>
            {/* <Descriptions title="系统用户统计" layout="vertical" >
                <Descriptions.Item label="用户总数" labelStyle={{color: 'red'}}>3</Descriptions.Item>
                <Descriptions.Item label="近7天活跃用户数">3</Descriptions.Item>
                <Descriptions.Item label="未登陆过的用户树">3</Descriptions.Item>
              
            </Descriptions> */}
            <div style={{ padding: '20px' }}>
                <h3>系统用户统计</h3>
                <div style={{ padding: '20px' }}>
                    <div>用户总数: {data.count} </div>
                    <div>近7天活跃用户数: {data.weekUpuser}</div>
                    <div>未登陆过的用户数: {data.unLogin}</div>
                </div>

            </div>

        </>
    )
}

export default RightBox;