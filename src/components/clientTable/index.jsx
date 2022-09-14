/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-09 16:17:03
 * @LastEditors: LAPTOP-E57K1O16\yisa 2606292175@qq.com
 * @LastEditTime: 2022-09-13 14:49:38
 * @FilePath: \thunk-toolkit\src\components\clientTable\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Table, Typography, Popconfirm } from 'antd'
import { useEffect, useState } from 'react'
import clientTableColumns from '@/config/clientTableColumns'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { getClientList } from '@/api/client';

const ClientTable = ({ edithandle }) => {

    const [source, setSource] = useState([])
    const [total, setTotal] = useState(1)
    const [load, setLoad] = useState(true)
    const [page, setPage] = useState(1)


    useEffect(() => {
        setLoad(true)
        let v = getClientList()
        v.then((res) => {
            res = res.data
            setSource(res)
        })

        setLoad(false)
    }, [])
    
    function delsou(ind) {
        // console.log(load)
        setSource(source.filter((_, i) => i !== ind))
    }

    function delhandle(v, index) {
        console.log(source)
        // console.log(v)
        let ind = (page - 1) * 15 + index
        delsou(ind)
    }

    const delConfirm = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null)

            }, 3000);
        });
    }
    function pagechange(v, s) {
        setPage(v)
    }
    let len = clientTableColumns.length
    let obj = clientTableColumns[len - 1]
    obj['render'] =  (_, record, index) => {
        let i = (
            <> <Popconfirm title="确认删除?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={delConfirm}
            >
                <span style={{ color: '#babfc5', marginLeft: 20 }} onClick={() => delhandle(record, index)}>删除</span>
            </Popconfirm></>
        )
        let j = (<Typography.Link
            onClick={() => edithandle(record)}
        > 编辑</Typography.Link>
        )
        return record.role != '0' ? (
            <span> {j} </span>) : (<>{j}{i}</>);
    }


    function template() {
        return (_, record, index) => {
            let i = (
                <> <Popconfirm title="确认删除?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    onConfirm={delConfirm}
                
                >
                    <span style={{ color: '#babfc5', marginLeft: 20 }} onClick={() => delhandle(record, index)}>删除</span>
                </Popconfirm></>
            )
            let j = (<Typography.Link
                onClick={() => edithandle(record)}
            > 编辑</Typography.Link>
            )
            return record.role != '0' ? (
                <span> {j} </span>) : (<>{j}{i}</>);
        }
    }
    // useEffect(()=>{
    //     let len = clientTableColumns.length
    //     let obj = clientTableColumns[len - 1]
    //     obj['render'] = template()
    //     setColumns(clientTableColumns)
    // },[])
    
    useEffect(() => {
        setTotal(source.length)
    }, [source.length])


    return (
        <Table columns={clientTableColumns} dataSource={source}
            rowKey={record => record.code}
            pagination={{
                total: { total }, showQuickJumper: false,
                showSizeChanger: false, pageSize: '15', size: "small", position: ['bottomCenter'],
                onChange: pagechange
            }}
            rowClassName={(record, index) => (index % 2 === 1 ? 'odd' : 'nodd')}
            bordered={true}
            size='small'
            loading={load}
        />
    )
}


export default ClientTable;