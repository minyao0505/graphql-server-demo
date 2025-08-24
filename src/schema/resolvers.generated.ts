/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { getProduct as Query_getProduct } from "./product/resolvers/Query/getProduct";
import { getProducts as Query_getProducts } from "./product/resolvers/Query/getProducts";
import { user as Query_user } from "./user/resolvers/Query/user";
import { users as Query_users } from "./user/resolvers/Query/users";
import { createProduct as Mutation_createProduct } from "./product/resolvers/Mutation/createProduct";
import { createTransaction as Mutation_createTransaction } from "./transaction/resolvers/Mutation/createTransaction";
import { createUser as Mutation_createUser } from "./user/resolvers/Mutation/createUser";
import { GetProductsResponse } from "./product/resolvers/GetProductsResponse";
import { Product } from "./product/resolvers/Product";
import { Transaction } from "./transaction/resolvers/Transaction";
import { User } from "./user/resolvers/User";
export const resolvers: Resolvers = {
  Query: {
    getProduct: Query_getProduct,
    getProducts: Query_getProducts,
    user: Query_user,
    users: Query_users,
  },
  Mutation: {
    createProduct: Mutation_createProduct,
    createTransaction: Mutation_createTransaction,
    createUser: Mutation_createUser,
  },

  GetProductsResponse: GetProductsResponse,
  Product: Product,
  Transaction: Transaction,
  User: User,
};
