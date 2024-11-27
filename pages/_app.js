import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import '../src/styles/all.scss';

function MyApp({ Component, pageProps }) {
    return (
        <HelmetProvider>
            <Component {...pageProps} />
        </HelmetProvider>
    );
}

export default MyApp;
