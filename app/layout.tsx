import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dra. Camila Neiva - Meus links",
  description: "Minha página de links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
