import React from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Chair from "./../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className='hero bg-[url("https://i.ibb.co/9ccZnMZ/bg.png")] h-96 w-full bg-cover bg-center p-20'>
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <img
          alt="chair"
          src={Chair}
          className="sm:w-full lg:w-1/2 rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Banner;
