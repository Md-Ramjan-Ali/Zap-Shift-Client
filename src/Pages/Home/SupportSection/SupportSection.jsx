import React from "react";
import image1 from "../../../assets/live-tracking.png";
import image2 from "../../../assets/safe-delivery.png";
import image3 from "../../../assets/tiny-deliveryman.png";

const cardData = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: image1, // tracking icon
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: image2, // secure delivery icon
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: image3, // call center icon
  },
];

const SupportSection = () => {
  return (
    <section className="">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 gap-6 ">
          {cardData.map((item, index) => (
            <div
              data-aos="zoom-in-up"
              key={index}
              className="flex items-center bg-white p-8 border border-base-300 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
            >
              {/* Left: Image */}
              <div className="flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-44 pr-10 object-center"
                />
              </div>

              {/* Vertical Dashed Divider */}
              <div className="border-l-2 border-dashed border-gray-900 h-full"></div>

              {/* Right: Text */}
              <div className=" p-10 ">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
