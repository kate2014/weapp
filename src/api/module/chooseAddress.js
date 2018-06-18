import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getUserAddress = (params = {}) => {
    return xianRequest(params, `${HOST}/address/getByUserId`)
}
const getXianbox = (params = {}) => {
    return xianRequest(params, `${HOST}/boxInfo/getAll`)
}
const getUserPicker = (params = {}) => {
    return xianRequest(params, `${HOST}/picker/getByUserId`)
}
const getPicker = (params = {}) => {
    return xianRequest(params, `${HOST}/picker/getById`)
}
const getAddress = (params = {}) => {
        return xianRequest(params, `${HOST}/address/getById`)
    }
    // 首页模块相关的接口
export default {
    getUserAddress,
    getUserPicker,
    getXianbox,
    getAddress,
    getPicker
}