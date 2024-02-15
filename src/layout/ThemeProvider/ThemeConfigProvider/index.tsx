"use client";
import { ThemeProvider } from "@mui/material";
import themeConfig from "./themeConfig";
import { useTheme } from "@/hooks";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import lightPalette from "./lightPalette";
import darkPalette from "./darkPalette";

export default function ThemeConfigProvider(props: ChildrenComponent) {
  const { children } = props;

  const { theme } = useTheme();

  const muiThemeConfig = useMemo(() => {
    return createTheme({
      ...themeConfig,
      palette: {
        mode: theme,
        ...(theme === "light" ? lightPalette : darkPalette),
      },
    });
  }, [theme]);

  return <ThemeProvider theme={muiThemeConfig}>{children}</ThemeProvider>;
}
