import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "NomeN",
  description: "A simple-dimple resume!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
