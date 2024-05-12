export function imgFormatFunction(itemId: string, image: string) {
  if (
    itemId.includes("iphone-12")
  ) {
    return "img/iphone12.jpg";
  }
  if (
    itemId.includes("iphone-13")
  ) {
    return "img/iphone13.jpg";
  }
  if (
    itemId.includes("iphone-14")
  ) {
    return "img/iphone14.jpg";
  }
    if (itemId.includes("iphone")) {
      return image.replace(/\.webp$/, ".jpg");
    }
  
  return image;
}
