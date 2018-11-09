/**
 * Created by pengchaoyang on 2018/11/9
 */
const Screenshot = require('../lib/Screenshot');
const screenshot=new Screenshot();
(async ()=>{
  await screenshot.launch()
})();

async function getMethod (ctx) {
  ctx.type = 'image/png';
  let options={
    url:'https://zhaoqize.github.io/puppeteer-api-zh_CN',
    style:{
      content:'body{background:#999}'
    },
    script:{
      content:`
        document.body.innerText='change by js'
      `
    },
    html:'<h1>hello</h1>h1>'
  }
  ctx.body=await screenshot.getImage(options)
}

async function postMethod (ctx) {
  ctx.body=await screenshot.getImage(options)
}

module.exports={
  getMethod,
  postMethod
}