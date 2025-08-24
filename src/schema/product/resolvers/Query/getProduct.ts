import type { QueryResolvers } from "../../../types";

export const getProduct: NonNullable<QueryResolvers["getProduct"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // TODO - Extra exercise - create a resolver to get the product based on argument

  return { id: "random", name: "random", price: 0, sellerId: "randoms" };
};
