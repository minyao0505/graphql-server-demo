import type { ResolverContext } from "..";
import type {
  DatabaseProduct,
  DatabaseTransaction,
  DatabaseUser,
} from "../data";
import type { IResolvers } from "@graphql-tools/utils";

export type Resolver<Parent, Args, Result> = (
  parent: Parent,
  args: Args,
  context: ResolverContext,
) => Promise<Result> | Result;

interface QueryArgs {
  user: { id: string };
  getProduct: { id: string };
  getProducts: { status?: "SOLD" | "AVAILABLE" };
}

interface MutationArgs {
  createUser: { input: { name: string; contact: string } };
  createProduct: { input: { name: string; price: number; sellerId: string } };
  createTransaction: { input: { productId: string; buyerId: string } };
}

export interface QueryResolvers {
  user: Resolver<Record<string, never>, QueryArgs["user"], DatabaseUser | null>;
  users: Resolver<
    Record<string, never>,
    Record<string, never>,
    { result: DatabaseUser[] }
  >;
  getProduct: Resolver<
    Record<string, never>,
    QueryArgs["getProduct"],
    DatabaseProduct
  >;
  getProducts: Resolver<
    Record<string, never>,
    QueryArgs["getProducts"],
    { result: DatabaseProduct[] }
  >;
}

export interface MutationResolvers {
  createUser: Resolver<
    Record<string, never>,
    MutationArgs["createUser"],
    DatabaseUser
  >;
  createProduct: Resolver<
    Record<string, never>,
    MutationArgs["createProduct"],
    DatabaseProduct
  >;
  createTransaction: Resolver<
    Record<string, never>,
    MutationArgs["createTransaction"],
    DatabaseTransaction
  >;
}

export interface ProductResolvers {
  seller: Resolver<DatabaseProduct, Record<string, never>, DatabaseUser>;
  buyer: Resolver<DatabaseProduct, Record<string, never>, DatabaseUser | null>;
}

export interface UserResolvers {
  productSold: Resolver<
    DatabaseUser,
    Record<string, never>,
    DatabaseProduct[] | null
  >;
  productPurchased: Resolver<
    DatabaseUser,
    Record<string, never>,
    DatabaseProduct[] | null
  >;
}

export interface TransactionResolvers {
  product: Resolver<
    DatabaseTransaction,
    Record<string, never>,
    DatabaseProduct
  >;
  buyer: Resolver<DatabaseTransaction, Record<string, never>, DatabaseUser>;
  seller: Resolver<
    DatabaseTransaction,
    Record<string, never>,
    DatabaseUser | null
  >;
}

export interface Resolvers extends IResolvers<unknown, ResolverContext> {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
  Product: ProductResolvers;
  User: UserResolvers;
  Transaction: TransactionResolvers;
}
