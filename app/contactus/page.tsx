"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import globalStyles from "@/utils/global";

export default function ContactUs() {
  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="p-8 w-[96]">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Contact Us
            </h1>
          </div>
          <form>
            <div className="my-10">
              <input
                type="text"
                className="border w-full py-2 px-3 leading-tight focus:outline-none  focus:border-hotpink"
                placeholder="Your name"
              />
            </div>
            <div className="my-10">
              <textarea
                className="border w-full py-2 px-3 leading-tight focus:outline-none focus:border-hotpink"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="border border-text_color h-10 w-[250px] relative hover-button text-lg"
              >
                <span>Contact us</span>
                <style jsx global>
                  {globalStyles}
                </style>
              </button>
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
