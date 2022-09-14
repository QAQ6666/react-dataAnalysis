/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 14:32:10
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 08:43:09
 * @FilePath: \thunk-toolkit\src\components\codeImg\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect,useImperativeHandle  } from "react"
import client from "@/api/baseAPI"
import './codeImg.css'

const CodeImg = (props) => {
    const toLarger = props.toLarger
    useImperativeHandle (props.onRef,()=>{
        return {
            imgCode:changeCode
        }
    })

    const [url, setUrl] = useState(null)
    // const u = `http://localhost:8080/getcode?time=`
    async function changeCode() {

        const response = await client.get("/getcode");
        let v = response['data']
        if (v) {
            v = `data:image/svg+xml;base64,${window.btoa(v)}`
            setUrl(v)
        }
        
        // parentSetcode(response.headers['codesession'])
    }

    useEffect(() => {
        changeCode()
    }, [])

    return (

        // <div className="codeImg" dangerouslySetInnerHTML={{__html: url}} onClick={changeCode} style={{height: toLarger ? '46px' : '32px'}}></div>
        // <img src={url} ref={ref} alt="验证码图片" style={{ height: toLarger ? '46px' : '32px' }} onClick={changeCode} />
        <img src={url} alt="验证码图片" style={{ height: toLarger ? '46px' : '32px' }} onClick={changeCode} />

    )
}
// export default   React.forwardRef(CodeImg);
export default CodeImg;