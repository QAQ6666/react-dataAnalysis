/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-06 11:24:55
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-09 10:50:07
 * @FilePath: \thunk-toolkit\src\components\modalTemplate\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Modal, Button, message } from 'antd'
import React, { useEffect } from 'react';
import { useState } from 'react';

const ModalTemplate = ({ visible, setVisible, title = 'u', width = 800, Children, formData }) => {

    let FormRef = React.createRef();
    const [subLoad, setSubLoad] = useState(false)

    const submitData = () => {
        // if(title == 'u'){
        //     if( FormRef.current.isChange==0){
        //         message.warn('至少更改一项值才能提交数据')
        //     }else{

        //     }
        // }else if(title == 'a'){

        // }
        // setSubLoad(true)
        FormRef.current.subData({ setSubLoad, formData }).then((v) => {
            setSubLoad(false)
            
            // setVisible(false)
        })

    }

    const close = () => {
        setVisible(false)
    }
    return (
        <Modal
            title={(title === 'u' ? '修改' : '添加') + '数据'}
            centered={true}
            visible={visible}
            onCancel={close}
            width={width}
            confirmLoading={true}
            maskClosable={false}
            footer={[
                <Button key="back" onClick={close}>
                    关闭
                </Button>,
                <Button key="submit" type="primary" loading={subLoad} onClick={submitData}>
                    提交数据
                </Button>,

            ]}
        >
            {/* {children} */}
            <Children onRef={FormRef} formData={formData} />
            {/* <ClientUpdateForm onRef={FormRef} subLoad={subLoad} setSubLoad={(v)=> setSubLoad(v)}/> */}
        </Modal>

    )
}

export default ModalTemplate;