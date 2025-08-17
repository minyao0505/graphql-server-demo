import type { MutationResolvers, Product } from "./../../../types.generated";

export const createProduct: NonNullable<
  MutationResolvers["createProduct"]
> = async (_parent, { input }, { data }) => {
  /* Implement Mutation.createProduct resolver logic here */
  const result: Product = await data.$products.createProduct(input);

  return result;
};
