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

### font 

 - [ChenJiShi-YingBiXingShu130106-2.ttf][8]	
 - [YingHuaWuYu-2.ttf][9]	
 - [ZuiYouTi-2.ttf][10]	
 - [ShouZhangTi-2.ttf][11]	
 - [WangZhiShuFaZiTi-2.ttf][12]	
 - [JianKeMaoBiXingShu-2.ttf][13]	
 - [ShiJieNaMeDa-2.ttf][14]	
 - [JinXiHaoLong-1.otf][15]	
 - [YuShiXingShu-2.ttf][16]	
 - [FangZhengKaiTiJianTi-1.ttf][17]	
 - [FangZhengShuSongJianTi-1.ttf][18]
 - [370-B-v2-1.ttf][19]	
 - [YingZhangXingShu-2.ttf][20]	
 - [WeiRuanYaHei-1.ttf][21]	
 - [PingFang-Jian-ChangGuiTi-2.ttf][22]	
 - [BoLeTuYaTi-2.ttf][23]	


  [1]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagescreenshotoptions
  [2]: https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
  [3]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagescreenshotoptions
  [4]: https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js
  [5]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pageaddstyletagoptions
  [6]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pageaddscripttagoptions
  [7]: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/class-Page?id=pagewaitforselectororfunctionortimeout-options-args
  [8]: http://www.fonts.net.cn/font-35290944994.html
  [9]: http://www.fonts.net.cn/font-34713225111.html
  [10]: http://www.fonts.net.cn/font-34469200707.html
  [11]: http://www.fonts.net.cn/font-34361275263.html
  [12]: http://www.fonts.net.cn/font-33983589887.html
  [13]: http://www.fonts.net.cn/font-33979908809.html
  [14]: http://www.fonts.net.cn/font-33917191824.html
  [15]: http://www.fonts.net.cn/font-33527386169.html
  [16]: http://www.fonts.net.cn/font-34175359167.html
  [17]: http://www.fonts.net.cn/font-31561199974.html
  [18]: http://www.fonts.net.cn/font-31537398849.html
  [19]: http://www.fonts.net.cn/font-33216292055.html
  [20]: http://www.fonts.net.cn/font-33781266219.html
  [21]: http://www.fonts.net.cn/font-30931224951.html
  [22]: http://www.fonts.net.cn/font-33986225027.html
  [23]: http://www.fonts.net.cn/font-35905364399.html