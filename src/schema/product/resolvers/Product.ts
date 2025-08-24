import type { ProductResolvers } from "../../types";

export const Product: ProductResolvers = {
  seller: async () => {
    // Demo
    return { id: "random", name: "random", contact: "random" };
  },
  buyer: async () => {
    // Exercise 4
    return { id: "random", name: "random", contact: "random" };
  },
};
