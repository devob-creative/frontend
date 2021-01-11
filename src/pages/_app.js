import withApollo from "../hoc/withApollo";
import "../styles/global.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withApollo(MyApp);
