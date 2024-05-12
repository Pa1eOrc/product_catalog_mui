import { Badge, Box, Button, InputBase, Toolbar, styled } from "@mui/material";

export const Navbar = styled(Toolbar)(({ theme }) => ({
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

export const LinkBox = styled(Box)(({ theme }) => ({
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

export const CustomNavbarLinkBox = styled(Box)(({ theme }) => ({
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

export const LogoBox = styled(Box)(({ theme }) => ({
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

export const IconLinkBox = styled(Box)(({ theme }) => ({
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

export const ClouseButton = styled(Button)(({ theme }) => ({
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

export const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: 12,
    top: 12,
    height: 18,
    color: "#fff",
    backgroundColor: "#eb5757",
  },
});

export const Search = styled("div")(({ theme }) => ({
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

export const SearchIconWrapper = styled("div")(({ theme }) => ({
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

export const SearchButton = styled(Button)(({ theme }) => ({
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

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
