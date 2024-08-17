import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Aside() {
  return (
    <aside className="grow-0 md:mt-[76px] md:w-64 xl:w-[25rem]">
      <div className="mb-6">
        <div className="flex flex-col items-center justify-center rounded border border-gray-400 p-6">
          <div className="mb-4 flex w-full flex-col items-center">
            <form className="flex w-full flex-grow flex-col gap-4 leading-snug">
              <Input
                placeholder="Your Email"
                className="text-md max-w-ful ring-inset border rounded focus:ring-dark-link bg-white  focus:ring-1 px-3 py-2 h-10  w-full p-3 border-gtmblue-500"
              />
              <a className=" h-12 text-center hover-blue rounded border border-black bg-black px-4 py-3 text-md text-white border-gtmblue-500 hover:bg-gtmblue-500">
                Sign up
              </a>
            </form>
            <span className="mr-4 py-1 text-gray-600">or</span>
            <a className="flex h-12 w-full items-center justify-center whitespace-nowrap rounded border border-black px-4 text-md text-black hover:bg-gray-400">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span>Sign up with Google</span>
            </a>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center text-xs  md:justify-between md:gap-0">
            <div>
              <span className="text-gray-500">Alredy have an account? </span>
              <a
                className="cursor-pointer underline text-dark-aa"
                type="button">
                Log in
              </a>
            </div>
            <hr className="mt-4 border-t border-gray-400 pt-4" />
            <div>
              <span className="text-gray-500">
                Looking for AngelList Venture? Visit
              </span>
              <a
                href="https://www.angellist.com/"
                className="text-dark-aa underline text-gtmblue-500">
                AngelList.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 rounded border border-gray-400 p-10">
        <h3 className="mb-6 text-xl font-bold">Level up your job search</h3>
        <ul className="mb-6">
          <li className="mb-4 flex items-center gap-4">
            <span>Unique jobs in niche industries</span>
          </li>
          <li className="mb-4 flex items-center gap-4">
            <span>Set salary & equity upfront</span>
          </li>
          <li className="mb-4 flex items-center gap-4">
            <span>Personalized job filters</span>
          </li>
          <li className="mb-4 flex items-center gap-4">
            <span>Showcase skills beyond a resume</span>
          </li>
          <li className="mb-4 flex items-center gap-4">
            <span>Let founders and recruiters reach out to you</span>
          </li>
        </ul>
        <Button
          className=" hover-border inline-block text-sm text-black border-gtmblue-500 text-gtmblue-500 rounded border-solid border gap-x-2 whitespace-nowrap font-medium
      antialiased text-center  no-underline cursor-pointer focus:outline-0 transition duration-200 px-4 py-2 bg-white  bg-gtmblue-100 border-black hover:border-gtmblue-500 hover:text-gtmblue-50">
          Sign up & search
        </Button>
      </div>
      <div className="mb-6 rounded border border-gray-400 p-10">
        <h3 className="mb-6 text-xl font-bold">Know your worth</h3>
        <p className="mb-6">
          Know your worth. Filter by industry, job title, location & more.
        </p>
        <Button
          className=" hover-border inline-block text-sm font-normal text-black border-gtmblue-500 text-gtmblue-500 rounded border-solid border gap-x-2 whitespace-nowrap
      antialiased text-center  no-underline cursor-pointer focus:outline-0 transition duration-200 px-4 py-2 bg-white  bg-gtmblue-100 border-black hover:border-gtmblue-500 hover:text-gtmblue-50">
          Salary calculator
        </Button>
      </div>
    </aside>
  );
}

export default Aside;
