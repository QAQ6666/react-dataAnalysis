/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 10:05:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 13:48:15
 * @FilePath: \thunk-toolkit\src\config\logTable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const LogTableColumns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: '5%',
    },
    {
        title: '账号姓名',
        dataIndex: 'name',
        key: 'name',
        width: '15%',
    },
    {
        title: '所属部门',
        dataIndex: 'department',
        key: 'department',
        width: '15%',
    },
    {
        title: '功能模块',
        dataIndex: 'module',
        key: 'module',
        width: '15%',
    },
    {
        title: '车牌',
        dataIndex: 'carLicense',
        key: 'carLicense',
        width: '20%',
    },
    {
        title: 'ip',
        dataIndex: 'ip',
        key: 'ip',
        width: '15%',
    },
    {
        title: '操作时间',
        dataIndex: 'time',
        key: 'time',
        width: '15%',
    },
]

export default LogTableColumns;