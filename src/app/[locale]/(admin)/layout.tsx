import {
  AdminContextProvider,
  Header,
  Sidebar,
  MainWrapper,
} from "@/features/admin";

export default function AdminRootLayout({ children }: ChildrenComponent) {
  return (
    <AdminContextProvider>
      <Header />
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </AdminContextProvider>
  );
}
