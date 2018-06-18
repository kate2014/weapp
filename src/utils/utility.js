
/**
 * @author chuck
 *
 * @date 2018/03/20
 */

import Configuration from '../common/config'
import _ from 'underscore'
import md5 from './md5'
// import api from '../api'

const { OSS_PARAM } = Configuration
/**
 * 通过数据库中的路径得出最终的路径
 *
 * @param {string} [url] [图片的路径]
 * @param {string} [pictureSize] [判断用oss的哪个后缀]
 *
 * @return {string} [最终的图片的路径]
 */
const splicePictureUrl = (url, pictureSize) => {
  let suffix = Configuration.OSS_IMG_ORIGINAL_PRODUCTMAIN
  switch (pictureSize) {
    case 'todayList': suffix = Configuration.OSS_IMG_ORIGINAL_TODAYLIST; break
    case 'banner': suffix = Configuration.OSS_IMG_ORIGINAL_BANNER; break
    case 'productDetail': suffix = Configuration.OSS_IMG_ORIGINAL_PRODUCTDETAIL; break
    case 'productSlide': suffix = Configuration.OSS_IMG_ORIGINAL_PRODUCTSLIDE; break
    case 'none': suffix = ''; break
    default: suffix = Configuration.OSS_IMG_ORIGINAL_PRODUCTMAIN
  }
  if (url.substring(0, 4) === 'http') {
    return `${url}${suffix}`
  }
  return `${Configuration.IMGHOST}${url}${suffix}`
}

/**
 * 对参数进行签名
 */

const xianSign = (obj) => {
  // 参数签名
  const arr = []
  for (const item in obj) {
    arr.push(`${item}=${encodeURIComponent(obj[item])}`)
  }
  const str = arr.sort().join('&')
  obj.sign = md5.hex_md5(str).toString().toUpperCase()

  return obj
}

/**
 * @author curry Liang
 * @description 小程序上传图片到阿里oss
 * @time 2018/03/27
 */
const uploadToOss = (file) => {
  const getFileName = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const platform = 'weapp'
    return `${platform}/${year}/${month}/${Date.now()}.${file.split('.')[file.split('.').length - 1]}`
  }
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: OSS_PARAM.oss_url, // oss_url
      filePath: file,
      name: `file`,
      formData: {
        Filename: `weapp/xian62/`,
        key: getFileName(),
        policy: OSS_PARAM.policy,
        OSSAccessKeyId: OSS_PARAM.access_key_id,
        signature: OSS_PARAM.signature,
        success_action_status: '200'
      },
      success: function(res) {
        console.log(res)
        resolve(`${OSS_PARAM.oss_url}/${getFileName()}`)
      },
      fail: function(res) {
        console.log(res)
        reject(res.statusCode)
      }
    })
  })
}

/**
 * 用公式计算两个经纬度之间的直线距离
 *
 * @param {startLng} 开始的经度
 * @param {startLat} 开始的纬度
 * @param {endLng} 结束的经度
 * @param {endLat} 结束的纬度
 *
 * @return {distance} 两个经纬度之间的直线距离（单位：公里）
 *
 */
const caculateDistance = ({ startLng, startLat, endLng, endLat }) => {
  const rad = (d) => d * Math.PI / 180.0
  const radStartLat = rad(startLat)
  const radEndLat = rad(endLat)
  const diffLat = radStartLat - radEndLat
  const diffLng = rad(startLng) - rad(endLng)
  const distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(diffLat / 2), 2) + Math.cos(radStartLat) * Math.cos(radEndLat) * Math.pow(Math.sin(diffLng / 2), 2))) * 6378.137
  return distance
}

/**
 * @description random str
 *
 * @param  {Number} len 随机字符串的长度
 *
 * @return {String}     长度为len的随机字符串
 */
const randomString = (len) => {
  len = len || 32
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  //  uninclude oOLl,9gq,Vv,Uu,I1 by default
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

// 生成签名
const generateSign = (data) => {
  data.appId = Configuration.APPID
  const arr = []
  for (const item in data) {
    arr.push(`${item}=${data[item]}`)
  }
  const preurl = `${arr.sort().join('&')}&key=${Configuration.PARTNER_KEY}`
  const str = preurl
  const sign = md5.hex_md5(str).toString().toUpperCase()
  return sign
}

const wechatPay = ({ prepay_id }, success, fail) => {
  const payParams = {
    'timeStamp': `${+new Date()}`,
    'nonceStr': randomString(24),
    'package': `prepay_id=${prepay_id}`,
    'signType': 'MD5'
  }
  wx.requestPayment({
    ...payParams,
    'paySign': generateSign(payParams),
    'success': function(res) {
      success()
    },
    'fail': function(res) {
      fail()
    }
  })
}

module.exports = {
  splicePictureUrl,
  xianSign,
  uploadToOss,
  caculateDistance,
  randomString,
  generateSign,
  wechatPay
}
