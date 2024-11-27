import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../src/context/ThemeContext";

import "../src/styles/all.scss";
import "../src/components/Header/Header.scss";

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default MyApp;
