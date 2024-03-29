import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Tasker",
  description: "Task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
