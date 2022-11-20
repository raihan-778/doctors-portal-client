import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddDoctor = (data) => {};

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
            <span className="label-text">Enter Password</span>
          </label>
          <input
            {...register("password", {
              minLength: 6,
              required: "Password should be 6 caracter long or more",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "password must be strong",
              },
            })}
            type="password"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {errors.password && (
          <p className="text-orange-600" role="alert">
            {errors.password?.message}
          </p>
        )}
        <label className="label">
          <span className="label-text">Forgot Password?</span>
        </label>

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
