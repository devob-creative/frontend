import Link from "next/link";
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
            <Link key={item.id} href={`/projects/${item.slug}`}>
              <a>
                <Portfolio.Item
                  title={item.title}
                  date={item.created_at}
                  image={item.cover?.url || item.image[0].url}
                />
              </a>
            </Link>
          ))}
        </Portfolio.Wrapper>
      </Container>
    </Layout>
  );
}

export default Home;
