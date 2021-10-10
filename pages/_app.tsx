import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/Layout/Layout";
import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
