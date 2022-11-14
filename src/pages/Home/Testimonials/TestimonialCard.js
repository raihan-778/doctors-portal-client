import React from "react";

const TestimonialCard = ({ review }) => {
  const { author, img, text } = review;
  return (
    <div className="container flex flex-col text-left w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={img}
              alt=""
              className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <span className="text-xs dark:text-gray-400">2 days ago</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
