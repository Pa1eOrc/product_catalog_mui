import { Box } from "@mui/material";
import { SwiperButton } from "../SwiperButton/SwiperButton";
import { Product } from "../../types/Product";
import { Swiper } from "../Swiper";
import {
  CastomTitleTypography,
  CastomTopBox,
} from "../../MUICastomStyle/styler";
import { useState } from "react";
import { getArrayLength } from "../../helperFunctions/otherFunctions";

type Props = {
  products: Product[];
};

export const HotPrice: React.FC<Props> = ({ products }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;
    const itemsLength = getArrayLength(products, itemsPerPage);
    
  return (
    <Box
      sx={{
        padding: "40px 0 60px",
      }}
    >
      <CastomTopBox>
        <CastomTitleTypography>Hot price</CastomTitleTypography>

        <SwiperButton
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          itemsLength={itemsLength}
        />
      </CastomTopBox>

      <Swiper 
        products={products} 
        currentSlide={currentSlide}
        id={"hotPrice"} 
      />
    </Box>
  );
};
