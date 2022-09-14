/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-08 14:38:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-09 10:51:17
 * @FilePath: \thunk-toolkit\src\components\clientTreeSelect\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import department from '@/config/department';
import { TreeSelect, } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;

function ClientTreeSelect({style,value,onChange}) {
    // const [depart, setDepart] = useState([]);

    const onDepartChange = (nv) => {
        onChange(nv)
        // console.log('onChange ', nv);
        // setDepart(nv);
    };
    const tProps = {
        treeData: department,
        value:value,
        onChange:onDepartChange,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: '请选择部门',
        maxTagCount: 2,
        style:style
    };

    return (
        <TreeSelect {...tProps} />
    )
}
export default ClientTreeSelect;