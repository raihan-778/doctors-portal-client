import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, price, slots } = treatment; //treatment is also  appointment options, just diffrent name with name and slots
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: userName,
      slot,
      email,
      phone,
      price,
    };
    //todo list
    /*
     *send data to the server
     *and once data is saved then close the modal
     *and display success toast
     */
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTreatment(null);
        if (data.acknowledged) {
          toast.success("booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              name="date"
              disabled
              value={date}
              className="input input-bordered input-xs w-full "
            />
            <select name="slot" className="select select-bordered w-full">
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
              disabled={user}
              defaultValue={user?.displayName}
              placeholder="Input you name"
              className="input input-bordered input-xs w-full "
            />
            <input
              type="email"
              name="email"
              disabled={user}
              defaultValue={user?.email}
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
