import { CircleCheckBig } from 'lucide-react';
import React from 'react';
import { Features } from 'tailwindcss';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex mb-2'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeatures;