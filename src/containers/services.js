import { Service, Text, Container, Row, Col } from "../components";

export default function Services({ ...props }) {
  return (
    <Container {...props}>
      <Service.Wrapper>
        <Row className="mx-0">
          <Col sm={4} className="px-0">
            <Service.Item icon="tv-alt">
              <Text as="strong" text="Web Development" transform="uppercase" />
              <Text as="p" font="secondary" className="mt-3 mb-0">
                We can make your Company website and brand it. We use{" "}
                <b>ReactJs, VueJs, NextJs, NodeJs, php</b>
              </Text>
            </Service.Item>
          </Col>
          <Col sm={4} className="px-0">
            <Service.Item icon="mobile">
              <Text
                as="strong"
                text="Mobile Development"
                transform="uppercase"
              />
              <Text as="p" font="secondary" className="mt-3 mb-0">
                Special software solutions for <b>Android</b> and <b>IOS</b>.
                Get into app stores before your competitors, stay one step
                ahead.
              </Text>
            </Service.Item>
          </Col>
          <Col sm={4} className="px-0">
            <Service.Item icon="code-merge">
              <Text as="strong" text="API Development" transform="uppercase" />
              <Text as="p" font="secondary" className="mt-3 mb-0">
                We are make a strong API infrastructure for your systems. We use{" "}
                <b>Express</b>, <b>NestJS</b>
              </Text>
            </Service.Item>
          </Col>
        </Row>
      </Service.Wrapper>
    </Container>
  );
}
