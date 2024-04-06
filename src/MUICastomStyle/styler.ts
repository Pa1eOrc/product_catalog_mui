import { Box, Container, Typography, styled } from "@mui/material";

export const CastomTitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Mont",
  color: "#313237",
  fontWeight: "800",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    lineHeight: "30px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "32px",
    lineHeight: "41px",
    letterSpacing: "-1%",
  },
})) as typeof Typography;

export const CastomSubtitleTypography = styled(Typography)({
  padding: "16px 0 0",
  fontFamily: "Mont",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "25px",
}) as typeof Typography;

export const CastomTextTypography = styled(Typography)({
  fontFamily: "Mont",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "21px",
  color: "#89939a",
}) as typeof Typography;

export const CastomTypographyDescription = styled(Typography)({
  fontFamily: "Mont",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#89939A",
}) as typeof Typography;

export const CastomTopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2, 3),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 3, 4),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 4, 4),
  },
})) as typeof Box;

export const CastomProductsContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "0 20px",
  },
})) as typeof Container;
