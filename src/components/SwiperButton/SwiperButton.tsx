import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { CastomButton } from "./SwiperButtonStyle";

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
