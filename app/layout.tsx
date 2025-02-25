import "./globals.css";
import { Markazi_Text } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PageTransitionWrapper } from "./components/PageTransitionWrapper";

const markaziText = Markazi_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-markazi-text",
});

export const metadata = {
  title: "DMUN XII",
  description: "Dalton Model United Nations Conference XII",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${markaziText.variable} font-markazi bg-blue-50`}>
        <Navbar />
        <PageTransitionWrapper>
          <main className="min-h-screen p-8">{children}</main>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
