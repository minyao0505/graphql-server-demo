import type { QueryResolvers } from "../../../types";

export const getProduct: NonNullable<QueryResolvers["getProduct"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // Extra exercise

  return { id: "random", name: "random", price: 0, sellerId: "randoms" };
};
