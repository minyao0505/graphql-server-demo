import type { TransactionResolvers } from "../../types";

export const Transaction: TransactionResolvers = {
  /* Implement Transaction resolver logic here */
  product: async (parent, __, { data }) => {
    const product = await data.$products.findById({
      id: String(parent.productId),
    });

    if (!product) {
      throw new Error(`Product not found with id: ${parent.productId}`);
    }

    return product;
  },
  buyer: async (parent, __, { data }) => {
    const buyer = await data.$users.findById({
      id: String(parent.buyerId),
    });

    if (!buyer) {
      throw new Error(`Buyer not found with id: ${parent.buyerId}`);
    }

    return buyer;
  },
  seller: async (parent, __, { data }) => {
    const product = await data.$products.findById({
      id: String(parent.productId),
    });

    if (!product) {
      return null;
    }

    const seller = await data.$users.findById({ id: product.sellerId });

    if (!seller) {
      throw new Error(
        `Seller not found for product with id: ${parent.productId}`,
      );
    }

    return seller;
  },
};
