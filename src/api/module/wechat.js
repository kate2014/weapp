import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const wechatPay = (params = {}) => {
  return xianRequest(params, `${HOST}/wechat/wechatPay`)
}

const freeCharge = (params = {}) => {
  return xianRequest(params, `${HOST}/wechat/freeCharge`)
}

export default {
  wechatPay,
  freeCharge
}
