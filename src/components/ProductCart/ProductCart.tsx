import {
  Box,
  CardContent,
  Typography,
} from "@mui/material";

import { Product } from "../../types/Product";
import { imgFormatFunction } from "../../helperFunctions/imgFormatFunctions";
import {
  CastomTextTypography,
  CastomTypographyDescription,
  CastomTypographyValue,
} from "../../MUICastomStyle/styler";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getFavourites,
} from "../../query/favouritesQueryApi";
import {
  getCart,
} from "../../query/cartQueryApi";
import { getItemLocation } from "../../helperFunctions/otherFunctions";
import { ButtonGroup } from "../ButtonGroup";
import { CastomCard, CastomCardMedia } from "./ProductCartStyle";

type Props = {
  product: Product;
};

export const ProductCart: React.FC<Props> = ({ product }) => {
  const [searchParams] = useSearchParams();
  const {
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    name,
    itemId,
    category,
  } = product;
  const { pathname } = useLocation();
  const itemLocation = getItemLocation(pathname, itemId, category);
    
  const { data: favourites } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const formatedImg = imgFormatFunction(itemId, image);

  return (
    <Link 
      to={itemLocation} 
      state={{ search: searchParams.toString() }}
    >
      <CastomCard>
        <CastomCardMedia image={formatedImg} />

        <CardContent
          sx={{
            padding: 0,
            paddingTop: 2,
          }}
        >
          <CastomTextTypography
            sx={{
              paddingBottom: 2,
              minHeight: 63,
              boxSizing: "content-box",
              color: "#313237",
            }}
          >
            {name}
          </CastomTextTypography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              paddingBottom: "7px",
              borderBottom: "1px solid #e3e6e9",
            }}
          >
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: "800",
                fontSize: "22px",
                lineHeight: "30px",
              }}
            >
              ${price}
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: "500",
                fontSize: "22px",
                lineHeight: "28px",
                textDecoration: "line-through",
                color: "#89939A",
              }}
            >
              ${fullPrice}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "7px",
            }}
          >
            <CastomTypographyDescription>Screen</CastomTypographyDescription>
            <CastomTypographyValue>{screen}</CastomTypographyValue>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CastomTypographyDescription>Capacity</CastomTypographyDescription>
            <CastomTypographyValue>{capacity}</CastomTypographyValue>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <CastomTypographyDescription>RAM</CastomTypographyDescription>
            <CastomTypographyValue>{ram}</CastomTypographyValue>
          </Box>
        </CardContent>

        <ButtonGroup
          product={product}
          favourites={favourites}
          cart={cart}
        />
      </CastomCard>
    </Link>
  );
};
