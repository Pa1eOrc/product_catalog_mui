import { Box, Typography } from "@mui/material";
import { ProductDescription } from "../../types/ProductDetails";
import { CastomSubtitleTypography, CastomTypographyDescription } from "../../MUICastomStyle/styler";

type Props = {
  description: ProductDescription[]; 
};

export const About: React.FC<Props> = ({ description }) => {  
  return (
    <Box sx={{
      paddingTop: "30px",
    }}>
      <Typography
        sx={{
          fontFamily: "Mont",
          color: "#313237",
          fontWeight: "800",
          fontSize: "22px",
          lineHeight: "30px",
          paddingBottom: "16px",
          borderBottom: "1px solid #e2e6e9",
        }}
      >
        About
      </Typography>

      {description.map((paragraph) => {
        const { title, text } = paragraph;

        return (
          <Box sx={{
            paddingTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
            <CastomSubtitleTypography>{title}</CastomSubtitleTypography>

            {text.map((p) => (
              <CastomTypographyDescription>{p}</CastomTypographyDescription>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};
