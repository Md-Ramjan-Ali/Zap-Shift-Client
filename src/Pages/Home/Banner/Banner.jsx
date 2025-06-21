import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg1 from "../../../assets/banner/banner1.png";
import BannerImg2 from "../../../assets/banner/banner2.png";
import BannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="">
      <div className="rounded-2xl overflow-hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={true}
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
         
          
        >
          <div>
            <img
              src={BannerImg1}
              className="w-full h-[500px] object-cover"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src={BannerImg2}
              className="w-full h-[500px] object-cover"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src={BannerImg3}
              className="w-full h-[500px] object-cover"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
