import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getProductByKeyword = (params = {}) => {
  return xianRequest(params, `${HOST}/searchLog/getProduct`)
}
const getMySearchReocrd = (params = {}) => {
  return xianRequest(params, `${HOST}/searchLog/getMySearchLog`)
}
const deleteMySearchRecord = (params = {}) => {
  return xianRequest(params, `${HOST}/searchLog/delete`)
}
export default {
  getProductByKeyword,
  getMySearchReocrd,
  deleteMySearchRecord
}
