/**
 * Created by pengchaoyang on 2018/11/2
 */
const puppeteer=require('puppeteer')
const devices=require('./DeviceDescriptors')
class Screenshot{
  constructor (){
    this.browser=null
  }

  async launch(){
    this.browser = await puppeteer.launch({args:[
        '--no-sandbox',
        '--disable-setuid-sandbox'
        ]});
  }

  async getImage({
                   url,
                   html,
                   screenshot={},
                   device=devices['iPhone 8'],
                   style,
                   script,
                   waitFor,
                   ...others
  }){
    const page = await this.browser.newPage();

    await page.emulate(device);                          //模拟器
    if(html){
      await page.setContent(html)                        //render html
    }else{
      await page.goto(url,{
        waitUntil: 'load',
        timeout: 9000
      });
    }
    if(typeof style==='object') {
      delete style.path
      await page.addStyleTag(style)
    }
    if(typeof script==='object'){
      delete script.path
      await page.addScriptTag(script)
    }
    if(waitFor) await page.waitFor(waitFor)

    delete screenshot.path
    let imageBuffer=await page.screenshot(screenshot);
    await page.close();
    return imageBuffer
  }

  async destroy(){
    await this.browser.close();
  }
}
module.exports=Screenshot
