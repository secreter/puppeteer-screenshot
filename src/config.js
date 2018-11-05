/**
 * Created by pengchaoyang on 2018/11/2
 */

const isProduction= process.env.NODE_ENV == 'production';
const port = process.env.PORT || 8555;

module.exports = {
  isProduction,
  port
}