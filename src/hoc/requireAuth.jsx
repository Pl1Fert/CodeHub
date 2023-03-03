import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) return <Navigate to="/login" state={{ from: location }} replace/>;

    return children ? children : <Outlet/>;
};
