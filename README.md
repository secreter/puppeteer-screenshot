# sreenshot



### 

#### GET /   可[参考][1]
| arguments  | default  | required  | desc  |
|---|---|---|---|
|  url | -  | true  | sreenshot webpage url  |
|  type | png  | false  | image type  |
| quality   | -  | false  | 图片质量, 可选值 0-100. png 类型不适用  |
| fullPage  | true  | false  | 对完整的页面截图  |
| x  | 0  | false  | 裁剪区域相对于左上角（0， 0）的x坐标  |
| y  | 0  | false  |  裁剪区域相对于左上角（0， 0）的y坐标  |
| w  |  200 |  false |  裁剪的宽度 |
| h  |  200 |  false |  裁剪的高度 |
| o  |  false | false  | 隐藏默认的白色背景，背景透明  |
| device  | iPhone 8  | false  | 模拟设备，可选值[参考][2]  |
|   |   |   |   |

### POST /
| arguments  | type | default  | required  | desc  |
|---|---|---|---| --- |
| url  | string  | -  | false  |  和html属性至少有一个，html属性优先级高    |
| html  | string  | -  | false  | 要渲染的html代码   |
| screenshot  | object  | -  | false  |  [参考][3]  |
| device  | string  | iPhone 8  | false  |  可选值[参考][4]  |
|  style | string  | -  | false  | [参考][5]   |
| script  | string  | -  | false  | [参考][6]   |
|  waitFor | string/number  | -  | false  |  [参考][7]  |


  [1]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagescreenshotoptions
  [2]: https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
  [3]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagescreenshotoptions
  [4]: https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
  [5]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pageaddstyletagoptions
  [6]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pageaddscripttagoptions
  [7]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagewaitforselectororfunctionortimeout-options-args