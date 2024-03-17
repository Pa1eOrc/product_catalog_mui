import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";

import { Banner } from "../../components/Banner";
import * as homePageActions from "../../fuatures/HomePage/homePageSlice";

const CastomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    padding: 0,
  },
})) as typeof Container;

const CastomTitleTypography = styled(Typography)(({ theme }) => ({
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

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { products, newModels, hotPrice, loaded, hasError } = useAppSelector(
    (state) => state.homePageSlice
  );

  useEffect(() => {
    dispatch(homePageActions.init());
  }, [dispatch]);

console.log(products, hotPrice, newModels);


  return (
    <CastomContainer>
      <CastomTitleTypography>
        Welcome to Nice Gadgets store!
      </CastomTitleTypography>

      <Banner />
    </CastomContainer>
  );
};
