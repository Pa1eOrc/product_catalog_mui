import { useQuery } from "@tanstack/react-query";
import {
  CastomProductsContainer,
  CastomTextTypography,
  CastomTitleTypography,
} from "../../MUICastomStyle/styler";
import { BasicBreadcrumbs } from "../../components/Breadcrumbs";
import { getFavourites } from "../../query/favouritesQueryApi";
import { useAppSelector } from "../../app/hooks";
import { Box, Grid, styled } from "@mui/material";
import { ProductCart } from "../../components/ProductCart";
import { Product } from "../../types/Product";

export const CastomGridContainer = styled(Grid)(({ theme }) => ({
  padding: "30px 0",
  gap: "16px 16px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
  },
})) as typeof Grid;

export const FavouritesPage = () => {
  const { breadcrumbs: breadcrumbsParams } = useAppSelector(
    (state) => state.searchParamsSlice
  );
  const { data: favourites = [] } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });
  const totalLength =
    favourites.length === 1 ? "1 item" : `${favourites.length} items`;

  return (
    <CastomProductsContainer>
      <BasicBreadcrumbs breadcrumbsParams={breadcrumbsParams} />

      <Box
        sx={{
          padding: "20px 0 40px 8px",
        }}
      >
        <CastomTitleTypography>Favourites</CastomTitleTypography>
        <CastomTextTypography>{totalLength}</CastomTextTypography>
      </Box>

      <CastomGridContainer container>
        {favourites.map((product: Product) => (
          <Grid item key={product.itemId}>
            <ProductCart product={product} />
          </Grid>
        ))}
      </CastomGridContainer>
    </CastomProductsContainer>
  );
};
