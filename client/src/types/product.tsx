
  // types/product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  manufacturer: string;
  imageUrl: string;
  isActive: boolean;
  colors: Color[];
  sizes: Size[];
  ref: string;
  // Add other properties as needed
}

export interface Color {
  id: string;
  name: string;
}

export interface Size {
  id: string;
  name: string;
}
