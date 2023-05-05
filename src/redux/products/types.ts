export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  brand: string;
  category: string;
  discountPecentage: number;
  images: string[];
  rating: number;
  stock: number;
}

export interface ProductRequest {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  id: number;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}
