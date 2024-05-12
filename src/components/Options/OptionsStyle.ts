import { Container, styled } from "@mui/material";

export const CastomOptionsContainer = styled(Container)(({ theme }) => ({

  margin: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    maxWidth: "320px",
  },
})) as typeof Container;
