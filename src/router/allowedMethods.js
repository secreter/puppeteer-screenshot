/**
 * Created by pengchaoyang on 2018/11/9
 */
const Router = require('koa-router');
const Boom = require('boom');
const router = new Router();

module.exports=router.allowedMethods({
  throw: false,
  notImplemented: () => Boom.notImplemented(),
  methodNotAllowed: () => Boom.methodNotAllowed('that method is not allowed')
})