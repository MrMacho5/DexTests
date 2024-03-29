import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      chainRpc={{ [Chainid.Testnet]: " https://rpc.testnet.tabichain.com" }}
      desiredChainId={Chainid.Testnet}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
