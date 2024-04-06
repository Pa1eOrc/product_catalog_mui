import { Box, Container, Grid, styled } from "@mui/material"
import { CastomSubtitleTypography, CastomTextTypography, CastomTitleTypography } from "../../MUICastomStyle/styler";
import { Link } from "react-router-dom";
import { getLinkTitle } from "../../helperFunctions/otherFunctions";

const CastomGridContainer = styled(Grid)(({ theme }) => ({
  paddingTop: 24,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 8,
  },
})) as typeof Grid;

const CastomGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 16,
  },
})) as typeof Grid;

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