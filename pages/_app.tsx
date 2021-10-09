import Nav from "@layout/Nav/Nav";
import "@styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
