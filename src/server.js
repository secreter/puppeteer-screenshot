/**
 * Created by pengchaoyang on 2018/11/2
 */

const fs = require('fs');
const koa = require('koa');
const onerror = require('koa-onerror');
const config = require('./config');
const Screenshot = require('./lib/Screenshot');

const app = new koa();

onerror(app);

app.use(async ctx => {
  let s=new Screenshot()
  await s.launch()
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
  ctx.body=await s.getImage(options)
});
app.listen(config.port);