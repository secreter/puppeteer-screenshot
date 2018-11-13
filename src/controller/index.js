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
    url:ctx.query.url||'http://www.redream.cn',

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