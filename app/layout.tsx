import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mac Finder - Find Your Perfect Mac",
  description: "Discover the best Mac for your needs. Compare models, prices, and get personalized recommendations for MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro.",
  keywords: ["Mac", "MacBook", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Apple", "buy Mac", "Mac comparison", "best Mac"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
