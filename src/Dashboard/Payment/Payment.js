import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
  const bookingInfo = useLoaderData();
  console.log("bookin Info", bookingInfo);

  const { treatment, slot, price, appointmentDate } = bookingInfo;
  return (
    <div>
      <h2 className="text-3xl text-primary">
        Make Your Payment For {treatment}
      </h2>
      <p className="text-xl">
        Please Pay <strong className="text-orange-600">${price}</strong> for
        your appointment on{" "}
        <span className="text-success">{appointmentDate}</span> at{" "}
        <small className="text-success">{slot}</small>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingInfo={bookingInfo} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
