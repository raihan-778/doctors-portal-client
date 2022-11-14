import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOption, setAppointmentOption] = useState([]);

  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-secondary text-center font-bold ">
        You have selected Data: {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointment;
