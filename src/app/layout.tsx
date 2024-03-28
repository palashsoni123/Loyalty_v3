import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import WidgetWrapper from "./(FavLoyalty)/_utils/WidgetWrapper";

const inter = Inter({ subsets: ["latin"] });
// import Head from "next/head";

export const metadata: Metadata = {
  title: "shopify-api-key",
  description: "4ffa6fde1a943507efe9889b2b6cf6f8",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="shopify-api-key"
          content="5ea435dc346992717703cbc914fb85c4"
        />
        <script
          src={`https://cdn.shopify.com/shopifycloud/app-bridge.js`}
        ></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <WidgetWrapper>{children}</WidgetWrapper>
        </Providers>
      </body>
    </html>
  );
}
