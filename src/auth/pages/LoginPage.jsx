import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";

export const LoginPage = () => {

  const navigate = useNavigate();

    const onLogin = (event)=>{
      event.preventDefault();
      navigate('/',{
        replace:true,
      })
    }

  return (
    <>
      <h1>LoginPage</h1>

      <hr />

      <LoginForm onLogin={onLogin}/>
    </>
  );
};
