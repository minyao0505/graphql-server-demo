import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { ProductMapper } from "./product/schema.mappers";
import { TransactionMapper } from "./transaction/schema.mappers";
import { UserMapper } from "./user/schema.mappers";
import { ResolverContext } from "../index";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
};

export type CreateProductInput = {
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  sellerId: Scalars["ID"]["input"];
};

export type CreateTransactionInput = {
  buyerId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
};

export type GetProductsResponse = {
  __typename?: "GetProductsResponse";
  result?: Maybe<Array<Product>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createProduct: Product;
  createTransaction: Transaction;
};

export type MutationcreateProductArgs = {
  input: CreateProductInput;
};

export type MutationcreateTransactionArgs = {
  input: CreateTransactionInput;
};

export type Product = {
  __typename?: "Product";
  buyer?: Maybe<User>;
  datePosted: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  seller: User;
};

export type ProductStatus = "ACTIVE" | "RESERVED";

export type Query = {
  __typename?: "Query";
  getProduct: Product;
  getProducts?: Maybe<GetProductsResponse>;
  user?: Maybe<User>;
  users?: Maybe<UsersResponse>;
};

export type QuerygetProductArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerygetProductsArgs = {
  status?: InputMaybe<ProductStatus>;
};

export type QueryuserArgs = {
  id: Scalars["ID"]["input"];
};

export type Transaction = {
  __typename?: "Transaction";
  buyer: User;
  id: Scalars["ID"]["output"];
  product: Product;
  seller?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  contact: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  productPurchased?: Maybe<Array<Product>>;
  productSold?: Maybe<Array<Product>>;
};

export type UsersResponse = {
  __typename?: "UsersResponse";
  result?: Maybe<Array<User>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateProductInput: CreateProductInput;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  CreateTransactionInput: CreateTransactionInput;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  GetProductsResponse: ResolverTypeWrapper<
    Omit<GetProductsResponse, "result"> & {
      result?: Maybe<Array<ResolversTypes["Product"]>>;
    }
  >;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<ProductMapper>;
  ProductStatus: ResolverTypeWrapper<"ACTIVE" | "RESERVED">;
  Query: ResolverTypeWrapper<{}>;
  Transaction: ResolverTypeWrapper<TransactionMapper>;
  User: ResolverTypeWrapper<UserMapper>;
  UsersResponse: ResolverTypeWrapper<
    Omit<UsersResponse, "result"> & {
      result?: Maybe<Array<ResolversTypes["User"]>>;
    }
  >;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateProductInput: CreateProductInput;
  String: Scalars["String"]["output"];
  Float: Scalars["Float"]["output"];
  ID: Scalars["ID"]["output"];
  CreateTransactionInput: CreateTransactionInput;
  DateTime: Scalars["DateTime"]["output"];
  GetProductsResponse: Omit<GetProductsResponse, "result"> & {
    result?: Maybe<Array<ResolversParentTypes["Product"]>>;
  };
  Mutation: {};
  Product: ProductMapper;
  Query: {};
  Transaction: TransactionMapper;
  User: UserMapper;
  UsersResponse: Omit<UsersResponse, "result"> & {
    result?: Maybe<Array<ResolversParentTypes["User"]>>;
  };
  Boolean: Scalars["Boolean"]["output"];
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type GetProductsResponseResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["GetProductsResponse"] = ResolversParentTypes["GetProductsResponse"],
> = {
  result?: Resolver<
    Maybe<Array<ResolversTypes["Product"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateProductArgs, "input">
  >;
  createTransaction?: Resolver<
    ResolversTypes["Transaction"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateTransactionArgs, "input">
  >;
};

export type ProductResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  buyer?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  datePosted?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductStatusResolvers = EnumResolverSignature<
  { ACTIVE?: any; RESERVED?: any },
  ResolversTypes["ProductStatus"]
>;

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  getProduct?: Resolver<
    ResolversTypes["Product"],
    ParentType,
    ContextType,
    RequireFields<QuerygetProductArgs, "id">
  >;
  getProducts?: Resolver<
    Maybe<ResolversTypes["GetProductsResponse"]>,
    ParentType,
    ContextType,
    Partial<QuerygetProductsArgs>
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, "id">
  >;
  users?: Resolver<
    Maybe<ResolversTypes["UsersResponse"]>,
    ParentType,
    ContextType
  >;
};

export type TransactionResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Transaction"] = ResolversParentTypes["Transaction"],
> = {
  buyer?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  contact?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  productPurchased?: Resolver<
    Maybe<Array<ResolversTypes["Product"]>>,
    ParentType,
    ContextType
  >;
  productSold?: Resolver<
    Maybe<Array<ResolversTypes["Product"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResponseResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["UsersResponse"] = ResolversParentTypes["UsersResponse"],
> = {
  result?: Resolver<
    Maybe<Array<ResolversTypes["User"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  DateTime?: GraphQLScalarType;
  GetProductsResponse?: GetProductsResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductStatus?: ProductStatusResolvers;
  Query?: QueryResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersResponse?: UsersResponseResolvers<ContextType>;
};
