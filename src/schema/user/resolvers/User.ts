import type { UserResolvers } from "./../../types.generated";

export const User: UserResolvers = {
  /* Implement User resolver logic here */
  productSold: async (parent, __, { data }) => {
    const products = await data.$products.findBySeller({
      id: String(parent.id),
    });
    return products;
  },
  productPurchased: async (parent, __, { data }) => {
    const products = await data.$products.findByBuyer({
      id: String(parent.id),
    });
    return products;
  },
};
