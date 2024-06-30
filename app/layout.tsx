import { ChakraProvider, LocaleProvider } from "./providers";
import Navbar from "./components/Navbar";

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
          </LocaleProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
