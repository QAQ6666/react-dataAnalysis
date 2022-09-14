/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 09:05:51
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 14:01:45
 * @FilePath: \thunk-toolkit\src\components\operationLog\tableFilter\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DatePicker, Select, Input, Button } from 'antd';
import './tableFilter.css'
import moment from 'moment'
const { RangePicker } = DatePicker;
const { Option } = Select;

const TableFilter = ({ setStime, setEtime, setCriteria, setCtext,toSearch }) => {
   
    const onOk = (v) => {
        if (v[0]) {
            setStime(momentTO(v[0]))
        }
        if (v[1]) {
            setEtime(momentTO(v[1]))
        }
    };



    function momentTO(v) {
        return moment(v).format('YYYY-MM-DD hh:mm:ss')
    }

    const handleChange = (value) => {
        setCriteria(value)
        // console.log(`selected ${value}`);
    };
    return (
        <div className='tableFilter'>
            <span style={{ marginRight: '10px' }}>时间范围:</span>
            <RangePicker
                showTime={{
                    format: 'HH:mm:ss',
                }}
                format="YYYY-MM-DD HH:mm:ss"
                // onChange={onChange}
                onOk={onOk}
                className='inputRadius'
            />
            <Select
                style={{ marginLeft: '70px', marginRight: '5px' }}
                className='tableFilterInput'
                allowClear
                // defaultValue="lucy"
                placeholder='请选择检索条件'
                onChange={handleChange}
            >
                <Option value="name">账户/姓名</Option>
                <Option value="department">所属部门</Option>
                <Option value="module">功能模块</Option>
                <Option value="carLicense">车牌</Option>
                <Option value="ip">ip</Option>
            </Select>

            <Input placeholder='检索内容' allowClear onChange={(e)=>setCtext(e.target.value)} className='tableFilterInput inputRadius' style={{ marginRight: '15px' }} />
            <Button type="primary" size='small' style={{ width: "80px" }} onClick={toSearch}>
                检索
            </Button>
        </div>
    )
}

export default TableFilter;