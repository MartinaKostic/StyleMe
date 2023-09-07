"use client";
import { createContext } from "react";

const LoginContext = createContext({
  isLogin:
    typeof window !== "undefined"
      ? window.localStorage.getItem("authenticatedUser")
        ? true
        : false
      : false,
  //@ts-ignore
  setIsLogin: (value: ((prevState: boolean) => boolean) | boolean) => {},
});

export default LoginContext;
