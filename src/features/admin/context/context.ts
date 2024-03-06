"use client";
import { createContext } from "react";

export interface Context {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

export const defaultValues: Context = {
  isSidebarOpen: true,
  openSidebar: () => {},
  closeSidebar: () => {},
  toggleSidebar: () => {},
};

export const context = createContext<Context>(defaultValues);
