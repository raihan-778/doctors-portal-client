import React from "react";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonials = () => {
  const reviews = [
    {
      author: "Winson Herry",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      id: 1,
    },
    {
      author: "jessy",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      id: 2,
    },
    {
      author: "Lara bell",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      id: 3,
    },
  ];
  return (
    <div>
      <div className="flex justify-between  items-center">
        <div>
          <h5 className="text-secondary">Testimonial</h5>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <img className="w-32" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
