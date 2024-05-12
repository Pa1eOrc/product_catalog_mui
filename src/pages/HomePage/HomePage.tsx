import { Banner } from "../../components/Banner";
import { NewModels } from "../../components/NewModels";
import { ShopByCategory } from "../../components/ShopByCategory";
import { HotPrice } from "../../components/HotPrice";
import { useAppSelector } from "../../app/hooks";
import { getShopLinksNameAndLength } from "../../helperFunctions/otherFunctions";
import { CastomContainer, CastomTitleTypography } from "./HomePageStyle";

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
