import { xianRequest } from '../../utils/xianRequest'
import { HOST } from '../config'

const getClosestBoxID = (params = {}) => {
  return xianRequest(params, `${HOST}/common/getLastBoxInfo`)
}
export default {
  getClosestBoxID
}
