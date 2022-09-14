/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-01 15:34:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 13:31:30
 * @FilePath: \thunk-toolkit\src\utils\notification.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { notification } from 'antd';

// function notificationSuccess(placement = 'top', desc = '', title = '') {
//     notification.success({
//         message: title,
//         description: desc,
//         placement,
//     });
// }
// function notificationWarn(placement = 'top', desc = '', title = '') {
//     notification.warn({
//         message: title,
//         description: desc,
//         placement,
//     });
// }
// function notificationInfo(placement = 'top', desc = '', title = '') {
//     notification.info({
//         message: title,
//         description: desc,
//         placement,
//     });
// }
function notificationConfig(type='info',desc = '',placement = 'top',  title = null) {
    if(title == null){
        switch (type){
            case  'success' : title = '成功'; break;
            case  'warn' : title = '警告'; break;
            case  'error' : title = '错误'; break;
            case  'info' : title = '提示'; break;
            default : break;
        }
    }
    

    notification[type]({
        message: title,
        description: desc,
        placement,
        duration:'2'
    });
}

export default notificationConfig;