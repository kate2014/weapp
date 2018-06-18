import wepy from 'wepy'
import _ from 'underscore'
/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
export default class ShopCar extends wepy.mixin {
  isOverStoreLimit(shopCarData, product) {
    const { amount } = product
    const productInShopCar = _.findWhere(shopCarData, { productId: product._id })
    if (amount === 0) {
      this.showToast('当前商品已抢光~')
      return true
    }
    if (productInShopCar) {
      // switch (sendWay) {
      //   case 1: if (productInShopCar.amount >= xkAmount) { this.showToast(`只剩${xkAmount}份啦~`); return true } return false
      //   case 2: if (productInShopCar.amount >= zkAmount) { this.showToast(`只剩${zkAmount}份啦~`); return true } return false
      // }
      if (productInShopCar.amount >= amount) { this.showToast(`只剩${amount}份啦~`); return true } return false
    }
    return false
  }
  mergeShopDataIntoProduct(shopCarData, products) {
    products.forEach(element => {
      const {
        _id,
        amount
      } = element
      const productInShopCar = _.findWhere(shopCarData, {
        productId: _id
      })
      if (productInShopCar) {
        if (productInShopCar.amount >= amount) {
          element.selectNumber = amount
        } else {
          element.selectNumber = productInShopCar.amount
        }
      } else {
        element.selectNumber = 0
      }
    })
  }
  updateOrInsertNumIntoShopCar(shopCarData, product) {
    const productInShopCar = _.findWhere(shopCarData, { productId: product._id })
    if (productInShopCar) {
      product.selectNumber += 1
      productInShopCar.amount += 1
      if (productInShopCar._id) {
        productInShopCar.status = 'modify'
      }
    } else {
      product.selectNumber = 1
      shopCarData.push({
        amount: 1,
        productId: product._id,
        categoryId: product.categoryId[0],
        status: 'add'
      })
    }
  }
  subOrDeleteNumFromShopCar(shopCarData, product) {
    const productInShopCar = _.findWhere(shopCarData, { productId: product._id })
    if (productInShopCar._id) {
      productInShopCar.status = 'modify';
    }
    const index = _.findIndex(shopCarData, {
      productId: product._id
    })
    if (product.selectNumber === 1) {
      product.selectNumber = 0
      if (productInShopCar._id) {
        productInShopCar.amount = 0
      } else {
        shopCarData.splice(index, 1)
      }
    } else {
      product.selectNumber -= 1
      productInShopCar.amount -= 1
    }
  }
  showToast(title) {
    wx.showToast({
      title,
      icon: 'none',
      duration: 600
    })
  }
}
