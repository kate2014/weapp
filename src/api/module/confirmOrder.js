
import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'
// 获取确认订单页面的信息
const getSubmitInfo = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/getSubmitInfo`)
}

const submitOrder = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/submitOrder`)
}

const paySuccess = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/paySuccess`)
}

// 首页模块相关的接口
export default {
  getSubmitInfo,
  submitOrder,
  paySuccess
}
