import "@babel/polyfill";
import express from 'express';
import http from 'http';
import config from 'config';
import httpContext from 'express-http-context'
import Logger  from './corelib/logger.js'
import {getRouter} from './routes.js'
const {app:{port=9000}} = config



async function createApp(){
  const app = express();
  app.use(httpContext.middleware);
  app.use((req, res, next)=>{
    if(req && req.headers && req.headers.origin){
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next()
  })
  const httpServer = http.createServer(app);
  const router = await getRouter()
  app.use(router);
  return app

}

async function main(){
  const app = await createApp();
  app.listen(port);
  Logger.info({message:`Listening on port http://localhost:${port}/`});
}


main();
