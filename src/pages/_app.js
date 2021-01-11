import "../styles/global.scss";
import "swiper/swiper.scss";
import withApollo from "../hoc/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo(MyApp, { getDataFromTree });
