import { Grid, styled } from "@mui/material";

export const CastomGridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: 24,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 8,
  },
})) as typeof Grid;

export const CastomGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 16,
  },
})) as typeof Grid;
