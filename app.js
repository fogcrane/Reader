const Koa = require('koa');
const Koa_static = require('koa-static-server');
const controller = require('koa-route');
const Service = require('./service/webAppService.js');

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.body = 'Hello World';
});

app.listen(3000,()=>{console.log("server is start");});
