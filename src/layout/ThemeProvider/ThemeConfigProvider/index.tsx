"use client";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@/hooks";
import { useGlobalContext } from "../../globalContext";
import { createTheme } from "@mui/material/styles";
import themeConfig from "./themeConfig";
import { roboto, vazirmatn } from "./loadFonts";
import lightPalette from "./lightPalette";
import darkPalette from "./darkPalette";

export default function ThemeConfigProvider(props: ChildrenComponent) {
  const { children } = props;

  const { theme } = useTheme();
  const { locale } = useGlobalContext();

  const muiThemeConfig = useMemo(() => {
    return createTheme({
      ...themeConfig,
      typography: {
        ...themeConfig.typography,
        ...(locale === "fa"
          ? { fontFamily: vazirmatn.style.fontFamily }
          : { fontFamily: roboto.style.fontFamily }),
      },
      palette: {
        mode: theme,
        ...(theme === "light" ? lightPalette : darkPalette),
      },
    });
  }, [theme, locale]);

  return <ThemeProvider theme={muiThemeConfig}>{children}</ThemeProvider>;
}
