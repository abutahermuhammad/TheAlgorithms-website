import React, { useState } from "react";
import "./../styles/globals.css";
import "./../styles/notebook.css";
import NextNprogress from "nextjs-progressbar";
import { AppProps } from "next/app";
import { lightTheme, darkTheme } from "src/hooks/themes";
import Head from "src/components/head";
import { appWithTranslation } from "next-i18next";
import { QueryProvider } from "src/hooks/query";
import { DarkThemeProvider } from "src/hooks/darkTheme";
import DefaultLayout from "src/layouts/default";
import NextAdapterPages from 'next-query-params/pages';
import { QueryParamProvider } from 'use-query-params';
import { CssBaseline, ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout || DefaultLayout;

  return (
    <>
      <DarkThemeProvider value={[isDarkTheme, setIsDarkTheme]}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <QueryProvider>
            <QueryParamProvider adapter={NextAdapterPages}>
              <Head />
              <CssBaseline />
              <NextNprogress
                color="#fff"
                height={2}
                options={{ showSpinner: false }}
              />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryParamProvider>
          </QueryProvider>
        </ThemeProvider>
      </DarkThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
