export interface DatabaseUser {
  id: string;
  name: string;
  contact: string;
}

export interface DatabaseProduct {
  id: string;
  name: string;
  price: number;
  sellerId: string;
}

export interface DatabaseTransaction {
  id: string;
  productId: string;
  buyerId: string;
}
