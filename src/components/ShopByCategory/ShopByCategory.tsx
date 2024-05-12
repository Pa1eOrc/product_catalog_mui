import { Box, Container } from "@mui/material"
import { CastomSubtitleTypography, CastomTextTypography, CastomTitleTypography } from "../../MUICastomStyle/styler";
import { Link } from "react-router-dom";
import { getLinkTitle } from "../../helperFunctions/otherFunctions";
import { CastomGridContainer, CastomGridItem } from "./ShopByCategoryStyle";

type Props = {
  links: { [key: string]: number}
}

export const ShopByCategory: React.FC<Props> = ({ links }) => {
  return (
    <Container
      sx={{
        paddingTop: 5,
      }}
      className="category"
    >
      <CastomTitleTypography>Shop by category</CastomTitleTypography>

      <CastomGridContainer container>
        {Object.entries(links).map(([link, length]) => {  
          const linkName = getLinkTitle(link)   

          return (
            <CastomGridItem item key={link}>
              <Link
                to={`/${link}`}
                className={`category__link category__link--${link}`}
              >
                <img
                  src={`img/category-${link}.png`}
                  alt={`Go to ${link} page`}
                  className="category__img"
                />
              </Link>

              <Box>
                <CastomSubtitleTypography>
                  {linkName}
                </CastomSubtitleTypography>
                <CastomTextTypography>{length} items</CastomTextTypography>
              </Box>
            </CastomGridItem>
          );
        })}
      </CastomGridContainer>
    </Container>
  );
}