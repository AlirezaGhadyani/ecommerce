import NextThemesProvider from "./NextThemesProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ThemeConfigProvider from "./ThemeConfigProvider";

export default function ThemeProvider(props: ChildrenComponent) {
  const { children } = props;

  return (
    <AppRouterCacheProvider>
      <NextThemesProvider>
        <ThemeConfigProvider>{children}</ThemeConfigProvider>
      </NextThemesProvider>
    </AppRouterCacheProvider>
  );
}
