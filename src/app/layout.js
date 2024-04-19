import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Meyers Portfolio",
  description: "Web and UI Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-M24V9K6HPZ" />
    </html>
  );
}
