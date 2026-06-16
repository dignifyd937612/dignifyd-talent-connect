import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SmoothFollower from "@/components/common/cursors/SmoothFollower";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { Figtree } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={figtree.variable}>
      <body className="bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <SmoothFollower />

          <main className="px-6 md:px-10 lg:px-16">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
