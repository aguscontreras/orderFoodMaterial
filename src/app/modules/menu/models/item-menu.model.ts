export interface ItemMenuModel {
  id: number;
  name: string;
  price: number;
  description: string;
  category: { id: number; display_name: string };
  ingredients: { id: number; quantity: number; expanded: boolean }[];
  toppings: { id: number; expanded: boolean }[];
  sauces: { id: number }[];
  picture_url?: string;
}
