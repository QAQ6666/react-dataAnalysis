/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-07 13:55:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 10:03:58
 * @FilePath: \thunk-toolkit\src\api\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import client from "./baseAPI"


async function getBanner() {
    const response = await client.get("/home/banner");
    return response['data']
}
async function getEchartYdata(){
    const response = await client.get("/home/echarty");
    return response['data']
}

async function getuserCounter(){
    const response = await client.get("/home/userCounter");
    return response['data']
}

async function getDailyAdd(){
    const response = await client.get("/home/dailyAdd");
    return response['data']
    
}
async function getMonAdd(){
    return new Promise((resolve,rej)=>{
        client.get("/home/monAdd").then((res)=>{
            resolve(res.data)
        }).catch((v)=>{
            rej(v)
        })
    })
}


export {
    getBanner,getEchartYdata,getuserCounter,getDailyAdd,
    getMonAdd
}