import { Container, styled } from "@mui/material";

export const CastomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 4),
  },
})) as typeof Container;