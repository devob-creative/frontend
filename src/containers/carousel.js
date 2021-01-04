import { Carousel } from "../components";
import { SwiperSlide } from "swiper/react";

export default function CarouselContainer({ ...props }) {
  return (
    <Carousel.Wrapper {...props}>
      <SwiperSlide>
        <Carousel.Item
          title="We're Creative"
          image="/images/slide.jpg"
          actionTitle="Get Started"
          actionUrl="#"
        />
      </SwiperSlide>
    </Carousel.Wrapper>
  );
}
