import { Box, Button, styled } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const CastomButton = styled(Button)({
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

type Props = {
  currentSlide: number;
  setCurrentSlide: (currentSlide: number) => void;
  itemsLength: number;
};

export const SwiperButton: React.FC<Props> = ({ 
  currentSlide, 
  setCurrentSlide, 
  itemsLength, 
}) => {

  const handleButtonActions = (actions: string) => {    
    if (actions === "next") {
      setCurrentSlide(currentSlide + 1);
    }

    if (actions === "prev") {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CastomButton 
        disabled={currentSlide === 0} 
        onClick={() => handleButtonActions("prev")}
      >
        <KeyboardArrowLeftIcon
          sx={{
            color: "#b4bdc3",
          }}
        />
      </CastomButton>

      <CastomButton 
        disabled={currentSlide === itemsLength}
        onClick={() => handleButtonActions("next")}  
      >
        <KeyboardArrowRightIcon
          sx={{
            color: "#b4bdc3",
          }}
        />
      </CastomButton>
    </Box>
  );
};
