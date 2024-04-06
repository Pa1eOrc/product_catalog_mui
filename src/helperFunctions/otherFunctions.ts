import { Product } from "../types/Product";

export function getArrayLength(array: Product[], perPage: number) {
  return array.length - perPage;
}

export function getPageCount(length: number, perPage: number) {
  return Array.from(
    { length: Math.ceil(length / perPage) },
    (_, index) => index + 1
  );
}

export function getPerPage(length: number, perPage: string) {
  return perPage === "all" ? length : +perPage;
}

export function getStartIndex(perPageToNum: number, page: number) {
  return (page - 1) * perPageToNum;
}

export function getShopLinksNameAndLength(products: Product[]) {
  const links: { [key: string]: number} = {};

  products.forEach(product => {
    if (!Object.keys(links).includes(product.category)) {
      links[product.category] = 1;
    } else {
      links[product.category]++;
    }
  })

  return links;
}

export function getLinkTitle(link: string) {
  let linkName = "";
  if (link === "phones") {
    linkName = "Mobile phones";
  }

  if (link === "tablets") {
    linkName = "Tablets";
  }

  if (link === "accessories") {
    linkName = "Accessories";
  }

  return linkName;
}  
