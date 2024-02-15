import type { Metadata } from "next";
import RootLayoutProvider from "@/layout";
import { CONSTANT_STRINGS } from "@/constants";

const rootLayoutMetadata = CONSTANT_STRINGS.metadata.RootLayout;

export const metadata: Metadata = {
  title: rootLayoutMetadata.title,
  description: rootLayoutMetadata.description,
};

export default function RootLayout({ children }: ChildrenComponent) {
  return (
    <html lang="en">
      <body>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
