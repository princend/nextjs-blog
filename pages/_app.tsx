import React from "react";
import '../styles/global.css';

export default function App({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
    return <Component {...pageProps} />;
  }