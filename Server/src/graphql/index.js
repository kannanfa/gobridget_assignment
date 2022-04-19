import { ApolloServer } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';
import  typeDefs from 'graphql/schema';
import  resolvers from 'graphql/resolver';
import httpContext from 'express-http-context';
import logger from 'corelib/logger';


class Graphql{
  server=null
  constructor(){
  }
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
  createServer=() =>{
    const myPlugin = this.getPlugins();
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,
      playground: true,
      context: ({ req }) => {
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
