import { Box, Button, Link, Typography, styled } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { NavLink } from "react-router-dom";

const CastomFooterBox = styled(Box)(({ theme }) => ({
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

const CastomLinkBox = styled(Box)(({ theme }) => ({
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

const CastomLink = styled(Link)(() => ({
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

export const Footer = () => {
const handleButtonClick = () => {
  window.scrollTo({
    top: 0,
  });
};

  return (
    <CastomFooterBox className="footer" component="footer">
      <NavLink to="/" className="footer__logo">
        <img src="/img/Icons/Logo.svg" alt="Logo" />
      </NavLink>

      <CastomLinkBox>
        <CastomLink href="#">Github</CastomLink>

        <CastomLink href="#">Contacts</CastomLink>

        <CastomLink href="#">Rights</CastomLink>
      </CastomLinkBox>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            color: "#89939A",
            fontSize: 12,
            fontFamily: "Mont",
          }}
        >
          Back to top
        </Typography>

        <Button
          sx={{
            width: 32,
            minWidth: 32,
            height: 32,
            border: "1px solid #89939a",
            padding: 0,
          }}
          onClick={handleButtonClick}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
    </CastomFooterBox>
  );
};
