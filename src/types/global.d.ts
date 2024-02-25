type Locale = "en" | "fa";

interface ChildrenComponent {
  children: ReactNode;
}

interface AppConfig {
  locales: Locale[];
  defaultLocale: Locale;
}

interface CommonPageParams {
  locale: Locale;
}
