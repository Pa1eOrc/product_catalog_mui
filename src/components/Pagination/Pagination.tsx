import { Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../helperFunctions/getSearchWitth";

type Props = {
  currentPage: number;
  pageCount: number[];
};

export const Paginations: React.FC<Props> = ({ currentPage, pageCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const newSearchParams = getSearchWith(
      searchParams, { page: value.toString() }
    );

    setSearchParams(newSearchParams);
  };

  return (
    <Stack
      spacing={2}
      sx={{ 
        display: "flex", alignItems: "center", padding: "10px 0 40px" 
      }}
    >
      <Pagination
        count={pageCount.length}
        page={currentPage}
        boundaryCount={0}
        onChange={handlePaginationChange}
      />
    </Stack>
  );
};
