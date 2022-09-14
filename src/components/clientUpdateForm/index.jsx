
import { Form, Input, Row, Col, message } from 'antd'
import './index.css'
import { noEmpty } from '@/config/tipForm'
import { useEffect, useImperativeHandle, useState } from 'react';
import ClientTreeSelect from '../clientTreeSelect';
import { addClient,updateClient } from '@/api/client';


const cinit = {
    code: "", depart: [], name: "", pass: "", phone: "", role: 0
}
const ClientUpdateForm = (props) => {
    const [form] = Form.useForm();
    const formData = props.formData;
    // const [isChange, setIschange] = useState(0)
    // const onFinish = (values) => {
    //     setFormData(values)
    //     console.log('Success:', values);
    // };
    useEffect(() => {
        // console.log(formData)
        if (formData == '') {
            form.setFieldsValue(cinit)
        } else {
            form.setFieldsValue(formData)
        }
        // setIschange(0)
    }, [ formData, formData.key])

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    async function subData({setSubLoad,formData}) {
       return form.validateFields().then(values=>{
            setSubLoad(true)
            let v;
            if (formData == '') {
                 v = addClient(values)
            }else{
                v = updateClient(values)
            }
            
            v.then((v) => {
                if (v.status == 'suc') {
                    if (formData == '') {
                        form.setFieldsValue(cinit)
                    }
                    message.success(v.meg)
                } else {
                    message.error(v.meg)
                }

            })
        }).catch((v)=>{
            message.warn('有值没写')
        })
        // let r = form.getFieldsValue()
    }

    // function vchange(v) {
    //     if (!isChange) {
    //         setIschange(1)
    //     }
    // }
    //用useImperativeHandle暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef, () => {
        return {
            subData: subData,
            // form:form,
            // isChange: isChange
        };
    });


    return (
        <>
            <Form
                form={form}
                name="clientForm"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 15,
                }}
                // onValuesChange={vchange}

                // layout='inline'
                // onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="账号"
                            name="code"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="角色"
                            name="role"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                </Row>


                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="姓名"
                            name="name"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="身份证号"
                            name="pass"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>

                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="电话"
                            name="phone"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={12}>

                        <Form.Item
                            label="所属部门"
                            name="depart"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <ClientTreeSelect />
                        </Form.Item>
                    </Col>
                </Row>
                {/* <Row gutter={24}>
                    <Col span={12}>
                       
                    </Col>
                </Row> */}

                {/* <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item> */}
            </Form>
        </>
    )
}

export default ClientUpdateForm;