import type { QueryResolvers } from "../../../types";

export const getProducts: NonNullable<QueryResolvers["getProducts"]> = async (
  _parent,
  _agrs,
  _context,
) => {
  // TODO - Exercise 2 - create a resolver to get a list of products
  return [
      {
        id: "random",
        name: "random",
        price: 0,
        sellerId: "random",
        datePosted: "random",
      },
    ]
};
