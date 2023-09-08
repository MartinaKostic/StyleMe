import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";

const getData = async (id: any) => {
  const response = await fetch(
    `https://json-server-api-delta.vercel.app/styleinspo/${id}`
  );
  return response.json();
};

export default async function InspoPost({ params }: Params) {
  const inspo = await getData(params.slug);

  console.log(inspo);

  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              {inspo.title}
            </h1>
          </div>
          <div className="col-start-2 col-span-2 flex flex-col items-center mt-10">
            <div className="h-128 w-128 relative col-start-6 col-span-4">
              <Image
                src={`/${inspo.image}`}
                alt="blog_image"
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {inspo && (
        <>
          <div className="container my-10 mx-auto px-32 flex flex-col items-center">
            <p>{inspo.body[0].content}</p>
            <div className="h-[450px] my-10 w-72 relative">
              <Image
                src={`/${inspo.body[0].image1}`}
                alt="blog_image"
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>

          <div className="container mx-auto px-32 ">
            <p className="text-xl font-semibold">{inspo.body[0].subtitle}</p>
            <div className="flex flex-col items-center">
              <p>{inspo.body[0].description}</p>
              <div className="w-[564px] my-10 h-[654px] relative">
                <Image
                  src={`/${inspo.body[0].image2}`}
                  alt="blog_image"
                  fill={true}
                  style={{ objectFit: "cover" }}
                ></Image>
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
