import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots } = appointmentOption;
  return (
    <div>
      <div className="card text-center shadow-xl">
        <div className="card-body">
          <h2 className=" text-center text-2xl text-secondary font-bold">
            {name}
          </h2>
          <p>
            <small>Price : {price}</small>
          </p>
          <p>{slots.length > 0 && slots[0]}</p>
          <p>
            {slots.length > 0
              ? `${slots.length}${
                  slots.length > 1 ? ` Appointments` : ` Appointment`
                } are available`
              : `Sorry there is no empty appointment `}
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(appointmentOption)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
