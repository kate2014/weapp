import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getOrderListByPage = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/getByPage`)
}
const getOrderDetailById = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/getById`)
}
const getProductDetailById = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/getGoodsById`)
}
const getOrderTraceById = (params = {}) => {
  return xianRequest(params, `${HOST}/express/getExpressArrById`)
}
const toPayCancelOrder = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/toPayCancelOrder`)
}
const payedCancelOrder = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/payedCancelOrder`)
}
const getRefundByOrderId = (params = {}) => {
  return xianRequest(params, `${HOST}/refundTrace/getRefundByOrderId`)
}
const delOrderById = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/delOrderById`)
}
const confirmGuestOrder = (params = {}) => {
  return xianRequest(params, `${HOST}/guestOrder/confirmGuestOrder`)
}
const applySale = (params = {}) => {
  return xianRequest(params, `${HOST}/refundTrace/applySale`)
}
const loginIn = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/loginIn`)
}
const register = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/register`)
}
const bingPhone = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/bingPhone`)
}
const getCode = (params = {}) => {
  return xianRequest(params, `${HOST}/userInfo/getCode`)
}
const feedback = (params = {}) => {
  return xianRequest(params, `${HOST}/feedback/insert`)
}
export default {
  getOrderListByPage,
  getOrderDetailById,
  getProductDetailById,
  getOrderTraceById,
  toPayCancelOrder,
  payedCancelOrder,
  getRefundByOrderId,
  delOrderById,
  confirmGuestOrder,
  applySale,
  loginIn,
  register,
  bingPhone,
  getCode,
  feedback
}
