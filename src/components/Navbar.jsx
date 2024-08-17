import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex max-w-screen-xl flex-col flex-nowrap justify-between bg-white px-10 pt-3 lg:static lg:h-[100px] lg:flex-row lg:items-center lg:px-20 lg:pt-0">
      <div className="flex flex-row items-center justify-between">
        <Link className="lg:mb-0 lg:mt-3 lg:self-center" href="">
          <Image
            className="w-[120px] hover:text-new-blue mt-1 fill-current text-black"
            src={Logo}
            alt="logo"
            width={120}
            height={64}
          />
        </Link>
      </div>
      <nav className="h-0 lg:h-auto absolute left-0 right-0 top-24 flex flex-col overflow-hidden whitespace-nowrap bg-white px-10 leading-[22.4px] transition-all duration-200 ease-linear lg:static lg:flex-row lg:items-center lg:px-0">
        <div className="mb-1 mr-5 flex border-b border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
          <Link
            href=""
            className="flex-1 text-xl font-light text-black underline-offset-8 hover:text-light-link hover:underline lg:text-md">
            Overview
          </Link>
        </div>
        <div className="mb-1 mr-5 flex border-b border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
          <Link
            href=""
            className="flex-1 text-xl font-light text-black underline-offset-8 hover:text-light-link hover:underline lg:text-md">
            Jobs
          </Link>
        </div>
        <div className="mb-1 mr-5 flex border-b border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
          <Link
            href=""
            className="flex-1 text-xl font-light text-black underline-offset-8 hover:text-light-link hover:underline lg:text-md">
            Featured
          </Link>
        </div>
        <div className="mb-1 mr-5 flex border-b border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
          <Link
            href=""
            className="flex-1 text-xl font-light text-black underline-offset-8 hover:text-light-link hover:underline lg:text-md">
            Remote
          </Link>
        </div>
        <div className="mb-1 mr-5 flex border-b border-gray-300 py-3 lg:mb-0 lg:border-0 lg:py-2 xl:mr-10">
          <Link
            href=""
            className="flex-1 text-xl font-light text-black underline-offset-8 hover:text-light-link hover:underline lg:text-md">
            For companies
          </Link>
        </div>
        <div className="mt-4 flex lg:mt-0">
          <div className="inline-block w-full lg:w-auto">
            <Button className=" rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 bg-gtmblue-100 border-gtmblue-500 text-gtmblue-500">
              Log in
            </Button>
          </div>
          <div className="inline-block w-full lg:w-auto">
            <Button className=" ml-4 lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
