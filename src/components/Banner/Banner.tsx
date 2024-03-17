import { Container, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CastomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 3),
  },
})) as typeof Container;

export const Banner = () => {
  const links = ["phones", "accessories", "tablets"];

  return (
    <CastomContainer>
      <Swiper
        className="banner"
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {links.map((link) => (
          <SwiperSlide key={link} className="banner__item">
            <Link to={`/${link}`}>
              <img
                src={`img/banner-${link}.png`}
                alt="Banner image"
                className="banner__img"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </CastomContainer>
  );
};
