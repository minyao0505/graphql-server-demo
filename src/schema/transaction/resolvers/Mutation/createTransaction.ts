import type {
  MutationResolvers,
  Product,
  User,
} from "./../../../types.generated";

export const createTransaction: NonNullable<
  MutationResolvers["createTransaction"]
> = async (_parent, { input }, { data }) => {
  /* Implement Mutation.createTransaction resolver logic here */
  const validUser: User | null = await data.$users.findById({
    id: input.buyerId,
  });

  if (!validUser) {
    throw new Error("Seller does not exist");
  }

  const validProduct: Product | null = await data.$products.findById({
    id: input.productId,
  });

  if (!validProduct) {
    throw new Error("Product does not exist");
  }

  const transaction = await data.$transactions.findById({
    id: input.productId,
  });

  if (transaction !== null) {
    throw new Error("Transaction existed");
  }

  const result = await data.$transactions.createTransaction(input);

  return result;
};
