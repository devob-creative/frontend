import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Layout, Hero, Text, Presentation, Head } from "../../components/index";
import { usePortfolio } from "../../apollo/actions/portfolio.action";

export default function Project({ referer }) {
  const { query: { slug } = {} } = useRouter();
  const { data: { portfolioBySlug } = {}, loading } = usePortfolio({
    variables: { slug },
  });
  const meta = {
    title: portfolioBySlug?.title,
    description: portfolioBySlug?.description,
    keywords: portfolioBySlug?.keywords,
    image: portfolioBySlug?.cover?.url || portfolioBySlug?.image[0].url,
    url: referer,
  };
  return (
    <Layout>
      <Head {...meta} />
      <Hero wide>
        <div className="w-50 mx-auto text-center">
          <Text as="h1" weight="bold">
            {portfolioBySlug?.title}
          </Text>
          <Text as="div" font="secondary" size="tall" className="mt-4 px-3">
            {portfolioBySlug?.content && (
              <ReactMarkdown>{portfolioBySlug?.content}</ReactMarkdown>
            )}
          </Text>
        </div>
      </Hero>
      <Presentation images={portfolioBySlug?.image} />
      <style global="true">{`
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

export async function getServerSideProps({ req }) {
  return {
    props: {
      referer: req.headers.referer,
    },
  };
}
