import { ChakraProvider, LocaleProvider } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
