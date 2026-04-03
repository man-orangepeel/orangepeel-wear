import productsData from "../data/products.json";

export type ProductCollection = "warriors" | "wizards" | "cyphers";
export type ProductType = "tshirt" | "hoodie";
export type ProductGenre = "men" | "women" | "unisex";

export interface ProductColor {
  name: string;
  hex: string;
  src: string;
}

export interface Product {
  slug: string;
  name: string;
  collection: ProductCollection;
  type: ProductType;
  genre: ProductGenre;
  price: number;
  src: string;
  designSrc: string;
  description: string;
  longDescription: string;
  colors: ProductColor[];
  published: boolean;
  trendingPosition: number | null;
}

export const PRODUCTS: Product[] = productsData as Product[];

export const COLLECTION_LABELS: Record<ProductCollection, string> = {
  warriors: "Warriors",
  wizards: "Wizards",
  cyphers: "Cyphers",
};

export const COLLECTION_COLORS: Record<ProductCollection, string> = {
  warriors: "bg-[#ed760a] text-black",
  wizards: "bg-[#482B5F] text-white",
  cyphers: "bg-[#222] text-white",
};

export const COLLECTION_ACCENT: Record<ProductCollection, string> = {
  warriors: "#ed760a",
  wizards:  "#8b5cf6",
  cyphers:  "#6b7280",
};
