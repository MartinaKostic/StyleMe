"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import globalStyles from "@/utils/global";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { compare } from "bcryptjs";
import { LoginContext } from "@/context/loginContext";

interface UserData {
  [x: string]: any;
  id: string;
  name: string;
  email: string;
  password: string;
}

export default function SignIn() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [users, setUsers] = React.useState<UserData>();
  const router = useRouter();
  const loginContext = useContext(LoginContext);

  //dohvati sva pitanja
  React.useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("https://json-server-api-delta.vercel.app/users").then((res) => {
      setUsers(res.data);
    });
  }

  const getUsersDataFromJsonFile = async () => {
    try {
      const response = await axios.get(
        "https://json-server-api-delta.vercel.app/users"
      );
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Error fetching user data from JSON file");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleSignin = async () => {
    try {
      const usersDataFromJsonFile = await getUsersDataFromJsonFile();
      const user = usersDataFromJsonFile.find(
        (u: any) => u.username === username
      );

      if (user) {
        const passwordMatch = await compare(password, user.password);

        if (passwordMatch) {
          localStorage.setItem(
            "authenticatedUser",
            JSON.stringify(user.username)
          );
          loginContext.setIsLogin(true);
          router.push("/quiz");
        } else {
          setErrorMessage("Invalid username or password");
        }
      } else {
        setErrorMessage("User not found in JSON file");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while signing in.");
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
              Sign In
            </h1>
          </div>
          <form>
            <div className="my-10">
              {/* <label htmlFor="name" className="block  font-medium mb-2">
                Username
              </label> */}
              <input
                type="text"
                className="border w-full py-2 px-3 leading-tight focus:outline-none  focus:border-hotpink"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="my-10">
              {/* <label htmlFor="password" className="block0 font-medium mb-2">
                Password
              </label> */}
              <input
                type="password"
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-hotpink"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSignin();
                }}
                className="border border-text_color h-10 w-[250px] relative hover-button text-lg"
              >
                <span>Sign In</span>
                <style jsx global>
                  {globalStyles}
                </style>
              </button>
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
