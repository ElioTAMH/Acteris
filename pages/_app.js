import React from "react";
import { HelmetProvider } from "react-helmet-async";

import "../src/styles/all.scss";
import "../src/components/Header/Header.scss";

function MyApp({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <div className="Global Light">
        <Component {...pageProps} />
      </div>
    </HelmetProvider>
  );
}

export default MyApp;
