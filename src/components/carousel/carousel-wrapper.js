import { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import { Icon } from "../index";
import styles from "../../styles/carousel.module.scss";

SwiperCore.use([Autoplay, Navigation]);

export default function CarouselWrapper({ className, children, ...props }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: navigationNextRef.current,
      prevEl: navigationPrevRef.current,
    },
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.update();
    },
  };
  return (
    <div className={cn(styles.wrapper, className && className)} {...props}>
      <div className={styles.navigation}>
        <button ref={navigationPrevRef}>
          <Icon type="regular" name="arrow-left" />
        </button>
        <button ref={navigationNextRef}>
          <Icon type="regular" name="arrow-right" />
        </button>
      </div>
      <Swiper {...swiperOptions}>{children}</Swiper>
    </div>
  );
}

CarouselWrapper.propTypes = {
  className: PropTypes.string,
};
