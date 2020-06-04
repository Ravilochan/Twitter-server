import express from "express";
import { ApolloServer } from "apollo-server-express";
import "./config/db";
import constants from "./config/constants";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

import mocks from "./mocks";

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

app.use(express.json());
mocks();
app.listen(constants.PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `Server ready at http://localhost:${constants.PORT}${server.graphqlPath}`
    );
  }
});
