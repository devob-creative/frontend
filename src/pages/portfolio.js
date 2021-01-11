import { useState } from "react";
import {
  Layout,
  Head,
  Portfolio,
  Hero,
  Mixer,
  Button,
  Container,
} from "../components";

const data = [
  {
    id: 1,
    title: "Website for Minion",
    date: "28 April 2017",
    image: "http://devob.az/img/portfolio/8924525719289a3343a689fb0cf28f93.png",
    category: "web-development",
  },
];

function Portfolios() {
  const [filter, setFilter] = useState({ category: "" });
  const buttons = [
    {
      title: "All",
      category: "",
    },
    {
      title: "Web Development",
      category: "web-development",
    },
    {
      title: "Mobile Development",
      category: "mobile-development",
    },
    {
      title: "Branding",
      category: "branding",
    },
  ];
  return (
    <Layout>
      <Head title="Portfolio" />
      <Hero title="Portfolio" />
      <Container>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            onClick={() => setFilter({ category: button.category })}
            variant={
              button.category === filter?.category ? "secondary" : "tertiary"
            }
            size="small"
            uppercase={false}
          />
        ))}
      </Container>
      <Container>
        <Portfolio.Wrapper className="mb-5 mt-4">
          <Mixer
            data={data}
            filter={filter}
            renderItem={(item) => (
              <Portfolio.Item
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            )}
          />
        </Portfolio.Wrapper>
      </Container>
    </Layout>
  );
}

export default Portfolios;
