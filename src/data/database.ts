type ProductStatus = 'SOLD' | 'PAYMENT_IN_PROCESS' | 'AVAILABLE';

export interface User {
  id: string;
  name: string;
  contact: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  status: ProductStatus;
  seller: string;
}

export interface Transaction {
  id: string;
  productId: string;
  buyer: string;
}

export const users: User[] = [
  {
    id: 'user1',
    name: 'Alice Johnson',
    contact: 'alice.johnson@email.com',
  },
  {
    id: 'user2',
    name: 'Bob Smith',
    contact: 'bob.smith@email.com',
  },
  {
    id: 'user3',
    name: 'Charlie Brown',
    contact: 'charlie.brown@email.com',
  },
];

export const products: Product[] = [
  {
    id: 'product1',
    name: 'Wireless Headphones',
    price: 299.99,
    status: 'AVAILABLE',
    seller: '1',
  },
  {
    id: 'product2',
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand for better ergonomics',
    price: 89.99,
    status: 'PAYMENT_IN_PROCESS',
    seller: '3',
  },
  {
    id: 'product3',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with heart rate monitor',
    price: 249.99,
    status: 'SOLD',
    seller: '1',
  },
  {
    id: 'product4',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical gaming keyboard',
    price: 159.99,
    status: 'AVAILABLE',
    seller: '2',
  },
  {
    id: 'product5',
    name: 'Portable Monitor',
    price: 199.99,
    status: 'SOLD',
    seller: '2',
  },
];

export const transaction: Record<string, string> = {
  product2: 'user2',
  product3: 'user3',
  product5: 'user3',
};
