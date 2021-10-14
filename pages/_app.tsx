import { I18n } from "@aws-amplify/core";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@layout/Layout/Layout";
import { strings } from "@lib/string";
import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    I18n.putVocabularies(strings);

    I18n.setLanguage("en");
  }, []);

  return (
    <SessionProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ToastContainer
          position={"bottom-right"}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
