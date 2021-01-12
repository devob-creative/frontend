import { useState } from "react";
import { Layout, Head, Hero, Button, Container } from "../components";
import { PortfolioContainer } from "../containers";
import { useCategories } from "../apollo/actions/category.action";

function Portfolios() {
  const { data, loading } = useCategories();
  const categories = data && [{ name: "All", slug: "" }, ...data.categories];
  const [filter, setFilter] = useState({ slug: "" });
  return (
    <Layout>
      <Head title="Portfolio" />
      <Hero title="Portfolio" />
      <Container>
        {categories?.map((cat, index) => (
          <Button
            key={index}
            title={cat.name}
            onClick={() => setFilter({ slug: cat.slug })}
            variant={cat.slug === filter?.slug ? "secondary" : "tertiary"}
            size="small"
            uppercase={false}
          />
        ))}
      </Container>
      <Container>
        <PortfolioContainer filter={filter?.slug ? filter : {}} />
      </Container>
    </Layout>
  );
}

export default Portfolios;
