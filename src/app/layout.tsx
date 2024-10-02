import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/Provider";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       data-theme="cupcake"
       className="max-w-[2520px] px-1 mx-auto bg-gray-100"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
