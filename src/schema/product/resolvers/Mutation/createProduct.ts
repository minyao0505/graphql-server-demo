import type { MutationResolvers } from "../../../types";

export const createProduct: NonNullable<MutationResolvers["createProduct"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Exercise 3

  return { id: "random", name: "random", price: 0, sellerId: "randoms" };
};
