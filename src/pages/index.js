import { Layout } from "../components";
import { Services, CarouselContainer } from "../containers";

function Home() {
  return (
    <Layout>
      <CarouselContainer />
      <Services className="mb-5"/>
    </Layout>
  );
}

export default Home;
