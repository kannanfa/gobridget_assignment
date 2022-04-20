import "@babel/polyfill";
import express from 'express';
import http from 'http';
import config from 'config';
import httpContext from 'express-http-context'
import Logger  from './corelib/logger.js'
import {getRouter} from './routes.js'
const {app:{port=9000}} = config



/**
 * createApp - It will help us to init the express and register graphql server
 * @returns {any}
 */
async function createApp(){
  
  //creating express instanse 
  const app = express();
  app.use(httpContext.middleware);
  app.use((req, res, next)=>{

    // Enable cors for local development
    if(req && req.headers && req.headers.origin){
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next()
  })

  // Registering server
  http.createServer(app);

  // Get all routes for this application
  const router = await getRouter()

  // attaching routes to the app
  app.use(router);

  // returing the app 
  return app

}

/**
 * main - It will start the app in given port
 * @returns {any}
 */
async function main(){
  const app = await createApp();
  app.listen(port);
  Logger.info({message:`Listening on port http://localhost:${port}/`});
}


main();
