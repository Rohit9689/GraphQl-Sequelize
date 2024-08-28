const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { sequelize, ConnectDatabase, syncDB } = require("./DataBase/db");
const typeDefs = require("./Schema/typeDefs");
const resolvers = require("./Schema/resolvers");

const serverStart = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  ConnectDatabase()
    .then(syncDB)
    .catch((error) => console.log("Database sync error:", error));
  await server.start();

  server.applyMiddleware({ app });

  const PORT = 4001;

  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}${server.graphqlPath}`);
  });
};

serverStart();
