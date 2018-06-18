import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getProductById = (params = {}) => {
  return xianRequest(params, `${HOST}/product/getById`)
}
export default {
  getProductById
}
