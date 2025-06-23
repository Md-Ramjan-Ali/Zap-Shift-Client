import React from 'react';
import location from "../../../assets/location-merchant.png";
import bgImage from "../../../assets/be-a-merchant-bg.png";

const MarchantSection = () => {
  return (
    <div className=" bg-[#03373D] p-20 rounded-2xl bg-no-repeat" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="mt-14 -ml-40">
          <img src={location} className="max-w-sm rounded-lg" />
        </div>
        <div className="text-white">
          <h1 className="text-4xl font-bold max-w-2xl">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 max-w-md">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time. Provident
            cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
          <button className="btn btn-primary mr-5 rounded-full">
            Get StaBecome a Merchantrted
          </button>
          <button className="btn btn-primary rounded-full btn-outline text-white">
            Earn with Profast Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarchantSection;