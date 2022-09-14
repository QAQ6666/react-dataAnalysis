/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-09 15:17:28
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-31 09:49:01
 * @FilePath: \ant-react\antd-demo\craco.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')

module.exports = {
    webpack: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
  //   devServer: {
  //     proxy: {
  //         '/user': {
  //             // target: 'http://localhost:8080',
  //             // changeOrigin: true,
  //             // pathRewrite: {
  //             //     "^/user": ''
  //             // }
  //         }
  //     },
  // }
  }