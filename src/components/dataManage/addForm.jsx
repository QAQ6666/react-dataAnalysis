/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-06 13:21:47
 * @LastEditors: LAPTOP-E57K1O16\yisa 2606292175@qq.com
 * @LastEditTime: 2022-09-13 17:31:43
 * @FilePath: \thunk-toolkit\src\components\dataManage\addForm.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Form, Input, Row, Col, Select, DatePicker, message, Upload } from 'antd'
import { noEmpty } from '@/config/tipForm'
import { useEffect, useImperativeHandle, useState } from 'react';
import { LoadingOutlined, PlusOutlined,InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Dragger } = Upload;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};
// const config = {
//     name: 'upPic',
//     multiple: true,
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

//     onChange(info) {
//         const { status } = info.file;

//         if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }

//         if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },

//     onDrop(e) {
//         console.log('Dropped files', e.dataTransfer.files);
//     },
// };

const AddForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const [form] = Form.useForm();
    const handleChange = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    async function subData() {
        return new Promise((res, rej) => {
            form.submit()
            console.log(form.getFieldsValue(true))
            setTimeout(() => {
                res(true)
            }, 2000)
        })

    }
    function onChange(v) {
        console.log(v)
    }
    function onOk() {

    }
    //用useImperativeHandle暴露一些外部ref能访问的属性
    useImperativeHandle(props.onRef, () => {
        return {
            subData: subData,
        };
    });
   

    return (
        <>
            <Form
                form={form}
                name="manaForm"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 15,
                }}

                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            label="选择点位"
                            name="point"
                            rules={[
                                noEmpty
                            ]}
                        >
                            <Select placeholder='点位'>
                                <Option value='1'>1</Option>
                                <Option value='2'>2</Option>
                                <Option value='3'>3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="录入时间"
                            name="time"
                            rules={[
                                noEmpty
                            ]}
                        >

                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Form.Item>
                        <Form.Item
                            label="车牌号码"
                            name="carNum"
                            rules={[
                                noEmpty
                            ]}
                        >

                            <Input placeholder='注:识别后自动填充,可修改' />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        {/* <Dragger {...config}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger> */}
                        <Upload
                            name="upPic"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                        // height:'165px'
                                        // minWidth: '200px'
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </Col>
                </Row>


            </Form>
        </>
    )
}
export default AddForm;