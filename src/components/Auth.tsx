import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const { children }: any = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
    //   console.log("unauthorize");
      navigate("/login");
    }
  });

  useEffect(() => {
    AuthCheck();
    return(() => AuthCheck())
  }, [auth]);

  if (loading) return <p>loading ....</p>;

  return <>{children}</>;
};

export default Auth;
