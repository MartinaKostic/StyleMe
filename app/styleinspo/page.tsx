"use client";
import Image from "next/image";
import style from "../../public/06.png";
import dramatic from "../../public/dramatic.jpg";
import romantic from "../../public/romantic.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsSearch } from "react-icons/bs";
import globalStyles from "@/utils/global";
import React from "react";
//CENTRIRAN NASLOV!
export default function StyleInspo() {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className="absolute bg-pink rounded-full h-[25rem] w-[25rem] ml-28"></div>
        <div className="mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Style inspo
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10">
              We will tell you which clothes look good on you, <br /> so you can
              stop wasting money on disappointing outfits
              <br /> and start putting together outfits you enjoy wearing!
            </p>
            <div className="flex justify-center m-3">
              <div className="border border-text_color flex px-1 w-72 m-5">
                <span className="pt-3 px-1">
                  <BsSearch />
                </span>
                <div className="flex-grow">
                  <input
                    type="search"
                    id="search"
                    name="search"
                    className="py-2 pl-1 w-full bg-transparent text-basis text-text_color placeholder-text_color placeholder-opacity-100 focus:outline-none"
                    placeholder="Find what you're looking for..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <Image src={style} alt="quiz" className="h-52 w-auto" />
          </div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-10">
        <div className="col-start-2 col-span-5">
          <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
            Dramatic type
          </h1>
        </div>
        <div className="col-start-2 col-span-4 m-5 mx-16">
          <p>
            The Dramatic ID needs to embrace their sharpness and therefore their
            clothing should also have a sharp and geometric feel to it. The
            Dramatics, in my opinion, are really able to lean into a lot of
            high-fashion trends...
          </p>
          <div className="flex justify-end">
            <a href="/blog">
              <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                <span>More...</span>
                <style jsx global>
                  {globalStyles}
                </style>
              </button>
            </a>
          </div>
        </div>
        <div className="col-start-6 col-span-4 ">
          <Image
            src={dramatic}
            alt="quiz"
            className="h-72 object-cover"
          ></Image>
        </div>
      </div>

      <div className="my-10 grid grid-cols-10">
        <div className="col-start-5 col-span-5">
          <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
            Romantic type
          </h1>
        </div>
        <div className="ml-24 col-start-2 col-span-4">
          <Image
            src={romantic}
            alt="quiz"
            className="h-72 object-cover"
          ></Image>
        </div>
        <div className="col-start-6 col-span-4 m-5 mr-16">
          <p>
            The Dramatic ID needs to embrace their sharpness and therefore their
            clothing should also have a sharp and geometric feel to it. The
            Dramatics, in my opinion, are really able to lean into a lot of
            high-fashion trends...
          </p>
          <div className="flex justify-end">
            <a href="/blog">
              <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                <span>More...</span>
                <style jsx global>
                  {globalStyles}
                </style>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute h-[40rem] w-[40rem] -right-0 bottom-0 -z-[10] overflow-hidden">
        <div className="bg-pink rounded-full w-full h-full absolute -right-36 -bottom-3"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
