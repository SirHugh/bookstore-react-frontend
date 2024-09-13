import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

import { useTheme } from "@emotion/react";
import React from "react";
import { getLogin } from "../services/AuthService";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useTheme;

  let contextData = {};

  const singin = async (e) => {
    e.preventDefault();

    const res = getLogin({
      email: e.target.email.value,
      password: e.target.password.value,
    })
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const login = async (e) => {
    e.preventDefault();
  };

  const logut = async () => {};

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
