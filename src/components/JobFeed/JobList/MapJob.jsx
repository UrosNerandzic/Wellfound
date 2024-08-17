import { Button } from "../../ui/button";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
function MapJob({ random }) {
  return (
    <>
      {random.map((post, key) => (
        <div
          key={key}
          className="mb-2 flex flex-col justify-between border-b border-gray-400 py-3 transition-all duration-100 ease-linear md:flex-row">
          <div className="flex flex-row">
            <div className="w-12">
              <Link href="/">
                <Image
                  width={46}
                  height={46}
                  className="h-[46px] xl:h-[46px]"
                  src={urlFor(post.logoCompany).url()}
                  alt="logoCity"
                  priority
                />
              </Link>
            </div>
            <div className="ml-4 flex-1">
              <div className="mb-1">
                <Link href={`/jobs/${post.currentSlug}`}>{post.title}</Link>
              </div>
              <div className="text-sm">
                <span>{post.nameCompany} • </span>
                <span>city • {post.salary}</span>
              </div>
            </div>
          </div>
          <div className="ml-16 mt-4 flex items-center md:ml-0 md:mt-0">
            <Button className="w-full rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 bg-gtmblue-100 border-gtmblue-500 text-gtmblue-500">
              Save
            </Button>
            <Button className=" ml-2 w-full lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
              Apply
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MapJob;
