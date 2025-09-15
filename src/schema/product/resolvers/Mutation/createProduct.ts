import type { MutationResolvers } from "./../../../types.generated";

export const createProduct: NonNullable<
  MutationResolvers["createProduct"]
> = async (_parent, { input }, { data }) => {
  /* Implement Mutation.createProduct resolver logic here */
  const validUser = await data.$users.findById({
    id: input.sellerId,
  });

  if (!validUser) {
    throw new Error("Seller does not exist");
  }

  const result = await data.$products.createProduct(input);

  return result;
};
