import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";

export const BackgroundComponents = {
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
    normal: ({ children }) => <blockquote>{children}</blockquote>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    spanThird: ({ children }) => <span>{children}</span>,
  },
  types: {
    backgroundContent: ({ value }) => (
      <li className="styles_row__QZ_fT mb-2">
        <Link
          href=""
          className="styles_component__UCLp3 styles_defaultLink__eZMqw">
          <div className="styles_role__JiWsL">
            {value.spanFirst && value.spanSecond && (
              <>
                <div className="styles_company__keHJw">{value.spanFirst}</div>

                <p className="styles_position__ZOy4K">{value.spanSecond}</p>
              </>
            )}
          </div>
          <div className="inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-8 w-8">
            {value.image && (
              <div className="image-container">
                <Image
                  width={46}
                  height={46}
                  className="rounded-md"
                  style={{ width: "30px", height: "auto" }}
                  src={urlFor(value.image).url()}
                  alt="Image"
                />
              </div>
            )}
          </div>
        </Link>
      </li>
    ),
  },
};
