/**
 * Created by pengchaoyang on 2018/11/2
 */

const fs = require('fs');
const koa = require('koa');
const onerror = require('koa-onerror');
const config = require('./config');
const Screenshot = require('./lib/Screenshot');
const routes = require('./router/index');
const allowedMethods = require('./router/allowedMethods');

const app = new koa();

onerror(app);
app.use(routes)
app.use(allowedMethods)

app.use(async ctx => {

});
app.listen(config.port);