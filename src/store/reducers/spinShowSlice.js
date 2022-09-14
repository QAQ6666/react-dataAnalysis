/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 17:53:19
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-07 10:48:04
 * @FilePath: \thunk-toolkit\src\store\reducers\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'none',
}

export const spinShowSlice = createSlice({
    name: 'spinShow',
    initialState,
    reducers: {
        appear: (state) => {
            state.value = 'flex'
        },
        hide: (state) => {
            state.value = 'none'
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { appear, hide } = spinShowSlice.actions

export default spinShowSlice.reducer