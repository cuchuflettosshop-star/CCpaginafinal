type Product = {
  uuid: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  is_hidden: boolean;
  stock_quantity: number;
  created_at?: string;
}

export type { Product };