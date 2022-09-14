/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-11 10:48:09
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-06 10:10:35
 * @FilePath: \ant-react\antd-demo\src\components\echarts\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useCallback, useEffect, useRef } from 'react';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 设备分辨率
const dpr = window.devicePixelRatio;

const Chart = ({ renderType = 'canvas', options, style, components = [] }) => {
    const chartRef = useRef();
    const chartInstance = useRef(null);
    options['grid'] = {
      left: 30,
      // top: 0,
      right: 0,
      // bottom: 
    }
    //初始化图表，设置配置项
    const renderChart = useCallback(() => {
        const render = echarts?.getInstanceByDom(chartRef.current);
        if (render) {
            chartInstance.current = render;
        } else {
            chartInstance.current = echarts?.init(chartRef.current, null, {
                // width:style.width,height:style.height,
                renderer: renderType,
            });
        }
        chartInstance.current?.setOption(options);
    }, [chartRef, options, renderType]);

    useEffect(() => {
        // 注册必须的组件
        echarts?.use([CanvasRenderer, ...components]);
    }, [components]);

    //监听屏幕变化，重绘图表
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    // useEffect(()=>{
    //         console.log(  (chartRef.current) )
    // },[chartRef])
    // componentDidMount(()=>{

    // })
    useEffect(() => {
        renderChart();
        return () => {
            const { current } = chartInstance ?? {};
            if (current) {
                current.dispose();
            }
        };
    }, [chartInstance, renderChart]);

    const handleResize = () => {
        const chart = chartInstance?.current;
        if (chart) {
            chart.resize();
           
            
        }
    };
    // function omo(){
    //     chartInstance?.current.dispatchAction({
    //         type: 'highlight',
    //         seriesIndex: 0,
    //         dataIndex: 0
    //     });
    // }
    // function omout(){
    //     chartInstance?.current.dispatchAction({
    //         type: 'downplay',
    //         seriesIndex: 0,
    //         dataIndex: 0
    //     });
    // }

    return (
        <div
        // className='ss'
            ref={chartRef}
            style={{
                height: `${260 * dpr}px`,
                width: '100%',
                // height:'100%',
                ...style,
            }}
            // onMouseOver={omo}
            // onMouseOut={omout}
        />
    );
};

export default Chart;
