import { Box, Link, styled } from "@mui/material";

export const CastomFooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#fff",
  borderTop: "1px solid #e2e6e9",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "32px 16px",
    gap: 32,
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",

    padding: 32,
  },
})) as typeof Box;

export const CastomLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 16,
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    gap: 32,
  },
})) as typeof Box;

 export const CastomLink = styled(Link)(() => ({
  textTransform: "uppercase",
  color: "#89939a",
  textDecoration: "none",
  " &:hover": {
    color: "#000",
  },
  width: "max-content",
  fontSize: 12,
  lineHeight: "32px",
  fontFamily: "Mont",
})) as typeof Link;
