import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { NavLink } from "react-router-dom";
import { handleScrollToTopButtonClick } from "../../helperFunctions/otherFunctions";
import { CastomFooterBox, CastomLink, CastomLinkBox } from "./FuuterStyle";

export const Footer = () => {

  return (
    <CastomFooterBox className="footer" component="footer">
      <NavLink to="/" className="footer__logo" onClick={handleScrollToTopButtonClick}>
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
            color: "#313237",
          }}
          onClick={handleScrollToTopButtonClick}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
    </CastomFooterBox>
  );
};
