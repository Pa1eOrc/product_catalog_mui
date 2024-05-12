import { Breadcrumbs, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

type Props = {
  breadcrumbsParams: string[];
};

export const BasicBreadcrumbs: React.FC<Props> = ({ breadcrumbsParams }) => {
  const lastIndex = breadcrumbsParams.length - 1;

  const renderContext = (breadcrumb: string, i: number) => {
    return lastIndex === i ? (
      <Typography
        sx={{
          fontFamily: "Mont",
          fontSize: "12px",
          color: "89939a",
          textTransform: "capitalize",
          cursor: "default"
        }}
        key={breadcrumb}
      >
        {breadcrumb}
      </Typography>
    ) : (
      <Link to={`/${breadcrumb}`}>
        <Typography
          sx={{
            fontFamily: "Mont",
            fontSize: "12px",
            color: "#313237",
            textTransform: "capitalize",
            "&:hover": {
              color: "#89939a",
            },
          }}
        >
          {breadcrumb}
        </Typography>
      </Link>
    );
  };

  return (
    <Stack
      sx={{
        padding: "20px 0 0 8px",
      }}
    >
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link to="/" className="breadcrumbs__link">
          <HomeOutlinedIcon
            sx={{
              color: "#313237",
              "&:hover": {
                color: "#89939a",
              },
            }}
          />
        </Link>

        {breadcrumbsParams.map((breadcrumb, i) => (
          renderContext(breadcrumb, i)
        ))}
      </Breadcrumbs>
    </Stack>
  );
};
