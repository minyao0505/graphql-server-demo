import type { MutationResolvers } from "../../../types";

export const createProduct: NonNullable<MutationResolvers["createProduct"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // TODO - Exercise 3 - create a resolver for create a new product

  return { id: "random", name: "random", price: 0, sellerId: "randoms" };
};
