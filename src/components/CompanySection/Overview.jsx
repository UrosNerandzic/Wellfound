import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
export const Overview = {
  types: {
    image: ({ value }) => {
      return (
        <div className="mx-auto float-right  w-[50%] mb-14">
          <Image
            width={382}
            height={228.5}
            className=" w-[100%]"
            style={{ width: "382px", height: "228.5px" }}
            src={urlFor(value).url()}
            alt="Image"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-xl font-medium text-dark-aaaa antialiased mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-dark-aaaa font-medium antialiased text-xl mb-4 relative">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    normal: ({ children }) => (
      <div className="pr-6 ">
        <p>{children}</p>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black">
          {children}
        </Link>
      );
    },
  },
};
