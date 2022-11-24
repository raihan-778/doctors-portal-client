import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-beryl-xi.vercel.app/jwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("access_token", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
