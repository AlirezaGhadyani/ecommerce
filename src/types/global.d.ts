type Locale = "en" | "fa";

interface ChildrenComponent {
  children: ReactNode;
}

interface AppConfig {
  locales: Locale[];
  defaultLocale: Locale;
  ui: {
    admin: {
      sidebarOpenWidth: number;
      sidebarCloseWidth: number;
    };
  };
}

interface CommonPageParams {
  locale: Locale;
}
