import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "700", "300", "400", "500"],
});

export const metadata = {
  title: "TEDxNITAndhraPradesh",
  description: `TEDx NIT AndhraPradesh aims to empower local communities to connect,
learn, and inspire one another, contributing to TED's overarching goal of spreading impactful ideas worldwide`,
  keywords:
    "TEDx, NIT Andhra Pradesh, Ideas, Inspiration, TEDxNITAndhraPradesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${roboto.className} bg-black max-w-screen`}>
        {<NavBar />}
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
