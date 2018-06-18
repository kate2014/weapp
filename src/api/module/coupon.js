import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getMyCoupon = (params = {}) => {
  return xianRequest(params, `${HOST}/coupon/getByUserId`)
}
export default {
  getMyCoupon
}
