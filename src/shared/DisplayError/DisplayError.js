import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const DisplayError = () => {
  const { user, logout } = useContext(AuthContext);

  const error = useRouteError();

  const handleLogout = () => {
    logout()
      .then((result) => {})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className="text-red-500">SomeThing Went Wrong!</p>
      <p className="text-orange-600">{error.statusText || error.message}</p>
      <h3>
        Please{" "}
        <button onClick={handleLogout} className="btn btn-outline">
          SignOut
        </button>{" "}
        And Login Again!!{" "}
      </h3>
    </div>
  );
};

export default DisplayError;
