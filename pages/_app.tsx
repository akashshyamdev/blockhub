import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import Nav from "../layout/Nav";
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
