import { Inter } from "next/font/google";
import "./globals.css";
import "tippy.js/dist/tippy.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS",
  description: "My first next.js project ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
