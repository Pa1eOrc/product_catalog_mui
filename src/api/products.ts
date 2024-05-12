import { Product } from "../types/Product";
import { ProductDeatails } from "../types/ProductDetails";
import { client } from "./httpClient";

export function getProducts(url: string) {
  return client.get<Product[]>(`/${url}.json`);
}

export function getProductsDetails(url: string) {
  return client.get<ProductDeatails[]>(`/${url}.json`);
}
