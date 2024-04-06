import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { DropdownInterface } from "../../types/Dropdown";
import { CastomTextTypography } from "../../MUICastomStyle/styler";
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../helperFunctions/getSearchWitth";
import { useAppSelector } from "../../app/hooks";

export const Dropdown = () => {
  const { sort, perPage } = useAppSelector(state => state.searchParamsSlice);
  const [serachParams, setSearchParams] = useSearchParams();
  const sortDropdown: DropdownInterface = {
    name: "Sort by",
    options: {
      Newest: "age",
      Alphabetically: "name",
      Cheapest: "price",
    },
  };

  const perPageDropdown: DropdownInterface = {
    name: "Items on page",
    options: {
      4: "4",
      8: "8",
      16: "16",
      All: "all",
    },
  };

  const handleSortSelectChange = (option: string) => {
    setSearchParams(getSearchWith(serachParams, { sort: option }));
  };

    const handlePerPageSelectChange = (option: string) => {
      setSearchParams(getSearchWith(serachParams, { perPage: option }));
    };

  return (
    <Box sx={{ display: "flex", gap: "16px", paddingLeft: "8px" }}>
      <Box sx={{ minWidth: 156, maxWidth: 187, width: "100%" }}>
        <CastomTextTypography sx={{ fontSize: 12 }}>
          {sortDropdown.name}
        </CastomTextTypography>
        <FormControl size="small" sx={{ width: "100%" }}>
          <Select
            defaultValue={"age"}
            inputProps={{ "aria-label": "Without label" }}
            value={sort}
            onChange={(e) => handleSortSelectChange(e.target.value)}
          >
            {Object.entries(sortDropdown.options).map((option) => {
              const [key, value] = option;

              return (
                <MenuItem value={value} key={value}>
                  <CastomTextTypography sx={{ color: "#313237" }}>
                    {key}
                  </CastomTextTypography>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 116, maxWidth: 136, width: "100%" }}>
        <CastomTextTypography sx={{ fontSize: 12 }}>
          {perPageDropdown.name}
        </CastomTextTypography>
        <FormControl size="small" sx={{ width: "100%" }}>
          <Select
            defaultValue={"16"}
            inputProps={{ "aria-label": "Without label" }}
            value={perPage}
            onChange={(e) => handlePerPageSelectChange(e.target.value)}
          >
            {Object.entries(perPageDropdown.options).map((option) => {
              const [key, value] = option;

              return (
                <MenuItem key={value} value={value}>
                  <CastomTextTypography sx={{ color: "#313237" }}>
                    {key}
                  </CastomTextTypography>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
