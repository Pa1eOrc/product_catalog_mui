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
import { BasicBreadcrumbs } from "../../components/Breadcrumbs";

export const PhonesPage = () => {
  const {
    perPage,
    page,
    sort,
    query,
    breadcrumbs: breadcrumbsParams,
  } = useAppSelector((state) => state.searchParamsSlice);
  const { products } = useAppSelector((state) => state.homePageSlice);
  const phones = filterProductsByCategory(products, "phones");
  const sortedPhones = sortProducts(phones, sort, query);
  const totalLength = sortedPhones.length;
  const currentPerPage = getPerPage(totalLength, perPage);
  const pageCount = getPageCount(totalLength, currentPerPage);
  const startIndex = getStartIndex(currentPerPage, page);
  const productsForCurrentPage = sortedPhones.slice(
    startIndex,
    startIndex + currentPerPage
  );

  return (
    <CastomProductsContainer>
      <BasicBreadcrumbs breadcrumbsParams={breadcrumbsParams} />

      <Box
        sx={{
          padding: "20px 0 40px 8px",
        }}
      >
        <CastomTitleTypography>Mobile Phones</CastomTitleTypography>
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
