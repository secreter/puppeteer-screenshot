/**
 * Created by pengchaoyang on 2018/11/2
 */

const fs = require('fs');
const koa = require('koa');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const config = require('./config');
const routes = require('./router/index');
const allowedMethods = require('./router/allowedMethods');

const app = new koa();

app.use(bodyParser());
onerror(app);
app.use(routes);
app.use(allowedMethods);

app.listen(config.port);