/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import blog from "public/02.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsSearch } from "react-icons/bs";
import globalStyles from "@/utils/global";
import axios from "axios";
import React from "react";
import { LoginContext } from "@/context/loginContext";
import { useContext } from "react";

export default function Blog() {
  const [blogs, setBlogs] = React.useState<any>([]);
  const loginContext = useContext(LoginContext);
  const [search, setSearch] = React.useState("");
  //dohvati sva pitanja
  React.useEffect(() => {
    refetchBlogs();
  }, []);

  function refetchBlogs() {
    axios.get("https://json-server-api-delta.vercel.app/blogs").then((res) => {
      setBlogs(res.data);
    });
  }

  return (
    <div>
      <Header></Header>

      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5 ">
        <div className="absolute bg-pink rounded-full h-[25rem] w-[25rem] ml-28"></div>
        <div className="mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Blogs
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10">
              Welcome to our blog page, where we curate <br />
              a collection of engaging articles that delve into the world <br />
              of fashion and style. Whether you're seeking inspiration for a{" "}
              <br />
              special occasion outfit, seeking advice on accessorizing, or
              simply want <br />
              to stay up-to-date with the ever-evolving fashion landscape,{" "}
              <br />
              you'll find insightful and thought-provoking articles <br />
              that cater to fashion enthusiasts of all levels.
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
            <Image src={blog} alt="blog" className="h-52 w-auto" />
          </div>
        </div>
      </div>
      {loginContext.isLogin
        ? blogs &&
          blogs.length > 0 && (
            <div className="min-h-screen">
              {blogs
                .filter((blog) =>
                  blog.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((blog: any, index: number) =>
                  index % 2 === 0 ? (
                    <div
                      key={index}
                      className="mb-20 grid lg:grid-cols-10 sm:grid-rows-10"
                    >
                      <div className="col-start-2 col-span-5">
                        <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
                          {blog.title}
                        </h1>
                      </div>
                      <div className="col-start-2 col-span-4 m-5 mx-16">
                        <p>
                          {blog.content
                            .map((paragraph: any) => paragraph.description)
                            .join(" ") // Combine the array into a single string
                            .slice(0, 300)}
                          ...
                        </p>
                        <div className="flex justify-end">
                          <Link href={`/blog/${blog.title}`}>
                            <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                              <span>More...</span>
                              <style jsx global>
                                {globalStyles}
                              </style>
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div className="h-72 w-128 relative col-start-6 col-span-4">
                        <Image
                          src={`/${blog.image}`}
                          alt="blog_image"
                          fill={true}
                          style={{ objectFit: "cover" }}
                        ></Image>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="mb-20 grid lg:grid-cols-10 sm:grid-rows-10"
                    >
                      <div className="col-start-5 col-span-5">
                        <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
                          {blog.title}
                        </h1>
                      </div>
                      <div className="h-72 w-128 relative col-start-2 col-span-4">
                        <Image
                          src={`/${blog.image}`}
                          alt="blog_image"
                          fill={true}
                          style={{ objectFit: "cover" }}
                        ></Image>
                      </div>
                      <div className="col-start-6 col-span-4 m-5 mr-16">
                        <p>
                          {blog.content
                            .map((paragraph: any) => paragraph.description)
                            .join(" ") // Combine the array into a single string
                            .slice(0, 300)}
                          ...
                        </p>
                        <div className="flex justify-end">
                          <Link href={`/blog/${blog.title}`}>
                            <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                              <span>More...</span>
                              <style jsx global>
                                {globalStyles}
                              </style>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )}{" "}
            </div>
          )
        : blogs &&
          blogs.length > 0 && (
            <>
              <div className="mb-20 grid lg:grid-cols-10 sm:grid-rows-10">
                <div className="col-start-2 col-span-5">
                  <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
                    {blogs[0].title}
                  </h1>
                </div>
                <div className="col-start-2 col-span-4 m-5 mx-16">
                  <p>
                    {blogs[0].content
                      .map((paragraph: any) => paragraph.description)
                      .join(" ") // Combine the array into a single string
                      .slice(0, 300)}
                    ...
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/blog/${blogs[0].title}`}>
                      <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                        <span>More...</span>
                        <style jsx global>
                          {globalStyles}
                        </style>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="h-72 w-128 relative col-start-6 col-span-4">
                  <Image
                    src={`/${blogs[0].image}`}
                    alt="blog_image"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
              </div>
              <div className="mb-20 grid lg:grid-cols-10 sm:grid-rows-10">
                <div className="col-start-5 col-span-5">
                  <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
                    {blogs[1].title}
                  </h1>
                </div>
                <div className="h-72 w-128 relative col-start-2 col-span-4">
                  <Image
                    src={`/${blogs[1].image}`}
                    alt="blog_image"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  ></Image>
                </div>
                <div className="col-start-6 col-span-4 m-5 mr-16">
                  <p>
                    {blogs[1].content
                      .map((paragraph: any) => paragraph.description)
                      .join(" ") // Combine the array into a single string
                      .slice(0, 300)}
                    ...
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/blog/${blogs[1].title}`}>
                      <button className="border my-5 border-text_color h-10 w-[250px] relative hover-button text-lg">
                        <span>More...</span>
                        <style jsx global>
                          {globalStyles}
                        </style>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
      <div className="absolute h-[40rem] w-[40rem] -right-0 bottom-0 -z-[10] overflow-hidden">
        <div className="bg-pink rounded-full w-full h-full absolute -right-36 -bottom-3"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}
