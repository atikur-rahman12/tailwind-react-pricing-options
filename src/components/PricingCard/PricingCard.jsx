import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="border bg-white text-black rounded-2xl p-4">
      {/* card header */}
      <div>
        <h2 className="text-5xl mb-2">{name}</h2>
        <h4 className="text-3xl mb-10">{price}</h4>
      </div>
      {/* card body */}
      <div className="bg-amber-300 h-105 rounded-2xl p-5">
        <p className="mb-5">{description}</p>
        <div className="p-2">
          {features.map((feature, index) => (
            <PricingFeatures key={index} feature={feature}></PricingFeatures>
          ))}
        </div>
      </div>
      <button className="btn w-full rounded-lg mt-2">Subscribe</button>
    </div>
  );
};

export default PricingCard;
