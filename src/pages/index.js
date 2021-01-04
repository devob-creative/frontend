import { Layout } from "../components";
import { Services, CarouselContainer } from "../containers";

function Home() {
  return (
    <Layout>
      <CarouselContainer />
      <Services />
    </Layout>
  );
}

export default Home;
