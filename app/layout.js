import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({
  src: [
    {
      path: "./tahoma.ttf",
      weight: "400",
    },
    {
      path: "./tahoma-bd.ttf",
      weight: "700",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "TikTok Coins: Buy and recharge Coins to send Gifts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
