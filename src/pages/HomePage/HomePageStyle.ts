import { Container, Typography, styled } from "@mui/material";

export const CastomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: 0,
  },
})) as typeof Container;

export const CastomTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Mont",
  fontWeight: 800,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "41px",
    padding: "32px 0",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "48px",
    lineHeight: "56px",
    padding: "48px 0",
  },
})) as typeof Typography;
