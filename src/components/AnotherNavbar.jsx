import Link from "next/link";
import { Button } from "./ui/button";

function AnotherNavbar() {
  return (
    <header className="mx-auto mb-8 max-w-screen-xl border-b border-gray-300 px-6 pb-6 pt-4 lg:px-20">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <svg
            fill="currentColor"
            viewBox="0 0 554.89997 266.70002"
            width="50"
            className="w-30 text-black">
            <path d="M 80.9,263.59999 0,2.9999988 H 75.3 L 123,190.39999 174.9,2.9999988 h 75.5 L 302.3,190.39999 350,2.9999988 h 75.3 L 343.5,263.59999 H 263.3 L 212.7,75.399999 161.1,263.59999 H 80.9 Z"></path>
            <circle
              cx="511.09995"
              cy="222.89999"
              fill="#EC2E3A"
              r="43.799999"></circle>
            <circle
              cx="511.09995"
              cy="43.799999"
              fill="#EC2E3A"
              r="43.799999"></circle>
          </svg>
        </Link>
        <nav className="relative hidden items-center bg-white md:flex">
          <div className="r-0 relative hidden space-x-8 font-light md:block">
            <Link
              href="/"
              className="!text-black underline-offset-8 hover:text-dark-link hover:underline">
              Discover
            </Link>
            <Link
              href="/"
              className="!text-black underline-offset-8 hover:!text-dark-link hover:underline">
              Find Jobs
            </Link>
            <Link
              href="/"
              className="!text-black underline-offset-8 hover:!text-dark-link hover:underline">
              For Recruiters
            </Link>
          </div>
          <div className="ml-10">
            <div className="inline-block">
              <Button className=" rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 bg-gtmblue-100 border-gtmblue-500 text-gtmblue-500">
                Log in
              </Button>
            </div>
            <div className="inline-block">
              <Button className=" ml-4 lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
                Sign Up
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default AnotherNavbar;
