import { Layout, Head, Portfolio, Paragraph, Container } from "../components";
import { Services, CarouselContainer } from "../containers";
import { useServices } from "../apollo/actions/service.actions";

function Home() {
  const { data: { services } = {}, loading } = useServices();
  return (
    <Layout>
      <Head />
      {services?.map((i) => (
        <h1 key={i.id}>{i.title}</h1>
      ))}
      <CarouselContainer />
      <Services className="mb-5" />
      <Paragraph title="Portfolio" className="mb-5" />
      <Container>
        <Portfolio.Wrapper className="mb-5">
          <Portfolio.Item
            title="Website for Minion"
            date="28 April 2017"
            image="http://devob.az/img/portfolio/8924525719289a3343a689fb0cf28f93.png"
          />
        </Portfolio.Wrapper>
      </Container>
    </Layout>
  );
}

export default Home;
