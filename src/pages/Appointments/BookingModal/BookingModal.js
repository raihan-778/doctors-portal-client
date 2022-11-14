import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; //treatment is also  appointment options, just diffrent name with name and slots
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      patient: name,
      treatment: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              type="text"
              name="slot"
              value={date}
              disabled
              className="input input-bordered input-xs w-full "
            />
            <select className="select select-bordered w-full">
              {slots.map(
                (
                  slot,
                  i // here is is used to avoid key value warning.
                ) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                )
              )}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Input you name"
              className="input input-bordered input-xs w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered input-xs w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-xs w-full "
            />
            <br />
            <input
              className=" mt-5 w-full  btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
