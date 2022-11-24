import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    console.log(errors);
    createUser(data.email, data.password)
      .then((result) => {
        setSignupError("");
        console.log(result.user);
        toast("user created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUserInfo(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
      });
    const saveUser = (name, email) => {
      const user = { name, email };
      fetch("https://doctors-portal-server-beryl-xi.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setCreatedUserEmail(email);
        });
    };
  };

  return (
    <div className="flex  h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
            value="Sign Up"
            type="submit"
          />
          <label className="label">
            <span className="label-text">
              Already have an accoutn!{" "}
              <Link to="/login" className="text-secondary">
                Login here.
              </Link>
            </span>
          </label>
          {signupError && <p>{signupError}</p>}
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
