import cn from "classnames";

import { AppBar,Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getSearchWith } from "../../helperFunctions/getSearchWitth";
import { useQuery } from "@tanstack/react-query";
import { getFavourites } from "../../query/favouritesQueryApi";
import { getCart } from "../../query/cartQueryApi";
import { ClouseButton, CustomNavbarLinkBox, IconLinkBox, LinkBox, LogoBox, Navbar, Search, SearchButton, SearchIconWrapper, StyledBadge, StyledInputBase } from "./HeaderStyle";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const showSearchInput =
    pathname === "/phones" || pathname === "/tablets" || pathname === "/accessories";
  
  const { data: favourites = [] } = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });

  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
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

            {showSearchInput && (
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
            )}

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
