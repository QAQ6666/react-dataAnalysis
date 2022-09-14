/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 17:19:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-01 17:25:07
 * @FilePath: \thunk-toolkit\src\router\router.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoutes,Navigate  } from 'react-router-dom'

import * as pages from '@/pages/index'

const BaseRouter = () =>{
    const routes = useRoutes([
        {
            path:'/',
            element :<Navigate to="/main" />,
        },
        {
            path:'/main',
            element:<pages.Main />,
            children:[
                {
                    path:'',
                    element: <Navigate to="home" />,
                },
                {
                    path:'client',
                    element: <pages.Client />
                },
                {
                    path:'log',
                    element: <pages.OperationLog />
                },
                {
                    path:'data',
                    element: <pages.DataManage />
                }
                ,{
                    path:'home',
                    element: <pages.Home />
                }
            ]
        },
        {
            path:'/login',
            element:  <pages.Login />
        }
    ])
    return routes;
}
export default BaseRouter;