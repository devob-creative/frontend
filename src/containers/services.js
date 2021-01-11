import ReactMarkdown from "react-markdown";
import { Service, Text, Container, Row, Col } from "../components";
import { useServices } from "../apollo/actions/service.actions";

export default function Services({ ...props }) {
  const { data: { services } = {}, loading } = useServices();
  return (
    <Container {...props}>
      <Service.Wrapper>
        <Row className="mx-0">
          {services?.map((item) => (
            <Col key={item.id} sm={4} className="px-0">
              <Service.Item icon={item.icon}>
                <Text as="strong" text={item.title} transform="uppercase" />
                <ReactMarkdown>{item.content}</ReactMarkdown>
              </Service.Item>
            </Col>
          ))}
        </Row>
      </Service.Wrapper>
    </Container>
  );
}
