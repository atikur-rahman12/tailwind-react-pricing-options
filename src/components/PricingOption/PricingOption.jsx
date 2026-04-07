import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className="mx-20">
      <h2 className="text-6xl mb-8 text-center mt-10">Get Our Membership</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {pricingData.map((pricing) => (
          <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
