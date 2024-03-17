import { Product } from "../types/Product";

export function calculateDiscountPercentage(fullPrice: number, price: number) {
  if (fullPrice && price) {
    const discount = fullPrice - price;
    const discountPercentage = (discount / fullPrice) * 100;

    return discountPercentage.toFixed(2);
  }

  return 0;
}

export function filterProductsByAge(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    return productB.year - productA.year;
  });
}

export function sortProductsByPrice(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    return productB.price - productA.price;
  });
}

export function filterProductsByDiscount(products: Product[]): Product[] {
  return products.filter((product) => product.price < product.fullPrice);
}

export function sortProductsByAbsoluteDiscount(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    const absoluteDiscountA = calculateDiscountPercentage(
      productA.fullPrice,
      productA.price
    );
    const absoluteDiscountB = calculateDiscountPercentage(
      productB.fullPrice,
      productB.price
    );

    return Number(absoluteDiscountB) - Number(absoluteDiscountA);
  });
}

export const getNewModelsProducts = (products: Product[]) => {
  const filteredProductsByAge = filterProductsByAge(products);
  const filteredProductsByPrice = sortProductsByPrice(filteredProductsByAge);

  return filteredProductsByPrice.slice(0, 12);
};

export const getHotPriceProducts = (products: Product[]) => {
  const filteredProducts = filterProductsByDiscount(products);
  const sortedProducts =
    sortProductsByAbsoluteDiscount(filteredProducts);

  return sortedProducts.slice(0, 12);
};