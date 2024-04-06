import { Box } from "@mui/material";
import {
  CastomProductsContainer,
  CastomTextTypography,
  CastomTitleTypography,
} from "../../MUICastomStyle/styler";
import { Dropdown } from "../../components/Dropdown";
import { useAppSelector } from "../../app/hooks";
import { filterProductsByCategory } from "../../helperFunctions/sortedFunctions";
import { ProductList } from "../../components/ProductList";
import { Paginations } from "../../components/Pagination";
import {
  getPageCount,
  getPerPage,
  getStartIndex,
} from "../../helperFunctions/otherFunctions";
import { sortProducts } from "../../helperFunctions/sortedProducts";

export const AccessoriesPage = () => {
  const { perPage, page, sort, query } = useAppSelector(
    (state) => state.searchParamsSlice
  );
  const { products } = useAppSelector((state) => state.homePageSlice);
  const phones = filterProductsByCategory(products, "accessories");
  const sortedAccessories = sortProducts(phones, sort, query);
  const totalLength = sortedAccessories.length;
  const currentPerPage = getPerPage(totalLength, perPage);
  const pageCount = getPageCount(totalLength, currentPerPage);
  const startIndex = getStartIndex(currentPerPage, page);
  const productsForCurrentPage = sortedAccessories.slice(
    startIndex,
    startIndex + currentPerPage
  );

  return (
    <CastomProductsContainer>
      <Box
        sx={{
          padding: "40px 0 40px 8px",
        }}
      >
        <CastomTitleTypography>Accessories</CastomTitleTypography>
        <CastomTextTypography>{totalLength} models</CastomTextTypography>
      </Box>

      <Dropdown />

      <ProductList products={productsForCurrentPage} />

      {pageCount.length > 1 && (
        <Paginations currentPage={page} pageCount={pageCount} />
      )}
    </CastomProductsContainer>
  );
};
