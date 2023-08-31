import type { Metadata } from "next";
import { Inter } from "next/font/google";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo by Carl",
  description: "A portfolio site for Carl Gelin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "black", color: "white" }}>
      <Navbar />
      <body className={inter.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
