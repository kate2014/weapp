import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const addAddress = (params = {}) => {
    return xianRequest(params, `${HOST}/address/addAddress`)
}
const updateAddress = (params = {}) => {
    return xianRequest(params, `${HOST}/address/updateAddress`)
}
const removeAddress = (params = {}) => {
    return xianRequest(params, `${HOST}/address/removeAddress`)
}
const addPicker = (params = {}) => {
    return xianRequest(params, `${HOST}/picker/addPicker`)
}
const updatePicker = (params = {}) => {
    return xianRequest(params, `${HOST}/picker/updatePicker`)
}
const removePicker = (params = {}) => {
    return xianRequest(params, `${HOST}/picker/removePicker`)
}

// 首页模块相关的接口
export default {
    addAddress,
    updateAddress,
    removeAddress,
    addPicker,
    updatePicker,
    removePicker
}