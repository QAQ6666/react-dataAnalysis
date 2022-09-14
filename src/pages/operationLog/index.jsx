/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 17:09:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 18:05:57
 * @FilePath: \thunk-toolkit\src\pages\operation\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { SearchOutlined } from '@ant-design/icons';
import { Table, Spin, message } from 'antd';
import { useEffect, useState } from 'react';
import TableFilter from '@/components/operationLog/tableFilter'
import './log.css'
import LogTableColumns from '@/config/logTableColumns'
import { getLogList } from '@/api/operationLog'
import moment from 'moment/moment';
// import Highlighter from 'react-highlight-words';

const OperationLog = () => {
    const [list, setList] = useState([])
    const [filterList, setLfist] = useState([])
    const [stats, setStats] = useState(0)
    const [loading, setLoading] = useState(false);
    const [stime, setStime] = useState('')
    const [Etime, setEtime] = useState('')
    const [criteria, setCriteria] = useState('')
    const [ctext, setCtext] = useState('')


    const toSearch = async (v) => {

        if (stime == '' && Etime == '' && criteria == '' && ctext == '') {
            message.warn('至少输入一个检索条件')
        } else {
            setLoading(true)
            let endList = list;
            if (stime) {
                endList = endList.filter((v) => {
                    return moment(v.time).isAfter(stime)
                })
            }
            // console.log(endList)
            if (Etime) {
                endList = endList.filter((cv) => {
                    return moment(cv.time).isBefore(Etime)
                })
            }
            if(criteria && ctext){
                endList =  endList.filter((cv)=>{
                    let reg = new RegExp(ctext,'i') ;
                    return reg.test(cv[criteria])
                })
            }
            setLfist(endList)
            setStats(endList.length)
            setLoading(false)
        }
    }

    useEffect(() => {
        let v = getLogList()
        v.then((res) => {
            let l = res.data
            setList(l)
            setStats(l.length)
            setLfist(l)
        })
    }, [])

    return (
        <>
            <TableFilter
                setStime={v => setStime(v)}
                setEtime={v => setEtime(v)}
                setCriteria={v => setCriteria(v)}
                setCtext={v => setCtext(v)}
                toSearch={toSearch}
            />
            <Spin spinning={loading}>
                <div className='logTable'>
                    <h2>共检索到{stats}条数据</h2>
                    <Table columns={LogTableColumns} dataSource={filterList}
                        rowKey={record => record.id}
                        pagination={{
                            total: { stats }, showQuickJumper: false,
                            showSizeChanger: false, pageSize: '15', size: "small", position: ['bottomCenter']
                        }}
                        bordered={true} size='small'
                    />
                </div>
            </Spin>
        </>
    )
}
export default OperationLog;