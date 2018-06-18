import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getInfo = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/getInfo`)
}
const getInfoByUserId = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/getByUserId`)
}
// 删除某个商品
const deleteByShoppingCarId = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/deleteByShoppingCarId`)
}
// 清空已售罄商品
const clearSoldOutProducts = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/clearSoldOutProducts`)
}
// 提交前做一次判断
const judgeIsValidate = (params = {}) => {
  return xianRequest(params, `${HOST}/shoppingCar/judgeIsValidate`)
}
// 首页模块相关的接口
export default {
  getInfo,
  getInfoByUserId,
  deleteByShoppingCarId,
  clearSoldOutProducts,
  judgeIsValidate
}
