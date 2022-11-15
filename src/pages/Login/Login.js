import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setLoginError("");
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };

  return (
    <div className="flex  h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <label className="label">
            <span className="label-text">Forgot Password?</span>
          </label>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Login"
            type="submit"
          />
          {loginError && <p>{loginError}</p>}
          <label className="label">
            <span className="label-text">
              New to doctors portal!{" "}
              <Link to="/signup" className="text-secondary">
                Create New Account.
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
