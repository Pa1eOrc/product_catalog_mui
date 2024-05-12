import { Cart } from "../types/Cart";
import { Product } from "../types/Product";
import { imgFormatFunction } from "./imgFormatFunctions";

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

export const checkIsProductAdded = (products: Product[] | Cart[], checkedId: string) => {
  if (products && checkedId) {
    return products.some((product) => product.itemId === checkedId);
  }
};

export const getBreadcrumbsParams = (pathname: string) => { 
  const splitedParams = pathname.slice(1).split("/"); 
  const params = splitedParams.map(param => {
    if (param.includes("-")) {
      return param.split("-").join(" ");
    } 
    return param;
  });
    return params;
};

export function mergeNewProductToAdd(product: Product) {
  const { price, id, itemId, name, image: originalImage } = product;
  const formatedImg = imgFormatFunction(itemId, originalImage);
  return { price, id, itemId, name, formatedImg, count: 1 };
}

export const getItemLocation = (
  pathname: string,
  itemId: string,
  category: string
) => {
  const checkPathname = pathname.includes("favourites")? pathname.replace("/favourites", category) : category;
  
  return `/${checkPathname}/${itemId}`;
};

export const productDetailsLinkCreator = (pathname: string, currentOption: string, optionToUpdate: string) => {
  return pathname.replace(
    currentOption.replace(" ", "-").toLowerCase(),
    optionToUpdate.replace(" ", "-").toLowerCase()
  );
}

export const handleScrollToTopButtonClick = () => {
  window.scrollTo({
    top: 0,
  });
};
