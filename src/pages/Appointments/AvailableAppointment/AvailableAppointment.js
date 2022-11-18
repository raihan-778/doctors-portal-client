import { useQuery } from "@tanstack/react-query";

import { format } from "date-fns";
import React, { useState } from "react";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
  // const [appointmentOption, setAppointmentOption] = useState([]);//this state is replaced by react query
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    //here appointmentOption=[] is used to avoid innitial data fetching err.
    queryKey: ["appointmentOptions", date], //here query key is mostly working as useEffect parameter inside []
    queryFn: () =>
      fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);/* This code block is replaced by react query */

  return (
    <div className="mt-16">
      <p className="text-secondary text-center font-bold ">
        You have selected Data: {format(selectedDate, "PP")}
      </p>
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          key={treatment.id}
          refetch={refetch}
          isLoading={isLoading}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
