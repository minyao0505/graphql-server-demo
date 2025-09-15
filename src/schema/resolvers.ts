import { createProduct } from "./product/resolvers/Mutation/createProduct";
import { Product } from "./product/resolvers/Product";
import { getProduct } from "./product/resolvers/Query/getProduct";
import { getProducts } from "./product/resolvers/Query/getProducts";
import { createTransaction } from "./transaction/resolvers/Mutation/createTransaction";
import { Transaction } from "./transaction/resolvers/Transaction";
import { createUser } from "./user/resolvers/Mutation/createUser";
import { user } from "./user/resolvers/Query/user";
import { users } from "./user/resolvers/Query/users";
import { User } from "./user/resolvers/User";
import type { Resolvers } from "./types";
import { GraphQLDateTime } from "graphql-scalars";

export const resolvers: Resolvers = {
  Date: GraphQLDateTime,
  Query: {
    getProduct,
    getProducts,
    user,
    users,
  },
  Mutation: {
    createProduct,
    createTransaction,
    createUser,
  },

  Product,
  Transaction,
  User,
};
