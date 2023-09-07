import React from "react";
import pic from "@/public/03.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="m-4 flex flex-row items-center justify-center">
        <p className="text-hotpink text-9xl mr-5">404</p>
        <h1 className="text-hotpink text-7xl">Oopsie, page not found!</h1>
      </div>

      <div className="mb-4 flex flex-row items-center justify-center">
        <Image src={pic} alt="pic" className="h-52 w-auto mr-4" />
        <p className="text-hotpink text-3xl">Go back for fashion inspo!</p>
      </div>
    </div>
  );
}
