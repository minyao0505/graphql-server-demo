import type { MutationResolvers } from "./../../../types.generated";

export const createTransaction: NonNullable<
  MutationResolvers["createTransaction"]
> = async (_parent, { input }, { data }) => {
  /* Implement Mutation.createTransaction resolver logic here */
  const transaction = await data.$transactions.findById({
    id: input.productId,
  });

  if (transaction !== null) {
    throw new Error("Transaction existed");
  }

  const result = await data.$transactions.createTransaction(input);

  return result;
};
