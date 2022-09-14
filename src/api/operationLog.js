/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-08 10:42:30
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 10:43:24
 * @FilePath: \thunk-toolkit\src\api\operationLog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import client from "./baseAPI"


async function getLogList() {
    const response = await client.get("/log/logList");
    return response['data']
}

export {getLogList }