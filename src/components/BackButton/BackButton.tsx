import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        marginTop: "20px",
        fontFamily: "Mont",
        fontSize: "12px",
        color: "#313237",
        textTransform: "capitalize",
        "&:hover": {
          color: "#89939a",
          backgroundColor: "#fff",
        },
        display: "flex",
        gap: "8px",
        lineHeight: "20px",
      }}
    >
      <ArrowBackIosNewIcon sx={{
        width: "12px",
        height: "12px",
      }} />
      Back
    </Button>
  );
};
