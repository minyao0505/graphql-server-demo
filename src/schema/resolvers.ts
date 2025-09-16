// import { createProduct } from "./product/resolvers/Mutation/createProduct";
// import { Product } from "./product/resolvers/Product";
// import { getProduct } from "./product/resolvers/Query/getProduct";
// import { getProducts } from "./product/resolvers/Query/getProducts";
// import { createTransaction } from "./transaction/resolvers/Mutation/createTransaction";
import { getTransactions } from "./transaction/resolvers/Query/getTransactions";
import { Transaction } from "./transaction/resolvers/Transaction";
import { user } from "./user/resolvers/Query/user";
// import { users } from "./user/resolvers/Query/users";
// import { User } from "./user/resolvers/User";
import type { Resolvers } from "./types";
import { GraphQLDateTime } from "graphql-scalars";

export const resolvers: Resolvers = {
  Date: GraphQLDateTime,
  Query: {
    // getProduct,
    // getProducts,
    user,
    // users,
    getTransactions,
  },
  Mutation: {
    // createProduct,
    // createTransaction,
  },
  // Product,
  Transaction,
  // User,
};
