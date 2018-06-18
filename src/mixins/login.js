import wepy from 'wepy'
import api from '../api/index'

/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
export default class LoginMixin extends wepy.mixin {
  data = {
  }

  methods = {

  }

  computed = {
  }

  watch = {
  }

  onShow() {
  }
  async getLogin() {
    const self = this
    let toRoute = ''
    if (this.$parent.__route__) {
      const goRoute = this.$parent.__route__
      const index = goRoute.indexOf('/')
      toRoute = goRoute.slice(index + 1)
    }
    wx.showModal({
      title: '授权提示',
      content: '检测到您没打开鲜盒子的登录权限，是否去设置打开？',
      success(res) {
        if (res.confirm) {
          wx.openSetting({
            success(res) {
              const { authSetting } = res
              if (authSetting['scope.userInfo']) {
                console.log('0000')
                wepy.setStorageSync('isAgree', true)
                self.login()
              }
              self.$apply()
            }
          })
        } else if (res.cancel) {
          // console.log('用户取消授权')
        }
      }
    })
  }
  toIndex() {
    this.$switch({ url: './index' })
  }
  async onLoad() {
  }
}
