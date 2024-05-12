import { Button, styled } from "@mui/material";

export const CastomButton = styled(Button)({
  padding: 0,
  minWidth: "40px",
  width: "40px",
  height: "40px",
  borderColor: "#b4bdc3",
  border: "1px solid #b4bdc3",
  color: "#313237",
  "&:hover": {
    borderColor: "#313237",
    "& > svg": {
      color: "#313237",
    },
  },
}) as typeof Button;
