"use client";
import { createContext } from "react";
import React from "react";
import { useContext } from "react";

export const LoginContext = createContext({
  isLogin:
    typeof window !== "undefined"
      ? window.localStorage.getItem("authenticatedUser")
        ? true
        : false
      : false,
  //@ts-ignore
  setIsLogin: (value: ((prevState: boolean) => boolean) | boolean) => {},
});

export function LoginProvider({ children }) {
  const loginContext = useContext(LoginContext);
  const [isLogin, setIsLogin] = React.useState(loginContext.isLogin);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
