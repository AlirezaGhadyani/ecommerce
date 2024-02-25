"use client";
import { globalContext, GlobalContext } from "./globalContext";
import ThemeProvider from "./ThemeProvider";

interface Props extends ChildrenComponent, GlobalContext {}

export default function RootLayoutProvider(props: Props) {
  const { children, ...restProps } = props;

  return (
    <globalContext.Provider value={{ ...restProps }}>
      <ThemeProvider>{children}</ThemeProvider>
    </globalContext.Provider>
  );
}
