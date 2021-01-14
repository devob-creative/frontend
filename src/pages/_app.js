import App from "next/app";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../hoc/withApollo";
import "../styles/global.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withApollo(MyApp, { getDataFromTree });
