/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-08 14:12:12
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 14:15:01
 * @FilePath: \thunk-toolkit\src\config\department.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const department = [
    {
        title: '青岛以萨总部',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: '研发部',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: '北京以萨',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: '交付部',
                value: '0-1-0',
                key: '0-1-0',
            },
        ],
    },
    {
        title: '杭州以萨',
        value: '0-2',
        key: '0-2',
        children: [
            {
                title: 'PGB',
                value: '0-2-0',
                key: '0-2-0',
            },
        ],
    }
    
]

export default department;