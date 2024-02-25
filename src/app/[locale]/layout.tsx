import type { Metadata } from "next";
import appConfig from "@/configs";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import RootLayoutProvider from "@/layout";

interface PageParams {
  params: CommonPageParams;
}

type Props = ChildrenComponent & PageParams;

export async function generateMetadata(props: PageParams): Promise<Metadata> {
  const locale = props.params.locale;
  const namespace = "Metadata.RootLayout";

  const t = await getTranslations({ locale, namespace });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      images: t("openGraph.images"),
      url: process.env.NEXT_PUBLIC_APP_URL,
      siteName: `${process.env.NEXT_PUBLIC_APP_NAME}.com`,
      locale,
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      images: t("openGraph.images"),
      card: "summary_large_image",
      site: `@${process.env.NEXT_PUBLIC_APP_NAME}`,
      creator: `@${process.env.NEXT_PUBLIC_APP_NAME}`,
    },
  };
}

export function generateStaticParams() {
  return appConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params }: Props) {
  const { locale } = params;
  const dir = locale === "fa" ? "rtl" : "ltr";

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} dir={dir}>
      <body dir={dir}>
        <RootLayoutProvider locale={locale} dir={dir}>
          {children}
        </RootLayoutProvider>
      </body>
    </html>
  );
}
