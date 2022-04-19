import { gql } from 'apollo-server-express';

import ImageSchema from './Image/schema.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [
    linkSchema,
    ImageSchema
]