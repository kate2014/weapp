import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getMyXianCard = (params = {}) => {
  return xianRequest(params, `${HOST}/xianCard/getByUserId`)
}
const getXianCardUseRecord = (params = {}) => {
  return xianRequest(params, `${HOST}/xianCard/getRecordsById`)
}
const bindXianCard = (params = {}) => {
  return xianRequest(params, `${HOST}/xianCard/activeCard`)
}
const getMyWealth = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/getUserWealth`)
}
// 首页模块相关的接口
export default {
  getMyXianCard,
  getXianCardUseRecord,
  bindXianCard,
  getMyWealth
}
