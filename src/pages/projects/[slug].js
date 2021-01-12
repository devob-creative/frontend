import { useRouter } from "next/router";
import { Layout, Hero, Text, Presentation } from "../../components/index";
import { usePortfolio } from "../../apollo/actions/portfolio.action";

export default function Project(props) {
  const { query: { slug } = {} } = useRouter();
  const { data: { portfolioBySlug } = {}, loading } = usePortfolio({
    variables: { slug },
  });
  return (
    <Layout>
      <Hero wide>
        <div className="w-50 mx-auto text-center">
          <Text as="h1" weight="bold">
            {portfolioBySlug?.title}
          </Text>
          <Text as="p" font="secondary" size="tall" className="mt-4 px-3">
            {portfolioBySlug?.content}
          </Text>
        </div>
      </Hero>
      <Presentation images={portfolioBySlug?.image} />
      <style global={true}>{`
        nav {
          background-color: var(--bg-secondary);
        }
        body {
          color: ${portfolioBySlug?.colors?.text};
          background: ${portfolioBySlug?.colors?.background};
        }
      `}</style>
    </Layout>
  );
}
