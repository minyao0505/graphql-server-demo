import type { QueryResolvers } from "../../../types";

export const getProducts: NonNullable<QueryResolvers["getProducts"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Exercise 2
  return [{ id: "random", name: "random", price: 0, sellerId: "randoms" }];
};
