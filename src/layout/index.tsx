import ThemeProvider from "./ThemeProvider";

export default function RootLayoutProvider(props: ChildrenComponent) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}
