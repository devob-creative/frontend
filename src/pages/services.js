import {
  Layout,
  Head,
  Hero,
  Text,
  Paragraph,
  Row,
  Col,
  Container,
  TechnologyWidget,
} from "../components";
import { Services as ServicesContainer } from "../containers";
import { TECHNOLOGIES } from "../constants";

function Services() {
  return (
    <Layout>
      <Head title="What We Do"/>
      <Hero wide>
        <div className="w-50 mx-auto text-center">
          <Text as="h1" weight="bold">
            End to End <br />
            Development Services
          </Text>
          <Text as="p" font="secondary" size="tall" className="mt-4 px-3">
            Hire effective remote developers for your project. They work as if
            they are right next door to your office. Cooperation with a
            Azerbaijani outsourcing vendor for a company in the USA and Europe
            eliminates all downtime because due to the time difference we work
            while you sleep. This greatly speeds up project development time.
          </Text>
        </div>
      </Hero>
      <ServicesContainer className="pb-5 mb-4" />
      <Container>
        <Paragraph title="Technologies" />
        <div className="w-75 mx-auto">
          <Row className="my-5">
            {TECHNOLOGIES.map((i, index) => (
              <Col key={index} sm="3">
                <TechnologyWidget
                  type={i.type}
                  icon={i.icon}
                  title={i.title}
                  className="mb-4"
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Layout>
  );
}

export default Services;
