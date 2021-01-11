import { Carousel } from "../components";
import { SwiperSlide } from "swiper/react";
import { useSlides } from "../apollo/actions/slide.action";

export default function CarouselContainer({ ...props }) {
  const { data: { slides } = {}, loading } = useSlides();
  return (
    <Carousel.Wrapper {...props}>
      <SwiperSlide>
        {slides?.map((item) => (
          <Carousel.Item
            key={item.id}
            title={item.title}
            image={item.image.url}
            actionTitle={item.action}
            actionUrl={item.redirect}
          />
        ))}
      </SwiperSlide>
    </Carousel.Wrapper>
  );
}
