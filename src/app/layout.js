import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-poppins" });


export const metadata = {
  title: "SPT - Best Pharma/IT Solutions",
  description: "Satu Pharama Tech - Your trusted IT consultant.",
  keywords: "Pharma Network Development Company, Custom software development company, Pharma network, Web development agency, Mobile app development company, Ai software development",
  openGraph: {
    title: "SPT - Best Pharma/IT Solutions",
    description: "Helping businesses start pharmaceutical, hospital, clinics in India/Africa and build software applications for web & mobile.",
    url: "https://satupharmtech.com/",
    siteName: "SPT",
    images: [
      {
        url: "/og-image.jpg", // Thumbnail image when shared
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        <div className="border-t border-gray">
          <Footer />
        </div>
      </body>
    </html>
  );
}
