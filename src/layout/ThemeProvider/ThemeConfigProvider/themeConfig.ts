"use client";
import { Roboto } from "next/font/google";
import { ThemeOptions } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const themeConfig: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 12,
  },
};

export default themeConfig;
