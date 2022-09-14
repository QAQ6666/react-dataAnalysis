/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-08 15:02:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-09 10:51:12
 * @FilePath: \thunk-toolkit\src\api\client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */





import client from "./baseAPI"


async function getClientList() {
    const response = await client.get("/client/clientList");
    return response['data']
}
async function delClient() {
    const response = await client.get("/client/delClient");
    return response['data']
}
async function addClient(v) {
    const response = await client.post("/client/addClient",{data:(v)});
    return response['data']
    
}
async function updateClient(v) {
    const response = await client.post("/client/updateClient",{data:(v)});
    return response['data']
}

export {getClientList ,delClient ,addClient, updateClient}