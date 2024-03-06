import { Header } from "@/features/user";

export default function UserRootLayout({ children }: ChildrenComponent) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
