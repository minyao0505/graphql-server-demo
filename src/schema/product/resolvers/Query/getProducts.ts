import type { Product, QueryResolvers } from "./../../../types.generated";

export const getProducts: NonNullable<QueryResolvers["getProducts"]> = async (
  _parent,
  { status },
  { data },
) => {
  /* Implement Query.getAllProducts resolver logic here */
  const result: Product[] = await data.$products.getAll({ status });

  if (!result) {
    throw new Error("No products available");
  }

  return { result };
};
