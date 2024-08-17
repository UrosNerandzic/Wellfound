import Link from "next/link";

export const TextEditSingleJobPage = {
  block: {
    h1: ({ children }) => (
      <h1 className="mb-2 text-2xl font-semibold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-2 text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="h3-singleJob">{children}</h3>,
    h4: ({ children }) => <h4 className="h3-singleJob">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="">{children}</blockquote>
    ),
  },
  marks: {
    Link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="bg-orange-600">
          {children}
        </Link>
      );
    },
  },
};
