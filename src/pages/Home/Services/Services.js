import React from "react";
import florid from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import SingleService from "./SingleService";

const Services = () => {
  const serviceDetails = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: florid,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 1,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 mt-16 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-2">
      {serviceDetails.map((service) => (
        <SingleService key={service.id} service={service}></SingleService>
      ))}
    </div>
  );
};

export default Services;
