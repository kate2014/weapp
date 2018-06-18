
import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getNewById = (params = {}) => {
  return xianRequest(params, `${HOST}/activitys/getNewById`)
}

const receiveNew = (params = {}) => {
  return xianRequest(params, `${HOST}/activitys/receiveNew`)
}
const getMyInviteData = (params = {}) => {
  return xianRequest(params, `${HOST}/activitys/getMyInviteData`)
}

// 首页模块相关的接口
export default {
  getNewById,
  receiveNew,
  getMyInviteData
}
