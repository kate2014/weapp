// appid
const APPID = 'wx9285b76a963e3472'
// 接口地址
const API_HOST = ''

const IMAGEHOST = 'https://xian62-1.oss-cn-hangzhou.aliyuncs.com'

const IMGHOST = 'https://xian62-1.oss-cn-hangzhou.aliyuncs.com'

/**
 * OSS图片处理样式分隔符
 *
 * @type { String}
 */
const OSS_IMG_SPLIT = '?x-oss-process=style/'
/**
 * 商品主图的样meteor 式
 *
 * @type { [type]}
 */
const OSS_IMG_ORIGINAL_PRODUCTMAIN = `${OSS_IMG_SPLIT}m.prodcut.main`
/**
 * today页面商品主图的样式
 *
 * @type { [type]}
 */
const OSS_IMG_ORIGINAL_TODAYLIST = `${OSS_IMG_SPLIT}m.today.list`
/**
 * 首页banner图的样式
 *
 * @type { [type]}
 */

const OSS_IMG_ORIGINAL_BANNER = `${OSS_IMG_SPLIT}m.index.banner`
/**
 * 商品详情介绍页的样式
 *
 * @type { [type]}
 */
const OSS_IMG_ORIGINAL_PRODUCTDETAIL = `${OSS_IMG_SPLIT}m.prodcut.detail`
/**
 * 商品详情banner的样式
 *
 * @type { [type]}
 */
const OSS_IMG_ORIGINAL_PRODUCTSLIDE = `${OSS_IMG_SPLIT}m.prodcut.slide`
/**
 * 订单倒计时有效的时间（未支付的订单多久过期）
 *
 * @type { [type]}
 */
const ORDER_ACTIVE_TIME = 10 * 60 * 1000

/**
 * 上传 oss 配置参数
 */
const OSS_PARAM = {
  policy: 'eyJleHBpcmF0aW9uIjoiMjAyMC0wMS0wMVQxMjowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF1dfQ==',
  signature: 'ncGZkNiDqD5h4X9Pc3BpUsy5QqA=',
  access_key_id: 'LTAIiAiReetbiSpE',
  access_key_secret: 'CYSS4TRAGuwCsDe8KwisMumyvJgYS0',
  bucket: 'xian62-1',
  oss_url: 'https://xian62-1.oss-cn-hangzhou.aliyuncs.com',
  oss_host: 'http://oss-cdn.xian62.com'
}

/**
 * 微信商家号API密钥
 *
 * @type {String}
 */
const PARTNER_KEY = 'bMsXopJVdiMCLlnHnEWBEcMJV0Nh7sT2'

export default {
  APPID,
  API_HOST,
  IMAGEHOST,
  OSS_IMG_SPLIT,
  OSS_IMG_ORIGINAL_PRODUCTMAIN,
  OSS_IMG_ORIGINAL_TODAYLIST,
  OSS_IMG_ORIGINAL_BANNER,
  OSS_IMG_ORIGINAL_PRODUCTDETAIL,
  OSS_IMG_ORIGINAL_PRODUCTSLIDE,
  ORDER_ACTIVE_TIME,
  IMGHOST,
  OSS_PARAM,
  PARTNER_KEY
}
