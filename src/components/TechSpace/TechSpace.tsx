import { Box, Typography } from "@mui/material";
import * as React from "react";
import {
  CastomTypographyDescription,
  CastomTypographyValue,
} from "../../MUICastomStyle/styler";

type OptionsToShow = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  camera: string;
  zoom: string;
  cell: string;
};

type Props = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export const TechSpace: React.FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => {
  const optionsToShow: OptionsToShow = {
    screen: screen,
    resolution: resolution,
    processor: processor,
    ram: ram,
    capacity: capacity,
    camera: camera,
    zoom: zoom,
    cell: cell.join(", "),
  };
  return (
    <Box
      sx={{
        paddingTop: "30px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Mont",
          color: "#313237",
          fontWeight: "800",
          fontSize: "22px",
          lineHeight: "30px",
          paddingBottom: "16px",
          marginBottom: "16px",
          borderBottom: "1px solid #e2e6e9",
        }}
      >
        Tech Space
      </Typography>
      {Object.keys(optionsToShow).map((key) => {
        const optionName = key === "capacity" ? "Built in memory" : key;

        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "8px",
            }}
          >
            <CastomTypographyDescription>
              {optionName}
            </CastomTypographyDescription>
            <CastomTypographyValue>
              {optionsToShow[key as keyof OptionsToShow]}
            </CastomTypographyValue>
          </Box>
        );
      })}
    </Box>
  );
};
