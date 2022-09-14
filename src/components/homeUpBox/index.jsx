/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 10:54:54
 * @LastEditors: LAPTOP-E57K1O16\yisa 2606292175@qq.com
 * @LastEditTime: 2022-09-13 17:27:00
 * @FilePath: \thunk-toolkit\src\components\homeUpBox\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UpBox from './upBox'
import './index.css'
import LeftBox from './leftBox'
import RightBox from './rightBox'
import { Carousel } from 'antd'
import Chart from "@/utils/chart";
import { getBanner,getEchartYdata,getuserCounter } from '@/api/home'
import { useEffect, useState } from 'react'

const HomeUpBox = () => {
    const [bannerTem,setBanner] = useState(null);
    const [xdata,setXdata] =  useState([])
    const [counter,setCounter] = useState({})
    useEffect(() => {
       
        let v2 = getEchartYdata()
        let v3 = getuserCounter()
        let v = getBanner()
        v.then((v) => {
            let l = v.data
            let l2 = []
            for (let i =0;i<5;i++){
                let r = l[i]
                l2.push(
                    <div key={i}>
                        <img src={'http://localhost:8080'+r.url} alt={r.alt} />
                    </div>
                )
            }
            setBanner(l2)
        })
        v2.then((v)=>{
            let l = v.data
            setXdata (l)
        })
        v3.then((v)=>{
            // console.log(v)
            setCounter(v.data)
        })



    }, [])
    function getxa(){
        let arr = []
        for (let i = 1;i<=30;i++){
            arr.push(`${i}号`)
        }
        return arr
    }

    const options = {
        tooltip: {},
        legend: {
            data: ["近30天数据统计"],
        },
        xAxis: {
            data: getxa(),
        },
        yAxis: {},
        series: [
            {
                name: "近30天数据统计",
                type: "bar",
                data:xdata,
            },
        ],
    };

    return (
        <>
            <div className='homeBox'>
                <div className='homeUpBox'>
                    <UpBox>
                        <LeftBox />
                    </UpBox>
                    <div className='carousel'>
                        <Carousel autoplay dots={true}>
                           {bannerTem}
                        </Carousel>
                    </div>
                    <UpBox>
                        <RightBox data={counter} />
                    </UpBox>

                </div>
                <div className='homeChart'>
                    <Chart options={options} />
                </div>
            </div>
        </>
    )
}

export default HomeUpBox;
