"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import globalStyles from "@/utils/global";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { hash } from "bcryptjs";

interface FormData {
  id: string;
  username: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [errorMessage, setErrorMessage] = React.useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form data submitted:", data);
    handleSignUp(data);
  };

  const handleSignUp = async (data: FormData) => {
    try {
      const hashedPassword = await hash(data.password, 10);

      const userData = {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      };

      axios
        .post("https://json-server-api-delta.vercel.app/users", userData)
        .then((response) => {
          if (response.data) {
            router.push("/signin");
          } else {
            setErrorMessage(response.data.message);
          }
        })
        .catch((error) => {
          router.push("/signin");
          console.error(error);
          //   setErrorMessage("An error occurred while signing up.");
        });
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while hashing the password.");
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="p-8 w-[96]">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Sign Up
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-10">
              {/* <label htmlFor="name" className="block  font-medium mb-2">
                Userame
              </label> */}
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true })}
                className="border w-full py-2 px-3 leading-tight focus:outline-none  focus:border-hotpink"
              />
              {errors.username && (
                <p className="text-red-500">Username is required.</p>
              )}
            </div>
            <div className="my-10">
              {/* <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label> */}
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
                className="border w-full py-2 px-3 leading-tight focus:outline-none  focus:border-hotpink"
              />
              {errors.email && (
                <p className="text-red-500">Email is required.</p>
              )}
            </div>
            <div className="my-10">
              {/* <label htmlFor="password" className="block0 font-medium mb-2">
                Password
              </label> */}
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-hotpink"
              />
              {errors.password && (
                <p className="text-red-500">Password is required.</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border border-text_color h-10 w-[250px] relative hover-button text-lg"
              >
                <span>Sign Up</span>
                <style jsx global>
                  {globalStyles}
                </style>
              </button>
            </div>
            <div className="flex justify-end">
              {" "}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="absolute h-[40rem] w-[40rem] -right-0 bottom-0 -z-[10] overflow-hidden">
        <div className="bg-pink rounded-full w-full h-full absolute -right-36 -bottom-3"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
