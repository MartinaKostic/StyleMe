"use client";
import { createContext } from "react";

const LoginContext = createContext({
  isLogin: localStorage.getItem("authenticatedUser") ? true: false,
  //@ts-ignore
  setIsLogin: (value: ((prevState: boolean) => boolean) | boolean) => {},
});

export default LoginContext;
