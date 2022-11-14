import React from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

import login from "../../../assets/images/appointment.png";

const Form = () => {
  return (
    <section
      className="mt-16 p-3 border rounded-lg "
      style={{ background: `url(${login})`, backgroundSize: "cover" }}
    >
      <div className="text-center my-16">
        <h6 className="text-secondary ">Contact us</h6>
        <h2 className="text-3xl">Stay connected with us</h2>
      </div>
      <div>
        <form className="grid grid-cols-1 mx-auto w-1/2 gap-3">
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            text="subject"
            placeholder="Subject"
            className="input input-bordered input-primary w-full "
          />
          <textarea
            className="textarea textarea-bordered  h-24"
            placeholder="Bio"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn bg-primary w-1/2"
          />
        </form>
      </div>
    </section>
  );
};

export default Form;
