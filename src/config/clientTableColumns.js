/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 15:05:10
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-09 14:17:49
 * @FilePath: \thunk-toolkit\src\config\clientTableColumns.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const clientTableColumns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: '7%',
        render: (_, record,index) => {
            return index+1
        }
    },
    {
        title: '账号',
        dataIndex: 'code',
        key: 'code',
        width: '13%',
        // editable: true,
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
        // editable: true,
    },
    {
        title: '身份证号',
        dataIndex: 'pass',
        key: 'pass',
        width: '18%',
        // editable: true,
    },
    {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
        width: '15%',
        // editable: true,
    },
    {
        title: '部门',
        dataIndex: 'depart',
        key: 'depart',
        width: '10%',
        // editable: true,
    },
    {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
        width: '10%',
        render: (_, record) => {
            return record.role != '0' ? '管理员' : '普通用户'
        }

        // editable: true,
    },
    {
        title: '操作',
        dataIndex: 'oper',
        key: 'oper',
        width: '12%',
    }
]
export default clientTableColumns;