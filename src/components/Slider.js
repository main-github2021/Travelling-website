import React from "react";
import "./SliderStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper";
import Img7 from "../image/7.jpg";
import Img10 from "../image/10.jpg";
import Img4 from "../image/4.jpg";
const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true
        }}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-container">
            <div className="banner">
              <h1>Your Journey Your Story</h1>
              <p>Choose to make your journey</p>
              <button className="show">Travel Plan</button>
            </div>
            <img alt="img" src={Img7} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-container">
            <div className="banner">
              <h1>Your Adventure Start Here!</h1>
              <p>Choose to make your journey rememberable</p>
              <button className="show">Start Journey</button>
            </div>
            <img alt="img" src={Img10} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="banner">
              <h1>Go And Travel The world</h1>
              <p>Choose for the best excitement ever</p>
              <button className="show">Book Now</button>
            </div>
            <img alt="img" src={Img4} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
