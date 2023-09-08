import Link from "next/link";
import React from "react";
import Image from "next/image";
import globalStyles from "@/utils/global";

export interface StyleData {
  [x: string]: any;
  id: number;
  title: string;
  body: {
    content: string;
    image1: string;
    subtitle: string;
    description: string;
    image2: string;
  }[];
  image: string;
}

interface StyleInspoProps {
  styleInspo: StyleData;
}

const StyleInspo: React.FC<StyleInspoProps> = ({ styleInspo }) => {
  return (
    <div className="mb-20 grid lg:grid-cols-10 sm:grid-rows-10">
      <div className="col-start-2 col-span-5">
        <h1 className="my-5 bg-hotpink text-center text-2xl py-1">
          {styleInspo.title}
        </h1>
      </div>
      <div className="col-start-2 col-span-4 m-5 mx-16">
        <p>
          {styleInspo.body[0].content.slice(0, 300)}
          ...
        </p>
        <div className="flex justify-end">
          <Link href={`/styleinspo/${styleInspo.id}`}>
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
          src={`/${styleInspo.image}`}
          alt="inspo_image"
          fill={true}
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
    </div>
  );
};

export default StyleInspo;
