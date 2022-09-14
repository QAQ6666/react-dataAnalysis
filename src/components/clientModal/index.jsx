/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 16:49:10
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-06 11:36:18
 * @FilePath: \thunk-toolkit\src\components\clientModal\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import ClientUpdateForm from '@/components/clientUpdateForm';

import ModalTemplate from '../modalTemplate'

const ClientModal = ({ visible, setVisible }) => {
    return (
        <>
        <ModalTemplate Children={ClientUpdateForm} visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ClientModal;