import { ChakraProvider, LocaleProvider } from "./providers";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
