"use client";
import { createContext, useContext } from "react";
import appConfig from "@/configs";

export interface GlobalContext {
  locale: Locale;
  dir: "ltr" | "rtl";
}

const defaultValues: GlobalContext = {
  locale: appConfig.defaultLocale,
  dir: appConfig.defaultLocale === "fa" ? "rtl" : "ltr",
};

export const globalContext = createContext<GlobalContext>(defaultValues);
export const useGlobalContext = () => useContext(globalContext);
