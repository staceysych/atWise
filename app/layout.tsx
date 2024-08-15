import { ChakraProvider, LocaleProvider } from "./providers";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "atWise",
    template: "%s | atWise",
  },
  description: "Legal insights and advice for tech startups.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <ChakraProvider>
          <LocaleProvider>
            <Navbar />
            {children}
            <Footer />
          </LocaleProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
