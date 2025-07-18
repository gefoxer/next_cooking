import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Food</title>
        <link rel="icon" href="/img/logo.svg" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 