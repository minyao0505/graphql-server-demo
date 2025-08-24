import { createProduct } from "./schema/product/Mutation/createProduct";
import { Product } from "./schema/product/Product";
import { getProduct } from "./schema/product/Query/getProduct";
import { getProducts } from "./schema/product/Query/getProducts";
import { createTransaction } from "./schema/transaction/Mutation/createTransaction";
import { Transaction } from "./schema/transaction/Transaction";
import { createUser } from "./schema/user/Mutation/createUser";
import { user } from "./schema/user/Query/user";
import { users } from "./schema/user/Query/users";
import { User } from "./schema/user/User";
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
