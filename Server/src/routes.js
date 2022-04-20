import  express from 'express';
import Graphql from './graphql/index.js';

const router = express.Router()


/**
 * getRouter - used to register graphql servrer  and attach to the route
 * @returns {any}
 */
export async function getRouter() {

    // Graphql Singleton Class - creating server
    const gplServer = Graphql.createServer();

    // Starting the graphql server
                    await gplServer.start();
    
    // Endpoint used for health check 
    router.get("/health", (req,res) => {
        res.sendStatus(200);
    });

    // Enpont used for access graphql schema
    router.post('/graphql',(req,res,next)=>{
        next()
    } , gplServer.getMiddleware());
      
    return router;
}