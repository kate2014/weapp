import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getMyCollection = (params = {}) => {
  return xianRequest(params, `${HOST}/collection/allProducts`)
}
const addCollection = (params = {}) => {
  return xianRequest(params, `${HOST}/collection/add`)
}
const cancelCollection = (params = {}) => {
  return xianRequest(params, `${HOST}/collection/cancel`)
}
export default {
  getMyCollection,
  addCollection,
  cancelCollection
}
