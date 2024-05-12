import { Card, CardMedia, styled } from "@mui/material";

export const CastomCard = styled(Card)(({ theme }) => ({
  padding: "32px",
  border: "1px solid #e2e6e9",
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  zIndex: "1",

  [theme.breakpoints.down("sm")]: {
    minWidth: 214,
    width: 214,
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: 239,
    width: 239,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 274,
    width: 274,
  },
  "&:hover": {
    transform: "scale(105%)",
  },
})) as typeof Card;

export const CastomCardMedia = styled(CardMedia)(({ theme }) => ({
  backgroundSize: "contain",
  maxWidth: 208,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 129,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: 181,
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: 196,
  },
})) as typeof CardMedia;
