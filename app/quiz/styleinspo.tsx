import React from "react";

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
    <div>
      <h1>{styleInspo.title}</h1>
      <p>{styleInspo.body[0].content}</p>
      {/* Add more elements to display style inspiration */}
    </div>
  );
};

export default StyleInspo;
