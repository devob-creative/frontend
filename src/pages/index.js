import { Layout, Head, Paragraph, Container } from "../components";
import { Services, CarouselContainer, PortfolioContainer } from "../containers";

function Home() {
  return (
    <Layout>
      <Head />
      <CarouselContainer />
      <Services className="mb-5" />
      <Paragraph title="Portfolio" className="mb-5" />
      <Container>
        <PortfolioContainer />
      </Container>
    </Layout>
  );
}

export default Home;
