/**
 * Created by pengchaoyang on 2018/11/9
 */
const Router = require('koa-router');
const router = new Router();
const {getMethod,postMethod}=require('../controller/index')
router
  .get('/', getMethod)
  .post('/', postMethod)

module.exports=router.routes()