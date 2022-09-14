/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 10:45:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 11:20:56
 * @FilePath: \thunk-toolkit\src\components\homeUpBox\upBox\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const UpBox = (props)=>{

    return (
        <div style={{ flex:'1 1 0'}}>
           {props.children}
        </div>
    )
}

export default UpBox;