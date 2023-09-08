import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import path from "path";

interface ContentProps {
  id: string;
  point: string;
  description: string;
  image: string;
}
const getData = async (id: any) => {
  const response = await fetch(
    `https://json-server-api-delta.vercel.app/blogs/${id}`
  );
  return response.json();
};

export default async function BlogPost({ params }: Params) {
  const blog = await getData(params.slug);

  console.log(blog);

  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              {blog.title}
            </h1>
          </div>
          <div className="col-start-2 col-span-2 flex flex-col items-center">
            <p className="text-center my-10"> {blog.intro}</p>
            <div className="h-72 w-128 relative col-start-6 col-span-4">
              <Image
                src={`/${blog.image}`}
                alt="blog_image"
                fill={true}
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/* Blog content */}
      <div className="container mx-auto px-32">
        {/* Blog points */}
        <section className="mb-8">
          <ol className="list-decimal font-semibold pl-6">
            {blog.content.map((content: ContentProps, index: number) => (
              <li key={content.id} className="mb-4">
                <p className="text-xl font-semibold">{content.point}</p>
                <div
                  className={`lg:grid lg:grid-cols-2 ${
                    index % 2 === 0 ? "lg:col-reverse" : ""
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="h-72 my-10 w-128 relative">
                        <Image
                          src={`/${content.image}`}
                          alt="Point Image"
                          fill={true}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="text-base font-normal px-10 my-10">
                        {content.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-base font-normal px-10 my-10">
                        {content.description}
                      </p>
                      <div className="my-10 h-72 w-128 relative">
                        <Image
                          src={`/${content.image}`}
                          alt="Point Image"
                          fill={true}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Conclusion
          <section>
            <h2 className="text-3xl font-semibold">Conclusion</h2>
            <p>
              Summarize the key takeaways from your blog post and encourage
              readers to take action or explore related content.
            </p>
          </section> */}
      </div>
      <Footer></Footer>
    </div>
  );
}
