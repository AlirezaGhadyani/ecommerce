"use client";
import { context, defaultValues } from "./context";
import { useSessionStorage } from "usehooks-ts";

export function AdminContextProvider({ children }: ChildrenComponent) {
  const [isSidebarOpen, setIsSidebarOpen] = useSessionStorage(
    "admin-sidebar-open",
    defaultValues.isSidebarOpen
  );

  return (
    <context.Provider
      value={{
        isSidebarOpen,
        openSidebar: () => setIsSidebarOpen(true),
        closeSidebar: () => setIsSidebarOpen(false),
        toggleSidebar: () => setIsSidebarOpen((isOpen) => !isOpen),
      }}
    >
      {children}
    </context.Provider>
  );
}

export type { Context as AdminContext } from "./context";
export { context as adminContext } from "./context";
export { default as useAdminContext } from "./useContext";
