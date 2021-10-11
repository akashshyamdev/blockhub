import { I18n } from "@aws-amplify/core";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/Layout/Layout";
import { strings } from "@lib/string";
import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    I18n.putVocabularies(strings);
  }, []);

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
