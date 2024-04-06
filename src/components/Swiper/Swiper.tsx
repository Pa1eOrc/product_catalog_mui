import { Box } from "@mui/material";
import { Product } from "../../types/Product";
import { ProductCart } from "../ProductCart";
import { styled } from "@mui/system";
import { useEffect } from "react";

const CastomProductBox = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 0, 0, 2),
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1158,
    margin: theme.spacing(0, 0, 0, 3),
  },
})) as typeof Box;

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
