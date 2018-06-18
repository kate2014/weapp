import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getAdvertise = (params = {}) => {
  return xianRequest(params, `${HOST}/advertise/getAdvertises`)
}
const loginIn = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/loginIn`)
}
const getHomeConfig = () => {
  return xianRequest({}, `${HOST}/config/getHome`)
}
const getHomeProduct = (params = {}) => {
  return xianRequest(params, `${HOST}/product/getByPage`)
}
const userExpected = (params = {}) => {
  return xianRequest(params, `${HOST}/expected/add`)
}
// 首页模块相关的接口
export default {
  getAdvertise,
  loginIn,
  getHomeConfig,
  getHomeProduct,
  userExpected
}
