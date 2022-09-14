import {Card} from 'antd';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const CardList = ({isUl,item})=>{

    async function deleteData(){

    }

    return (
        
        <li>
            <Card
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    // <SettingOutlined key="setting" />,
                    // <EditOutlined key="edit" />
                    <span onClick={deleteData}>删除</span>,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >

                <div>
                    <div>{item}</div>
                    <div>马自达</div>
                    <div>time</div>
                    <div>点位</div>
                </div>
            </Card>

        </li>

    )
}

export default CardList;