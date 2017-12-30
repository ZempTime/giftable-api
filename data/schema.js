import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import mocks from './mocks'

const typeDefs = `
type Query {
  allGifts: [Gift]
}

type Gift {
  id: Int
  name: String
  note: String
  status: String
}

type Author {
  id: Int
  name: String
  gifts: [Gift]
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
