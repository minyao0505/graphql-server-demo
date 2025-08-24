import type { ProductResolvers } from "../types";

export const Product: ProductResolvers = {
  seller: async (parent, __, { data }) => {
    const seller = await data.$users.findById({
      id: String(parent.sellerId),
    });

    if (!seller) {
      throw new Error(`Seller not found for product with id: ${parent.id}`);
    }

    return seller;
  },
  buyer: async (parent, __, { data }) => {
    const transaction = await data.$transactions.findById({
      id: String(parent.id),
    });

    if (!transaction) {
      return null; // Product hasn't been sold yet
    }

    const buyer = await data.$users.findById({ id: transaction.buyerId });

    return buyer || null;
  },
};
