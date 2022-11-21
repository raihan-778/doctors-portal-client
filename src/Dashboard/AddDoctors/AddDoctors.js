import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

const AddDoctors = () => {
  const { data: sepcialities = [], isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpeciality");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  /*
img:ce9c20640044f2f3784a2967dfce6506 
 */

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data.img[0]);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imgData.data.url,
          };

          //save doctors info in the database

          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} Added Successful`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl text-primary">This is Doctors page</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Name</span>
          </label>
          <input
            {...register("name", {
              maxLength: 20,
              required: "Namd field cannot be empty",
            })}
            type="text"
            placeholder="Type your name"
            name="name"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name?.type === "required" && (
            <p className="text-orange-600" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input
            {...register("email", {
              required: "Please enter a valid email address",
            })}
            type="email"
            placeholder="Type here"
            name="email"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-orange-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
        </div>
        <select
          {...register("speciality", {
            required: "Please select a speciality",
          })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Pick a Speciality.
          </option>
          {sepcialities.map((speciality) => (
            <option key={speciality._id}>{speciality.name}</option>
          ))}
        </select>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Name</span>
          </label>
          <input
            {...register("img")}
            type="file"
            placeholder="Type your name"
            name="img"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img?.type === "required" && (
            <p className="text-orange-600" role="alert">
              {errors.img?.message}
            </p>
          )}
        </div>

        <input
          className="btn mt-5 w-full max-w-xs btn-accent"
          value="Add A Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
