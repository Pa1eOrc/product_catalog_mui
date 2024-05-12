import { mergeNewProductToAdd } from "../helperFunctions/otherFunctions";
import { Cart } from "../types/Cart";
import { Product } from "../types/Product";

const BASE_URL = "http://localhost:3000";

export async function getCart() {
  const response = await fetch(`${BASE_URL}/cart`);
  return await response.json();
}

export async function addNewProductInCart(newProduct: Product) {
  const productToAdd = mergeNewProductToAdd(newProduct);

  const response = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(productToAdd),
  });

  return response.json();
}

export async function deleteProductFromCart(itemId: string) {
  const response = await fetch(`${BASE_URL}/cart/${itemId}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function updateCountInCart(updatedCart: Cart) {
  const response = await fetch(`${BASE_URL}/cart/${updatedCart.itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(updatedCart),
  });

  return response.json();
}
