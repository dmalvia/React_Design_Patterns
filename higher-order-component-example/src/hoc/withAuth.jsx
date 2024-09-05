import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const navigate = useNavigate();
    const isAuth = true;

    useEffect(() => {
      console.log("User Authentication : ", isAuth);
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth, navigate]);

    return isAuth ? <WrappedComponent {...props} /> : <div>Null</div>;
  };
  return WithAuthComponent;
};

export default withAuth;
