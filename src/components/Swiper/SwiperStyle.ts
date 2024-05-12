import { Box, styled } from "@mui/material";

export const CastomProductBox = styled(Box)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 0, 0, 2),
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1158,
    margin: theme.spacing(0, 0, 0, 3),
  },
})) as typeof Box;
