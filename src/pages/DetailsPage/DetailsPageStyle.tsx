import { Grid, styled } from "@mui/material";

export const CastomGridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: "24px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
})) as typeof Grid;
