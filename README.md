# wepyStarter

> Wepy project(@author: curry)

## Build Setup

``` bash
# install dependencies
npm install

# start dev mode
npm run dev

# build for production with minification
npm run build

```
## 项目介绍
*     |---src                             小程序源代码文件夹
*     |     |---components                保存公共组件
*     |     |     |-- **.wepy         
*     |     |
*     |     |---assets                    项目静态资源
*     |     |---common
*     |     |     |-- config.js           配置文件
*     |     |     |-- constant.js         定义请求api路径
*     |     |---api                       封装api
*     |     |     |-- index.js
*     |     |---mixins                    wepy.mixin
*     |     |     |-- index.js
*     |     |---pages                     页面入口
*     |     |     |-- index.wepy
*     |     |---utils                     公共方法
*     |     |     |-- index.js
*     |
*     |---node_modules                    保存npm安装的包。
*     |---app.wpy                         小程序租入口
*     |---packages.json                   设置项目依赖的npm安装的packages。