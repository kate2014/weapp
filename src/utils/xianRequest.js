import wepy from 'wepy'
import Tip from './common'

import Utility from './utility'
// 校验机制 待定 暂时希望前台给校验码并加密，后台利用前台校验码解密判断是否是合法请求
/**
 * @description请求方法的封装
 * @author curry liang
 */
// 封装request请求
const tip = new Tip()
// const tip = new commonTip()
// console.log(tip)
//  [1、网络封装【完成】 2、返回值封装【完成】]
//  todo 封装signature(未完成)
//  { query: {}. method: 'GET' }
const xianRequest = async (params = {}, url) => {
  if (tip.checkNetWorkStatus()) {
    let data = params.query || {}
    // 传递参数
    data.requestTime = Date.now()
    data.clientId = 'xian62api'
    data = Utility.xianSign(data)
    const result = await wepy.request({
      url,
      method: params.method || 'GET',
      data,
      header: { 'Content-Type': 'application/json' }
    })
    tip.loaded()
    // 当返回值不是200说明api请求后台报错
    if (result.statusCode !== 200) {
      tip.modal(`服务器错误,${result.errMsg}`)
    }

    // 无权限访问
    if (result.data.code === 403) {
      tip.modal('服务器禁止访问')
      return {
        statusCode: 403,
        data: {}
      }
    }
    return result
  } else {
    console.log('该用户网络有问题！！！！！')
  }
}
// 并不完全支持es6/es7 使用export default {} 并不生效
module.exports = {
  xianRequest
}
