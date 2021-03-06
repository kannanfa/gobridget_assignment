import { ApolloServer } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';
import  typeDefs from 'graphql/schema';
import  resolvers from 'graphql/resolver';
import httpContext from 'express-http-context';
import logger from 'corelib/logger';


/** Graphql Singleton class */
class Graphql{
  
  // Common server variable 
  server=null
  constructor(){
  }

  
/** getPlugins - this method used to register workflow plugins
 * with the help of this plugins we can debug the errors easily
 */
  
  getPlugins = () =>{

    const myPlugin = {
      async requestDidStart(requestContext) {
        const {query, variables} = requestContext.request
        return {
          async willSendResponse({response}) {
            const { errors = null, data} = response;
            logger.inbound({variables, query, errors, data});
          },
          async parsingDidStart() {
            return async (err) => {
              if (err) {
                logger.error(err);
              }
            }
          },
          async validationDidStart() {
            return async (errs) => {
              if (errs) {
                errs.forEach(err => logger.error(err));
              }
            }
          },
          async executionDidStart() {
            return {
              async executionDidEnd(err) {
                if (err) {
                  logger.error(err);
                }
              }
            };
          }
        };
      }
    }

    return myPlugin;
    
  }

  /** createServer -  Used to grate graphql server
   **/
  
  createServer=() =>{
    const myPlugin = this.getPlugins();
    this.server = new ApolloServer({
      typeDefs,  // All the tye definition  
      resolvers, // All the resolvers
      introspection: true, // It is enabled for development purpose
      playground: true, // It will help to test the graphql APIs
      context: ({ req }) => {  // it will help us to send common contex to all the queries and mutations
        const uuid =  uuidv4()
        httpContext.set('uuid', uuid)
        return { uuid };
      },
      plugins: [
        myPlugin
      ]

    });
    return this.server;
  }
}

export default new Graphql()
