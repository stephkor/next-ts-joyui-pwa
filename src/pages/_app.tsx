import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useNProgress } from "@/hooks/use-nprogress";

import { CssBaseline, CssVarsProvider, Sheet } from "@mui/joy";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import realtiveTime from "dayjs/plugin/relativeTime";

import "@/styles/normalize.css";

dayjs.extend(realtiveTime);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useNProgress();

  return (
    <QueryClientProvider client={queryClient}>
      <CssVarsProvider defaultMode="system">
        <CssBaseline />
        <Component {...pageProps} />
      </CssVarsProvider>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async () => ({});

export default MyApp;
