import { Box, ToggleButtonGroup, Typography } from "@mui/material";
import {
  CastomTypographyDescription,
  CastomTypographyValue,
} from "../../MUICastomStyle/styler";
import { ProductDeatails } from "../../types/ProductDetails";
import { CastomOptionsContainer } from "./OptionsStyle";
import { Product } from "../../types/Product";
import { Cart } from "../../types/Cart";
import { ButtonGroup } from "../ButtonGroup";
import { Link } from "react-router-dom";
import { productDetailsLinkCreator } from "../../helperFunctions/otherFunctions";
import cn from "classnames";

export type OptionsToShow = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
};

type Props = {
  productDetails: ProductDeatails;
  favourites: Product[];
  cart: Cart[];
  selectedProduct: Product | undefined;
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
  selectedCapacity: string;
  setSelectedCapacity: (selectedCapacity: string) => void;
  productPathname: string;
};

export const Options: React.FC<Props> = ({
  productDetails,
  favourites,
  cart,
  selectedProduct,
  selectedColor,
  setSelectedColor,
  selectedCapacity,
  setSelectedCapacity,
  productPathname,
}) => {
  const {
    capacityAvailable,
    colorsAvailable,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    processor,
    ram,
  } = productDetails;

  const optionsToShow: OptionsToShow = {
    screen: screen,
    resolution: resolution,
    processor: processor,
    ram: ram,
  };

  const colorLibrary: Record<string, string> = {
    spaceblack: "#505150",
    black: "#000",
    rosegold: "#b76e79",
    silver: "#c0c0c0",
    purple: "#800080",
    spacegray: "#717378",
    white: "#fff",
    yellow: "#ff0",
    coral: "#ff7f50",
    red: "#eb5757",
    gold: "#ffd700",
    midnightgreen: "#004953",
    green: "#27ae60",
    pink: "#ffc0cd",
    skyblue: "#87ceeb",
    midnight: "#000e34",
    graphite: "#41424c",
    sierrablue: "#bfdaf7",
    blue: "#0000ff",
  };

  function findAColor(elementColor: string) {
    const keys = Object.keys(colorLibrary);
    for (const key of keys) {
      if (key.toLowerCase() === elementColor.replace(" ", "").toLowerCase()) {
        return colorLibrary[key];
      }
    }
    return null;
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <CastomOptionsContainer>
      <Box>
        <CastomTypographyDescription>
          Available colors
        </CastomTypographyDescription>

        <ToggleButtonGroup
          sx={{
            gap: "8px",
            padding: "8px 0 16px",
            borderBottom: "1px solid #e2e6e9",
            width: "100%",
          }}
        >
          {colorsAvailable.map((color) => {
            const buttonColor = findAColor(color);
            const updatedPatchname = productDetailsLinkCreator(
              productPathname,
              selectedColor,
              color
            );

            return (
              <Link
                key={color}
                to={updatedPatchname}
                onClick={() => handleColorChange(color)}
                className={cn("colors__link", {
                  "colors__link--active": selectedColor === color,
                })}
              >
                <Typography
                  component="span"
                  sx={{
                    backgroundColor: buttonColor,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            );
          })}
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ paddingTop: "16px" }}>
        <CastomTypographyDescription>
          Select capacity
        </CastomTypographyDescription>

        <ToggleButtonGroup
          sx={{
            gap: "8px",
            padding: "8px 0 16px",
            borderBottom: "1px solid #e2e6e9",
            width: "100%",
          }}
        >
          {capacityAvailable.map((capacity) => {
            const updatedPatchname = productDetailsLinkCreator(
              productPathname,
              selectedCapacity,
              capacity
            );

            return (
              <Link
                key={capacity}
                to={updatedPatchname}
                onClick={() => handleCapacityChange(capacity)}
                className={cn("capacity__link", {
                  "capacity__link--active": selectedCapacity === capacity,
                })}
              >
                {capacity}
              </Link>
            );
          })}
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "16px 0 0",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mont",
              fontSize: "32px",
              fontWeight: "800",
              lineHeight: "41px",
            }}
          >
            ${priceDiscount}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Mont",
              fontSize: "28px",
              fontWeight: "500",
              lineHeight: "28px",
              textDecoration: "line-through",
              color: "#89939a",
            }}
          >
            ${priceRegular}
          </Typography>
        </Box>

        {selectedProduct && (
          <ButtonGroup
            product={selectedProduct}
            favourites={favourites}
            cart={cart}
            pageId="Random"
          />
        )}

        <Box
          sx={{
            paddingTop: "20px",
          }}
        >
          {Object.keys(optionsToShow).map((key) => (
            <Box
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "7px",
              }}
            >
              <CastomTypographyDescription>{key}</CastomTypographyDescription>
              <CastomTypographyValue>
                {optionsToShow[key as keyof OptionsToShow]}
              </CastomTypographyValue>
            </Box>
          ))}
        </Box>
      </Box>
    </CastomOptionsContainer>
  );
};
