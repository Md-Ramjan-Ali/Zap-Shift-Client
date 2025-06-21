import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

// Dummy client logos — you can replace these with your own image links or imported files
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogoSlider = () => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          We've helped thousands of sales teams
        </h2>

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="overflow-hidden"
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-14 flex items-center">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-6 w-full transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
