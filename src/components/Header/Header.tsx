import cn from "classnames";

import { AppBar, Badge, Box, Button, InputBase, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { NavLink, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getSearchWith } from "../../helperFunctions/getSearchWitth";

const Navbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  position: "relative",
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    padding: "0 8px",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    padding: "0 8px 0 16px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 8px 0 24px",
  },
})) as typeof Toolbar;

const LinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0 0",
    flexDirection: "column",
    height: "inherit",
    gap: 10,
    maxHeight: 290,
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    flexGrow: 1,
    gap: 10,
    height: 64,
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flexGrow: 1,
    gap: 20,
    height: 64,
  },
})) as typeof Box;

const CustomNavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: 0,
  backgroundColor: "#fff",
  transition: "transform 0.7s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "inherit",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
})) as typeof Box;

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: 16,
    borderBottom: "1px solid #E2E6E9",
  },
  [theme.breakpoints.up("sm")]: {
    width: "min-content",
    padding: "0 16px 0 0",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 30px 0 0",
  },
})) as typeof Box;

const IconLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    height: 64,
    width: "100%",
    borderTop: "1px solid #E2E6E9",
    borderBottom: "1px solid #E2E6E9",
  },
  [theme.breakpoints.up("sm")]: {
    width: 128,
    height: 64,
  },
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: "50%",
    width: "1px",
    height: "64px",
    background: "#E2E6E9",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
})) as typeof Box;

const ClouseButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    minWidth: 40,
    width: 40,
    height: 40,
    padding: 0,
    borderRadius: 50,
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
})) as typeof Button;

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: 12,
    top: 12,
    height: 18,
    color: "#fff",
    backgroundColor: "#eb5757",
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #89939a",
  backgroundColor: "#fff",
  "&:hover": {
    borderColor: "#000",
  },
  color: "#000",
  marginRight: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const SearchButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  top: 0,
  right: 0,
  width: 20,
  minWidth: 20,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})) as typeof Button;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "14ch",
      "&:focus": {
        width: "16ch",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [favourites] = useState([]);
  const [cart] = useState([]);
  const [isMenu, setIsMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn("link", { "link--active": isActive });

  const getIconLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn("link", { "link--icon-active": isActive });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    const newSearchParams = getSearchWith(
      searchParams, { query: newInputValue }
    );

    setSearchParams(newSearchParams);
  };

  const handleClearInput = () => {
    const newSearchParams = getSearchWith(
      searchParams, {
      query: null,
      page: null,
    });
    setSearchParams(newSearchParams);
    setInputValue("");
  }

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Navbar component="nav">
        <LogoBox>
          <NavLink to="/">
            <img src="/img/Icons/Logo.svg" alt="Logo" />
          </NavLink>

          <ClouseButton onClick={() => setIsMenu(!isMenu)}>
            {isMenu ? (
              <CloseIcon
                sx={{
                  color: "#313237",
                }}
              />
            ) : (
              <MenuIcon
                sx={{
                  color: "#313237",
                }}
              />
            )}
          </ClouseButton>
        </LogoBox>

        <div className={!isMenu ? "menu" : "menu menu--open"}>
          <CustomNavbarLinkBox>
            <LinkBox>
              <Button
                sx={{
                  height: "100%",
                  padding: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/" className={getLinkClass}>
                  Home
                </NavLink>
              </Button>
              <Button
                sx={{
                  height: "100%",
                  padding: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/phones" className={getLinkClass}>
                  Phones
                </NavLink>
              </Button>
              <Button
                sx={{
                  height: "100%",
                  padding: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/tablets" className={getLinkClass}>
                  Tablets
                </NavLink>
              </Button>
              <Button
                sx={{
                  height: "100%",
                  padding: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/accessories" className={getLinkClass}>
                  Accessories
                </NavLink>
              </Button>
            </LinkBox>

            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  fontFamily: "Mont",
                  fontSize: "12px",
                }}
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
              />

              {inputValue ? (
                <SearchButton onClick={handleClearInput}>
                  <CloseIcon
                    sx={{
                      height: 20,
                      width: 20,
                      color: "#89939a",
                    }}
                  />
                </SearchButton>
              ) : (
                <SearchIconWrapper>
                  <SearchIcon
                    sx={{
                      color: "#89939a",
                    }}
                  />
                </SearchIconWrapper>
              )}
            </Search>

            <IconLinkBox>
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  borderLeft: "1px solid #E2E6E9",
                  padding: 0,
                  borderRadius: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/favourites" className={getIconLinkClass}>
                  <StyledBadge badgeContent={favourites.length}>
                    <FavoriteBorderIcon
                      sx={{
                        color: "#000",
                        margin: "10px",
                      }}
                    />
                  </StyledBadge>
                </NavLink>
              </Button>
              <Button
                sx={{
                  width: "100%",
                  height: "100%",
                  borderLeft: "1px solid #E2E6E9",
                  borderRight: "1px solid #E2E6E9",
                  padding: 0,
                  borderRadius: 0,
                  color: "#313237",
                }}
                onClick={() => setIsMenu(false)}
              >
                <NavLink to="/cart" className={getIconLinkClass}>
                  <StyledBadge badgeContent={cart.length}>
                    <ShoppingCartOutlinedIcon
                      sx={{
                        color: "#000",
                        margin: "10px",
                      }}
                    />
                  </StyledBadge>
                </NavLink>
              </Button>
            </IconLinkBox>
          </CustomNavbarLinkBox>
        </div>
      </Navbar>
    </AppBar>
  );
};
