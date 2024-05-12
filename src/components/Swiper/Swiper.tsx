import { Box } from "@mui/material";
import { Product } from "../../types/Product";
import { ProductCart } from "../ProductCart";
import { useEffect } from "react";
import { CastomProductBox } from "./SwiperStyle";

type Props = {
  products: Product[];
  currentSlide: number;
  id: string;
};

export const Swiper: React.FC<Props> = ({ products, currentSlide, id }) => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${id}`);
    const itemWidth = items[0]?.clientWidth || 0;

    items.forEach(item => {
      const element = item as HTMLElement;

      element.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    })
  }, [currentSlide, id]);

  return (
    <CastomProductBox>
      {products.map((product) => (
        <Box className={id} key={product.id} sx={{ 
          transitionProperty: "transform",
          transitionDuration: "0.7s",
          padding: "15px 8px",
          }}>
          <ProductCart product={product} />
        </Box>
      ))}
    </CastomProductBox>
  );
};
