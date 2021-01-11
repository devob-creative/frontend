import { Layout, Head, Portfolio, Paragraph, Container } from "../components";
import { Services, CarouselContainer } from "../containers";
import { usePortfolios } from "../apollo/actions/portfolio.action";

function Home() {
  const { data: { portfolios } = {}, loading } = usePortfolios();
  console.log(portfolios);
  return (
    <Layout>
      <Head />
      <CarouselContainer />
      <Services className="mb-5" />
      <Paragraph title="Portfolio" className="mb-5" />
      <Container>
        <Portfolio.Wrapper className="mb-5">
          {portfolios?.map((item) => (
            <Portfolio.Item
              key={item.id}
              title={item.title}
              date={item.created_at}
              image={item.cover?.url || item.image[0].url}
            />
          ))}
        </Portfolio.Wrapper>
      </Container>
    </Layout>
  );
}

export default Home;
