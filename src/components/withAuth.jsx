import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return () => {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem("currentUser"));

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/sign-in");
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <WrappedComponent /> : null;
  };
};

export default withAuth;
