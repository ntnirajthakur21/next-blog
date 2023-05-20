import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL, PORTAL_MAIN_CONTAINER_ID } from "@/variables";
import { ChakraProvider, Flex, theme } from "@chakra-ui/react";
import Root from "@/components/Root/Root";
import "@/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

axios.defaults.baseURL = API_BASE_URL;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const status = error.response.status;

      switch (status) {
        case 401:
          break;
        default:
          return Promise.reject(error);
          break;
      }
    }
  );

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Next Blogging | Scholarsspace</title>
        </Head>
        <Root>
          {Component.getLayout ? (
            Component.getLayout(<Component {...pageProps} />)
          ) : (
            <Flex direction="column" minHeight="100vh">
              <Component {...pageProps} />
            </Flex>
          )}
        </Root>
        <div id={PORTAL_MAIN_CONTAINER_ID} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
