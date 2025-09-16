import type {
  DatabaseProduct,
  DatabaseTransaction,
  DatabaseUser,
} from "./types";

const users: DatabaseUser[] = [
  {
    id: "1",
    name: "user1",
    contact: "@user1",
  },
  {
    id: "2",
    name: "user2",
    contact: "@user2",
  },
  {
    id: "3",
    name: "user3",
    contact: "@user3",
  },
];

const products: DatabaseProduct[] = [
  {
    id: "1",
    name: "product1",
    price: 299.99,
    sellerId: "1",
    datePosted: "2025-09-01T00:00:00.000Z",
  },
  {
    id: "2",
    name: "product2",
    price: 89.99,
    sellerId: "3",
    datePosted: "2025-09-03T00:00:00.000Z",
  },
  {
    id: "3",
    name: "product3",
    price: 249.99,
    sellerId: "1",
    datePosted: "2025-10-02T00:00:00.000Z",
  },
  {
    id: "4",
    name: "product4",
    price: 159.99,
    sellerId: "2",
    datePosted: "2025-10-03T00:00:00.000Z",
  },
  {
    id: "5",
    name: "product5",
    price: 199.99,
    sellerId: "2",
    datePosted: "2025-11-01T00:00:00.000Z",
  },
];

const transactions: DatabaseTransaction[] = [
  {
    id: "1",
    productId: "2",
    buyerId: "2",
  },
  {
    id: "2",
    productId: "3",
    buyerId: "3",
  },
  {
    id: "3",
    productId: "5",
    buyerId: "3",
  },
];

export const data: {
  $users: {
    findById: (params: { id: string }) => Promise<DatabaseUser | null>;
    getAll: () => Promise<DatabaseUser[]>;
  };
  $products: {
    findById: (params: { id: string }) => Promise<DatabaseProduct | null>;
    getAll: (params: {
      status?: "RESERVED" | "ACTIVE";
    }) => Promise<DatabaseProduct[] | null>;
    createProduct: (params: {
      name: string;
      price: number;
      sellerId: string;
    }) => Promise<DatabaseProduct>;
    findBySeller: (params: { id: string }) => Promise<DatabaseProduct[] | null>;
    findByBuyer: (params: { id: string }) => Promise<DatabaseProduct[] | null>;
  };
  $transactions: {
    findById: (params: { id: string }) => Promise<DatabaseTransaction | null>;
    getAll: () => Promise<DatabaseTransaction[] | null>;
    createTransaction: (params: {
      productId: string;
      buyerId: string;
    }) => Promise<DatabaseTransaction>;
  };
} = {
  $users: {
    findById: async ({ id }) => {
      return users.find((user) => user.id === id) || null;
    },
    getAll: async () => {
      return users;
    },
  },
  $products: {
    findById: async ({ id }) => {
      return products.find((product) => product.id === id) || null;
    },
    getAll: async ({ status }) => {
      if (!products) {
        return null;
      }

      const reservedProductIds = new Set(
        transactions.map((tran) => tran.productId),
      );

      const filteredProducts = products.filter((product) => {
        switch (status) {
          case "RESERVED":
            return reservedProductIds.has(product.id);
          case "ACTIVE":
            return !reservedProductIds.has(product.id);
          default:
            return true;
        }
      });

      return filteredProducts;
    },
    createProduct: async ({ name, price, sellerId }) => {
      const id = String(Object.keys(products).length + 1);
      const product: DatabaseProduct = {
        id,
        name,
        price,
        sellerId,
        datePosted: new Date().toISOString(),
      };
      products.push(product);
      return product;
    },
    findBySeller: async ({ id }) => {
      return products.filter((product) => product.sellerId === id) || null;
    },
    findByBuyer: async ({ id }) => {
      const sales = transactions.filter(
        (transaction) => transaction.buyerId === id,
      );
      return (
        sales.map((sale) => {
          return products.find((product) => product.id === sale.productId)!;
        }) || null
      );
    },
  },
  $transactions: {
    findById: async ({ id }) => {
      return transactions.find((tran) => tran.productId === id) || null;
    },
    getAll: async () => {
      if (!transactions) {
        return null;
      }

      return transactions;
    },
    createTransaction: async ({ productId, buyerId }) => {
      const productIndex = products.findIndex(
        (product) => product.id === productId,
      );
      if (productIndex === -1) {
        throw new Error("Product not found");
      }

      const id = String(Object.keys(transactions).length + 1);
      const transaction: DatabaseTransaction = {
        id,
        productId,
        buyerId,
      };
      transactions.push(transaction);

      return transaction;
    },
  },
};
