import  express from 'express';
import Graphql from './graphql/index.js';

const router = express.Router()


export async function getRouter() {

    const gplServer = Graphql.createServer();
                    await gplServer.start();
    router.get("/health", (req,res) => {
        res.sendStatus(200);
    });

    router.post('/graphql',(req,res,next)=>{
        next()
    } , gplServer.getMiddleware());
      
    return router;
}