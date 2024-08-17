import getJobFeed from "@/app/data/getJobFeed";
import { Button } from "../ui/button";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
async function GetStarted() {
  const data = await getJobFeed();
  return (
    <>
      {data.map((post, key) => (
        <div
          key={key}
          className="-mx-2 mb-6 grid grid-cols-1 grid-rows-2 rounded border-gray-400 md:mx-0 md:mb-16 md:grid-cols-3 md:grid-rows-1 md:border">
          <div className="flex place-content-center bg-gtmyellow-500">
            <Image
              width={426}
              height={352}
              className="m-auto w-48 py-8 md:w-60 lg:w-72"
              src={urlFor(post.imageGetStarted).url()}
              alt="logoCity"
              priority
            />
          </div>
          <div className="m-auto mx-4 md:col-span-2 md:mx-0 md:p-8 xl:p-12">
            <h3 className="mb-2 text-[30px] md:text-[42px]">
              {post.titleGetStarted}
            </h3>
            <p className="mb-6 text-md lg:mb-8 lg:text-[22px]">
              {post.descriptionGetStarted}
            </p>
            <Button className="h-full w-full lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-md no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-3 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
              Create your profile
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default GetStarted;
