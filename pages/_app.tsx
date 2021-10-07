import Nav from "@layout/Nav/Nav";
import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
