
/** 
 * This Object will give as Graphql instanse with basic URI information configuration needed all over the application
 * */

import { GraphQLClient } from 'graphql-request'

const URL = "http://localhost:9000/graphql"
const client = new GraphQLClient(URL);

export default client;