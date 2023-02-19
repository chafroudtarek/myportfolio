import React from "react";
import useAuth from "../core/auth/useAuth";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { jwt } = useAuth();
  const token = jwt.getToken();
  const isAuthenticated = jwt.isValidToken(token);
  const user = jwt.getMe();

  if (isAuthenticated && user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};
export default AuthGuard;
