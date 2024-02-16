import NextThemesProvider from "./NextThemesProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeConfigProvider from "./ThemeConfigProvider";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeProvider(props: ChildrenComponent) {
  const { children } = props;

  return (
    <AppRouterCacheProvider>
      <NextThemesProvider>
        <ThemeConfigProvider>
          <CssBaseline />
          {children}
        </ThemeConfigProvider>
      </NextThemesProvider>
    </AppRouterCacheProvider>
  );
}
