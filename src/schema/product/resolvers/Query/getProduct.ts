import type { Product, QueryResolvers } from "./../../../types.generated";

export const getProduct: NonNullable<QueryResolvers["getProduct"]> = async (
  _parent,
  { id },
  { data },
) => {
  /* Implement Query.getProduct resolver logic here */
  const result: Product = await data.$products.findById({ id });

  if (!result) {
    throw new Error(`Product not found for product with id: ${id}`);
  }

  return result;
};
