import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    margin: 0,
    padding: 0,
    backgroundColor: "#FFAF45", // Light grey background
    fontFamily: inter.className,
  };
  return <body style={style}>{children}</body>;
}
