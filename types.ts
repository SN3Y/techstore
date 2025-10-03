export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isOnSale?: boolean;
}

export interface CategoriesProps {
  id: string,
  name: string,
  description: string,
  icon: string
  color: string
}