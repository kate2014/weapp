// tip工具类
/**
 * @author curry liang
 * 以下类工具编写参考文档 https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html
 */

import wepy from 'wepy'
export default class Tip {
  constructor() {
    this.isLoading = false
  }
  // 加载中
  /**
   * 
   * @param {*} title 
   */
  loading(title = '加载中') {
    if (this.isLoading) {
      return null
    }
    this.isLoading = true
    wx.showLoading({
      title,
      mask: true
    })
  }
  // 加载完毕
  loaded() {
    if (this.isLoading) {
      this.isLoading = false
      wx.hideLoading()
    }
  }
  // toast 提示封装
  toast(title, image = '', icon = 'none', duration = 500, callback) {
    setTimeout(() => {
      wx.showToast({
        title,
        image,
        icon,
        mask: true,
        duration
      })
    }, 300)
    if (callback) {
      setTimeout(() => {
        callback()
      }, 500)
    }
  }
  // modal
  modal(text, title = '提示') {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: false,
        success: res => {
          resolve(res);
        },
        fail: res => {
          reject(res);
        }
      })
    })
  }
  // 网络连接验证
  checkNetWorkStatus() {
    let status = true
    wx.getNetworkType({
      success: (res) => {
        // 2g,3g,4g,wifi,none,unknown
        const networkType = res.networkType
        if (networkType === 'none') {
          // 没有网络连接
          wx.showToast({
            title: '没有网络连接，请检查您的网络设置',
            icon: 'none',
            duration: 2000
          })
          status = false
        } else if (networkType === 'unknown') {
          // 未知的网络类型
          wx.showToast({
            title: '未知的网络类型，请检查您的网络设置',
            icon: 'none',
            duration: 2000
          })
          status = false
        }
      }
    })
    return status
  }
}
