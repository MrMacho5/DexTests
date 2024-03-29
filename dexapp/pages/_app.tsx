import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      chainRpc={{ [ChainId.Mainnet]: " https://rpc.testnet.tabichain.com" }}
      desiredChainId={ChainId.Mainnet}
      activeChain= "Tabi"
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
