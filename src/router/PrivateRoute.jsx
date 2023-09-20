import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;

  const { logged } = useContext(AuthContext);

  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
