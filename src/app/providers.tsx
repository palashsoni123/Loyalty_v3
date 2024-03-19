'use client';

import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import UserContextPovider from "./(FavLoyalty)/context/UserProvider";

export function Providers({ children }:any) {
  return (
    <AppProvider i18n={en}>
      <UserContextPovider>{children}</UserContextPovider>
    </AppProvider>
  );
}