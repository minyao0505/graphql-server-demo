import type { ProductResolvers } from "../../types";

export const Product: ProductResolvers = {
  seller: async () => {
    // Demo
    return { id: "random", name: "random", contact: "random" };
  },
  buyer: async () => {
    // TODO - Exercise 4 - create a buyer resolver that return the user info of the buyer of the product
    return { id: "random", name: "random", contact: "random" };
  },
};
