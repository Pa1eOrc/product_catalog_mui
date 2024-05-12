import { Box, Container } from "@mui/material";
import { BasicBreadcrumbs } from "../../components/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLocation, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { useEffect, useMemo, useState } from "react";
import * as detailsPageActions from "../../fuatures/DetailsPage/detailsPageSlice";
import { ImagesAndOptions } from "../../components/ImagesContainer";
import { CastomGridContainer } from "./DetailsPageStyle";
import { Options } from "../../components/Options";
import { useQuery } from "@tanstack/react-query";
import { getFavourites } from "../../query/favouritesQueryApi";
import { getCart } from "../../query/cartQueryApi";
import { About } from "../../components/About";
import { TechSpace } from "../../components/TechSpace";
import {
  CastomTitleTypography,
  CastomTopBox,
} from "../../MUICastomStyle/styler";
import { SwiperButton } from "../../components/SwiperButton/SwiperButton";
import { Swiper } from "../../components/Swiper";
import { getArrayLength } from "../../helperFunctions/otherFunctions";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { pathname } = useLocation();
  const { breadcrumbs: breadcrumbsParams } = useAppSelector(
    (state) => state.searchParamsSlice
  );
  const { productDetails } = useAppSelector((state) => state.detailsPageSlice);
  const {
    description,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
    color,
  } = productDetails;
  const { products } = useAppSelector((state) => state.homePageSlice);
  const selectedProduct = useMemo(() => {
    return products.find((product) => product.itemId === productId);
  }, [products, productId]);

  useEffect(() => {
      window.scrollTo({
        top: 0,
      });
  }, [productId]);

  useEffect(() => {
    dispatch(detailsPageActions.init(pathname));
  }, [dispatch, pathname]);

  const { data: favourites } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const randomProducts = products.slice(0, 16);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;
  const itemsLength = getArrayLength(randomProducts, itemsPerPage);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");

  useEffect(() => {
    setSelectedColor(color);
  }, [color, setSelectedColor]);

  useEffect(() => {
    setSelectedCapacity(capacity);
  }, [capacity, setSelectedCapacity]);
  
  return (
    <Container sx={{ flex: 1 }}>
      <BasicBreadcrumbs breadcrumbsParams={breadcrumbsParams} />

      <BackButton />

      <CastomGridContainer>
        <ImagesAndOptions productDetails={productDetails} />

        <Options
          productDetails={productDetails}
          favourites={favourites}
          cart={cart}
          selectedProduct={selectedProduct}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedCapacity={selectedCapacity}
          setSelectedCapacity={setSelectedCapacity}
          productPathname={pathname}
        />
      </CastomGridContainer>

      <About description={description} />

      <TechSpace
        screen={screen}
        resolution={resolution}
        processor={processor}
        ram={ram}
        capacity={capacity}
        camera={camera}
        zoom={zoom}
        cell={cell}
      />

      <Box
        sx={{
          padding: "40px 0 60px",
        }}
      >
        <CastomTopBox>
          <CastomTitleTypography>You also may like</CastomTitleTypography>

          <SwiperButton
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            itemsLength={itemsLength}
          />
        </CastomTopBox>

        <Swiper
          products={randomProducts}
          currentSlide={currentSlide}
          id={"Random"}
        />
      </Box>
    </Container>
  );
};
