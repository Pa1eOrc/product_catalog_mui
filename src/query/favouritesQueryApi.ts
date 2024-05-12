import { Product } from "../types/Product";

const BASE_URL = "http://localhost:3000";

export async function getFavourites() {
    const response = await fetch(`${BASE_URL}/favourites`);
    return await response.json();
}

export async function addNewFavouriteProduct(
  newProduct: Product,
) {
  const response = await fetch(`${BASE_URL}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(newProduct),
  });

  return response.json();
}

export async function deleteFavouriteProduct(productId: string) {
  const response = await fetch(`${BASE_URL}/favourites/${productId}`, {
    method: "DELETE",
  });

  return response.json();
}