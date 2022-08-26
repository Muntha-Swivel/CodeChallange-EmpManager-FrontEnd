import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../Components/Layout";
import NavBar from "../Components/NavBar";
import { wrapper } from "../Store/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
