import React from "react";

import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import marker from "../../../assets/icons/marker.svg";

import FeaturesCard from "./FeaturesCard";

const ServiceFeatures = () => {
  const featureDetails = [
    {
      titel: "Openning Hours",
      description: "Please be inform the openning hours befor visit",
      icon: clock,
      id: 1,
    },
    {
      titel: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      id: 2,
    },
    {
      titel: "Contact Us",
      description: "+000 123 456789",
      icon: phone,
      id: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featureDetails.map((feature) => (
        <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>
      ))}
    </div>
  );
};

export default ServiceFeatures;
