import { Layout, Carousel, Service, Container, Row, Col } from "../components";
import { SwiperSlide } from "swiper/react";

function Home() {
  return (
    <Layout>
      <Carousel.Wrapper>
        <SwiperSlide>
          <Carousel.Item
            title="We're Creative"
            image="/images/slide.jpg"
            actionTitle="Get Started"
            actionUrl="#"
          />
        </SwiperSlide>
      </Carousel.Wrapper>
      <Container>
        <Row>
          <Col sm={4}>
            <Service.Wrapper>
              <Service.Item icon="tv-alt" />
            </Service.Wrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Home;
