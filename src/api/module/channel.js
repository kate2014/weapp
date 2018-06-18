import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getProductListByCategoryId = (params = {}) => {
  return xianRequest(params, `${HOST}/product/getByCategory`)
}
const getAllCategory = (params = {}) => {
  return xianRequest(params, `${HOST}/category/getMainCategorys`)
}
// 首页模块相关的接口
export default {
  getProductListByCategoryId,
  getAllCategory
}
