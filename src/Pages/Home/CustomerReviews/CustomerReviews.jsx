import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomerReviews.css"; // Custom CSS for centered style

const testimonials = [
  {
    quote:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "Their service changed my workflow! I feel more productive and aligned every day.",
    name: "Nasir Uddin",
    role: "CEO",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "I've never felt more supported—literally and professionally. Great experience!",
    name: "Rasel Ahamed",
    role: "CTO",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const CustomerReviews = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Icon */}
        <div className="mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2438/2438078.png"
            alt="icon"
            className="mx-auto h-12"
          />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What our customers are saying
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md min-h-[300px] flex flex-col justify-between text-left">
                <div>
                  <span className="text-3xl text-gray-400">“</span>
                  <p className="text-sm text-gray-600">{item.quote}</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;
