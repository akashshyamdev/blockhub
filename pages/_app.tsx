import { ChakraProvider } from "@chakra-ui/react";
import Nav from "@layout/Nav/Nav";
import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
