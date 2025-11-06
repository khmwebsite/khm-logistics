import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: `KHM Logistics - Reliable Freight and Logistics Solutions`,
  description: ` KHM Logistics offers dependable freight and logistics services, ensuring your cargo reaches its destination safely and on time. Trust us for all your shipping needs.`,
  // Other metadata...
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
