import { useMemo } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { PaletteMode } from "@mui/material";

export default function useTheme() {
  const { theme, systemTheme, ...restNextTheme } = useNextTheme();

  const currentTheme: PaletteMode = useMemo(() => {
    if (theme !== "system") return theme as PaletteMode;
    return systemTheme as PaletteMode;
  }, [theme, systemTheme]);

  return {
    theme: currentTheme,
    ...restNextTheme,
  };
}
