"use client";
import { StyledSidebar } from "./styles";
import { useAdminContext } from "../../context";
import appConfig from "@/configs";

export default function Sidebar() {
  const { isSidebarOpen } = useAdminContext();

  return (
    <StyledSidebar
      initial={false}
      animate={isSidebarOpen ? "open" : "closed"}
      variants={{
        open: {
          width: appConfig.ui.admin.sidebarOpenWidth,
        },
        closed: {
          width: appConfig.ui.admin.sidebarCloseWidth,
        },
      }}
    ></StyledSidebar>
  );
}
