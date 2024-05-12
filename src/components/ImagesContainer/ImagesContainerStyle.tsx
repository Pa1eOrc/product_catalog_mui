import { Box, Button, Grid, ImageList, styled } from "@mui/material";

export const CastomGridImagesContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column-reverse",
    gap: "16px",
  },
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "35px 1fr",
    gap: "8px",
  },
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "49px 1fr",
  },
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "80px 1fr",
  },
})) as typeof Grid;

export const CastomImageList = styled(Box)(({ theme }) => ({
  height: "44px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  gap: "8px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
    justifyContent: "start",
    width: "35px",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    width: "44px",
    height: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "start",
    width: "80px",
    height: "100%",
  },
})) as typeof Box;

export const CastomImageButton = styled(Button)(({ theme }) => ({
  height: "44px",
  width: "44px",
  padding: 0,
  minWidth: "35px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
    width: "35px",
    height: "35px",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    width: "44px",
    height: "44px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "80px",
    height: "80px",
  },

  "& > img": {
    width: "95%",
    height: "95%",
    objectFit: "contain",
  },
})) as typeof Button;
