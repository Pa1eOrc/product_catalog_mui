export function imgFormatFunction(itemId: string, image: string, category: string) {
  if (
    itemId.includes("iphone-12") ||
    itemId.includes("iphone-13") ||
    itemId.includes("iphone-14")
  ) {
    return "img/phones/apple-iphone-7/black/00.jpg";
  }

  if (category === "phones") {
    return image.replace(/\.webp$/, ".jpg");
  }

  return image;
}
