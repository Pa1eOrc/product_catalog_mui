import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Banner } from "../../components/Banner";
import { NewModels } from "../../components/NewModels";
import { ShopByCategory } from "../../components/ShopByCategory";
import { HotPrice } from "../../components/HotPrice";
import { useAppSelector } from "../../app/hooks";
import { getShopLinksNameAndLength } from "../../helperFunctions/otherFunctions";

const CastomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: 0,
  },
})) as typeof Container;

const CastomTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Mont",
  fontWeight: 800,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "41px",
    padding: "32px 0",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "48px",
    lineHeight: "56px",
    padding: "48px 0",
  },
})) as typeof Typography;

export const HomePage = () => {
  const { newModels, hotPrice, products } = useAppSelector(
    (state) => state.homePageSlice
  );
  const shopByCategoryLinks = getShopLinksNameAndLength(products);

  return (
    <CastomContainer>
      <CastomTitleTypography>
        Welcome to Nice Gadgets store!
      </CastomTitleTypography>

      <Banner />

      <NewModels products={newModels} />

      <ShopByCategory links={shopByCategoryLinks} />

      <HotPrice products={hotPrice} />
    </CastomContainer>
  );
};
