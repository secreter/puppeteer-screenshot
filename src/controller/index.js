/**
 * Created by pengchaoyang on 2018/11/9
 */
const Screenshot = require('../lib/Screenshot');
const Boom = require('boom');
const devices=require('../lib/DeviceDescriptors');
const deviceNames=devices.map(device=>device.name)
const AsyncFunction =Object.getPrototypeOf(async function(){}).constructor
const puppeteer=require('puppeteer')


const instance=new Screenshot();
(async ()=>{
  await instance.launch()
})();

async function getMethod (ctx) {
  let options={
    url:ctx.query.url,
    screenshot:{
      type:ctx.query.type,
      quality:ctx.query.quality,
      fullPage:ctx.query.fullPage,
      clip:{
        x:ctx.query.x,
        y:ctx.query.y,
        width:ctx.query.w,
        height:ctx.query.h,
      },
      omitBackground:ctx.query.o
    },
    waitFor:ctx.query.waitFor,
    device:ctx.query.device
  }
  if(!(options=checkOption(options,ctx))) return
  ctx.type = options.screenshot.type;
  try{
    ctx.body=await instance.getImage(options)
  }catch (e) {
    ctx.body=Boom.gatewayTimeout(e.message||'Service Unavailable').output;
  }
}

async function postMethod (ctx) {
  let params=ctx.request.body
  let options={
      url:params.url,
      screenshot:params.screenshot,
      html:params.html,
      style:params.style,
      script:params.script,
      waitFor:params.waitFor,
      device:params.device
  }
  if(!(options=checkOption(options,ctx))) return
  ctx.type = options.screenshot.type;
  try{
      ctx.body=await instance.getImage(options)
  }catch (e) {
      ctx.body=Boom.gatewayTimeout(e.message||'Service Unavailable').output;
  }
}

function checkOption(option,ctx){
    let screenshot=option.screenshot||{}
    let style=option.style
    let script =option.script
    screenshot.type=screenshot.type?screenshot.type:'png'

    if(!/^https?:\/\/.+/.test(option.url)){
        ctx.body=Boom.badRequest('invalid url').output;
        return false
    }
    if(screenshot.fullPage){
        delete screenshot.clip
    }
    if(!screenshot.clip){
        //pass
    }else if(screenshot.clip&&typeof screenshot.clip!=='object'){
        ctx.body=Boom.badRequest('invalid screenshot.clip').output;
        return false
    }else if(screenshot.clip.x==undefined&&
        screenshot.clip.y==undefined&&
        screenshot.clip.width==undefined&&
        screenshot.clip.height==undefined){
        delete screenshot.clip
    }else if(Number.isNaN(Number(screenshot.clip.x))||
        Number.isNaN(Number(screenshot.clip.y))||
        Number.isNaN(Number(screenshot.clip.width))||
        Number.isNaN(Number(screenshot.clip.height))){
        ctx.body=Boom.badRequest('invalid screenshot.clip').output;
        return false
    }else{
        screenshot.clip.x=Number(screenshot.clip.x)
        screenshot.clip.y=Number(screenshot.clip.y)
        screenshot.clip.width=Number(screenshot.clip.width)
        screenshot.clip.height=Number(screenshot.clip.height)
    }
    if(screenshot.type&&!/^jpeg$|^png$/.test(screenshot.type)){
        ctx.body=Boom.badRequest('invalid type. Optional [jpeg,png]').output;
        return false
    }
    if(screenshot.quality&&!Number.isInteger(screenshot.quality=+screenshot.quality)){
        ctx.body=Boom.badRequest(`quality is a number`).output;
        return false
    }
    screenshot.omitBackground=!!screenshot.omitBackground
    if(option.device&&deviceNames.indexOf(option.device)===-1){
        ctx.body=Boom.badRequest(`invalid device. Optional [${deviceNames}]`).output;
        return false
    }else{
        option.device=devices[option.device||'iPhone 8']
    }
    option.screenshot=screenshot

    if(option.waitFor&&isNumber(option.waitFor)){
      option.waitFor=+option.waitFor
    }
    if(style&&typeof style!=='object'){
        ctx.body=Boom.badRequest(`style must be an object. {url,content}`).output;
        return false
    }
    if(style&&style.content){
        delete style.url
    }

    if(script&&typeof script!=='object'){
        ctx.body=Boom.badRequest(`script must be an object. {url,content,type}`).output;
        return false
    }
    if(script&&script.content){
        delete script.url
    }

    return option
}

async function runner(ctx){
    const {code='return hello browser'}=ctx.request.body||ctx.query
    const exec=new AsyncFunction('runtime',`
        with(runtime){${code}}
    `)
    try{
        ctx.body= await exec({
            browser:instance.browser,
            puppeteer:puppeteer
        })
    }catch (e){
        console.error(e)
        ctx.body= {
            code:-1,
            error:e.message
        }
    }
}

function isNumber(str){
  return +str==str
}

module.exports={
  getMethod,
  postMethod,
  runner
}
