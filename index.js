import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

 const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers // resolvers 모던 스타일

 });
 server.start({port : 4444},(port) => console.log("Graphql Server Running", port));