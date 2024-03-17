import { Product } from "../types/Product";
import { client } from "./httpClient";

export function getProducts() {
  return client.get<Product[]>("/product.json");
}