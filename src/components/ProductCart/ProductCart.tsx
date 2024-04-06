import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Product } from "../../types/Product";
import { imgFormatFunction } from "../../helperFunctions/imgFormatFunctions";
import {
  CastomTextTypography,
  CastomTypographyDescription,
} from "../../MUICastomStyle/styler";
import { Link, useSearchParams } from "react-router-dom";

const CastomCard = styled(Card)(({ theme }) => ({
  padding: "32px",
  border: "1px solid #e2e6e9",
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  
  [theme.breakpoints.down("sm")]: {
    minWidth: 214,
    width: 214,
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: 239,
    width: 239,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 274,
    width: 274,
  },
  "&:hover": {
    transform: "scale(105%)",
  },
})) as typeof Card;

const CastomCardMedia = styled(CardMedia)(({ theme }) => ({
  backgroundSize: "contain",
  maxWidth: 208,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 129,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: 181,
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: 196,
  },
})) as typeof CardMedia;

const CastomTypographyValue = styled(Typography)({
  fontFamily: "Mont",
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "15px",
}) as typeof Typography;

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

  const formatedImg = imgFormatFunction(itemId, image, category);

  return (
    <Link
      to={{
        pathname: itemId,
      }}
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

        <CardActions
          sx={{
            padding: 0,
            paddingTop: 2,
          }}
        >
          <Button
            sx={{
              border: "1px solid #B4BDC3",
              padding: 0,
              height: "40px",
              width: "100%",
              color: "#fff",
              backgroundColor: "#313237",
              fontFamily: "inherit",
              fontSize: "14px",
              lineHeight: "21px",
              "&:hover": {
                color: "#313237",
                backgroundColor: "#fff",
              },
            }}
          >
            Add to cart
          </Button>
          <Button
            sx={{
              minWidth: "40px",
              width: "40px",
              height: "40px",
              padding: 0,
              border: "1px solid #B4BDC3",
              color: "#313237",
            }}
          >
            <FavoriteBorderIcon
              sx={{
                color: "#313237",
              }}
            />
          </Button>
        </CardActions>
      </CastomCard>
    </Link>
  );
};
