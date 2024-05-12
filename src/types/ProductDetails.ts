export interface ProductDescription {
  title: string;
  text: string[];
}

export type ProductDeatails = {
  id: string;
  name: string;
  capacityAvailable: string[];
  colorsAvailable: string[];
  color: string;
  capacity: string;
  namespaceId: string;
  images: string[];
  description: ProductDescription[];
  screen: string;
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
  ram: string;
  priceRegular: string;
  priceDiscount: string;
};
