import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
const MakeAppointment = () => {
  return (
    <section
      className="my-24 border rounded-xl"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt="doctor"
            className=" md:block lg:block hidden max-w-sm  -mt-24 -mb-4 rounded-lg shadow-2xl"
          />
          <div className="text-white text-left">
            <h6 className="text-xl font-bold text-secondary">Appointment</h6>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
