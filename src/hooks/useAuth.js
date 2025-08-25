import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(null);
  const [res, setRes] = useState(null);

  useEffect(() => {
    axios
      .get("https://chai-and-backend.onrender.com/api/v1/users/verify-token", {
        withCredentials: true,
      })
      .then((res) => {
        // res = JSON.stringify(res);
        console.log("🚀 ~ useAuth ~ res:", res);

        if (res.data?.user) {
          setIsAuth(true);
          setRes(res.data);
        } else setIsAuth(false);
      })
      .catch(() => setIsAuth(false));
  }, []);

  console.log("🚀 ~ useAuth ~ isAuth:", isAuth);
  return [isAuth, res];
}
