import { Layout, Portfolio, Paragraph } from "../components";
import { Services, CarouselContainer } from "../containers";

function Home() {
  return (
    <Layout>
      <CarouselContainer />
      <Services className="mb-5" />
      <Paragraph title="Portfolio" className="mb-5" />
      <Portfolio.Wrapper className="mb-5">
        <Portfolio.Item
          title="Website for Minion"
          date="28 April 2017"
          image="http://devob.az/img/portfolio/8924525719289a3343a689fb0cf28f93.png"
        />
      </Portfolio.Wrapper>
    </Layout>
  );
}

export default Home;
