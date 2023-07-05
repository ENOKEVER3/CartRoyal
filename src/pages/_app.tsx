import theme from "@/config/theme";
import "@/styles/globals.css";
import "../styles/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Component theme={theme} {...pageProps} />
    </ChakraProvider>
  );
}
