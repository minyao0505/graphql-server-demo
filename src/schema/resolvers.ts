import { createProduct } from "./product/Mutation/createProduct";
import { Product } from "./product/Product";
import { getProduct } from "./product/Query/getProduct";
import { getProducts } from "./product/Query/getProducts";
import { createTransaction } from "./transaction/Mutation/createTransaction";
import { Transaction } from "./transaction/Transaction";
import { createUser } from "./user/Mutation/createUser";
import { user } from "./user/Query/user";
import { users } from "./user/Query/users";
import { User } from "./user/User";
import type { Resolvers } from "./types";

export const resolvers: Resolvers = {
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
