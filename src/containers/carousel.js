import { Fragment } from "react";
import { Carousel, Skeleton } from "../components";
import { SwiperSlide } from "swiper/react";
import { useSlides } from "../apollo/actions/slide.action";

export default function CarouselContainer({ ...props }) {
  const { data: { slides } = {}, loading } = useSlides();
  return (
    <Fragment>
      {loading ? (
        <Skeleton.CarouselSkeleton />
      ) : (
        <Carousel.Wrapper {...props}>
          {slides?.map((item) => (
            <SwiperSlide key={item.id}>
              <Carousel.Item
                title={item.title}
                image={item.image.url}
                actionTitle={item.action}
                actionUrl={item.redirect}
              />
            </SwiperSlide>
          ))}
        </Carousel.Wrapper>
      )}
    </Fragment>
  );
}
