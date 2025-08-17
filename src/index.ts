import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { data } from "./data";
import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";

interface ResolverContext {
  data: typeof data;
}

const startServer = async () => {
  const server = new ApolloServer<ResolverContext>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
    context: async () => {
      return {
        data: data,
      };
    },
  });

  console.log(`🚀 Apollo Server is running at ${url}`);
};

startServer();
