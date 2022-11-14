import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns/esm";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  // let footer = <p>Please pick a day.</p>;
  // if (selectedDate) {
  //   <p>You picked {format(selectedDate, "PP")}.</p>;
  // }
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>

          <img
            alt="doctors-chair"
            src={chair}
            className="max-width-sm w-1/2 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
