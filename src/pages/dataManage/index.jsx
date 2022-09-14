/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 17:10:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-06 13:36:41
 * @FilePath: \thunk-toolkit\src\pages\dataManage\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 17:10:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-05 16:09:08
 * @FilePath: \thunk-toolkit\src\pages\dataManage\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Button, Input, DatePicker, Form, Select, Pagination, Row, Col, Empty } from "antd";
import ExportJsonExcel from "js-export-excel";
import CardList from "@/components/dataManage/cardList";
import AddForm  from '@/components/dataManage/addForm';
import ModalTemplate from '@/components/modalTemplate'


import './index.css';
import { useState } from "react";
const { RangePicker } = DatePicker;
const { Option } = Select;

const DataManage = () => {
    const [visible, setVisible] = useState(false);

    const ExcelData = [
        {
            ticketNo: '2',
            acceptorBank: '222'
        }
    ]
    const exportData = () => {

        let sheetFilter = ["ticketNo", "acceptorBank"];
        let option = {};
        option.fileName = '商票发行管理';
        option.datas = [
            {
                sheetData: ExcelData,
                sheetName: '商票发行管理',
                sheetFilter: sheetFilter,
                sheetHeader: ['票据号码', '票据金额（元）'],
                columnWidths: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
            },
        ];

        var toExcel = new ExportJsonExcel(option); //new
        toExcel.saveExcel(); //保存
    }
    const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    async function deleteData(v) {
        console.log(v)
    }
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
    const handleChange = (value) => {
        console.log('onOk: ', value);
    };
    const data = [
        1, 2, 3, 45, 67, 7, 8, 8,6,6,7
    ]
    const ListData = () => {
        // let data = props.data
        let len = data.length
        if ( len){
            let template = data.map((item,index)=>{
                return <CardList item={item} key={index} />
            })
        // let template = []
        // let Li = []
        //     for (let j =0;j<len;j++){
        //             let v = data[j]
        //             Li.push(<CardList item={v} key={j} />)
        //             // console.log(Li)
        //             if ((j+1) % 5 == 0 || j == (len-1) ){
        //                 template.push((<ul>{Li}</ul>))
        //                 Li = []
        //                 // console.log(template)
        //             }
        //         }

            return template
        } else {
            return <Empty />
        }
    }
  

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
                <Form style={{ margin: '20px' }} name='dataManageForm'>

                    <Row justify='space-between' wrap={false} style={{ width: "100%" }}>
                        <Col span={5}>
                            <Form.Item label="车牌号">
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={5}>
                            <Form.Item label="车牌颜色">
                                <Select placeholder='不限' onChange={handleChange}>
                                    <Option value='蓝色'>蓝色</Option>
                                </Select>
                            </Form.Item>

                        </Col>
                        <Col span={10}>
                            <Form.Item label="录入时间">
                                <RangePicker
                                    showTime={{
                                        format: 'HH:mm:ss',
                                    }}
                                    format="YYYY-MM-DD HH:mm:ss"
                                    onChange={onChange}
                                    onOk={onOk}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item>
                                <Button style={{ float: 'right' }} onClick={()=>setVisible(true)}>添加数据</Button>
                                <Button>检索</Button>
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>
                <div className="dataFilter">
                    <div>
                        <span>共找到 111 条结果,用时 1 秒</span>
                        <Select defaultValue='不分组' style={{ width: '130px', marginLeft: '20px' }}>
                            <Option value='2'>按车牌分组</Option>
                            <Option value='1'>按点位分组</Option>
                            <Option value='0'>不分组</Option>
                        </Select>
                    </div>

                    <Button type="primary" onClick={exportData}>导出Excel</Button>
                </div>

                <div
                    className="cardList">
                        <ul>
                        <ListData/>
                        </ul>
                </div>
                <div className="pagiFooter">
                    <Pagination defaultCurrent={6} total={500} style={{ textAlign: 'center' }} />
                </div>
            </div>
            <ModalTemplate Children={AddForm} title={'添加'} visible={visible} setVisible={(v) => setVisible(v)} />
        </>
    )
}
export default DataManage;