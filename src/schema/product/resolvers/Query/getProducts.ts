import type { QueryResolvers } from "./../../../types.generated";

export const getProducts: NonNullable<QueryResolvers["getProducts"]> = async (
  _parent,
  { status },
  { data },
) => {
  /* Implement Query.getAllProducts resolver logic here */
  const params = status ? { status } : {};
  const result = await data.$products.getAll(params);

  if (!result) {
    throw new Error("No products available");
  }

  return { result };
};
