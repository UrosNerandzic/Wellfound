import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { TextEditSingleJobPage } from "@/components/SingleJob/TextEditSingleJobPage";

async function getSingleSlug(slug) {
  const query = `
  *[_type == 'singleJob'  && slug.current == '${slug}' ] {
  logoCompany,
  title,
  "currentSlug": slug.current,
  nameCompany,
  expYears,
  salary,
  today,
  AboutTheJob,
  category,
}[0]`;
  const data = await client.fetch(query);
  return data;
}

async function SingleJobs({ params }) {
  const data = await getSingleSlug(params.slug);
  return (
    <>
      <Navbar />
      <div className="mb-[32px] border-b border-gray-300"></div>
      <div className="mx-auto max-w-screen-laptop px-4 lg:p-0">
        <div>
          <div className="rounded-xl border border-gray-400">
            <div
              className="flex w-full flex-col rounded-xl rounded-b-none border-b border-gray-400 pl-4 pr-4 pt-4 sm:flex-row"
              style={{ backgroundColor: "#EAEBFF" }}>
              <div className="w-full sm:w-2/3">
                <div className="flex">
                  <a href="">
                    <div className="relative inline-flex h-14 w-14 flex-row items-center rounded-md">
                      <Image
                        width={46}
                        height={46}
                        className="h-[46px] xl:h-[46px] w-auto"
                        src={urlFor(data.logoCompany).url()}
                        alt="logoCity"
                        priority
                      />
                    </div>
                  </a>
                  <div className="content-center">
                    <a href="">
                      <span className="text-m font-bold text-black underline">
                        {data.nameCompany}
                      </span>
                    </a>
                  </div>
                </div>
                {/* title and ExpYears */}
                <div>
                  <h1 className="inline text-xl font-semibold text-black">
                    {data.title}
                  </h1>
                  <span className="text-xl font-medium text-gray-600">
                    (2+ years exp)
                  </span>
                </div>
                {/* Salary */}
                <div className="mt-2 text-lg font-medium text-gray-800">
                  <h1>{data.salary}</h1>
                </div>
                {/* today */}
                <div className="mb-4 mt-1 text-sm font-medium text-gray-800">
                  <span>{data.today}</span>
                </div>
              </div>
              {/* button */}
              <div className="mb-4 flex w-full justify-center sm:mb-0 sm:w-1/3 sm:justify-end">
                <div className="inline-block mr-4">
                  <Button className=" mr-4 h-12  w-full rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-md no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-3 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 hover:bg-gtmblue-100 border-gtmblue-500 text-gtmblue-500">
                    Save
                  </Button>
                </div>
                <div className="inline-block h-12 w-full md:w-44">
                  <Button className="h-12 w-full  rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-md no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-3 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 p-4 py-6 md:grid-cols-2">
              <div>
                <span className="text-md font-semibold">Job Location</span>
                <div className="flex flex-wrap">
                  <div>
                    <a
                      href=""
                      className="text-sm font-normal text-black underline">
                      San Francisco Bay Area
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-md font-semibold">Job Type</span>
                <p>Full Time</p>
                <p></p>
              </div>
              <div>
                <span className="text-md font-semibold">Visa Sponsorship</span>
                <p>
                  <span>Not Available</span>
                </p>
              </div>
              <div>
                <span className="text-md font-semibold">
                  Remote Work Policy
                </span>
                <p>In office</p>
              </div>
              <div>
                <span className="text-md font-semibold">Relocation</span>
                <span className="flex items-center">
                  Allowed
                  <span className="ml-1">svg</span>
                </span>
              </div>
              <div>
                <span className="text-md font-semibold">Skills</span>
                <div className="flex flex-wrap">
                  <div className="mr-2 mt-2 rounded-3xl bg-gray-200 px-2 py-1 text-sm font-normal text-black">
                    Sales
                  </div>
                  <div className="mr-2 mt-2 rounded-3xl bg-gray-200 px-2 py-1 text-sm font-normal text-black">
                    Communication Skills
                  </div>
                  <div className="mr-2 mt-2 rounded-3xl bg-gray-200 px-2 py-1 text-sm font-normal text-black">
                    Account Management
                  </div>
                  <div className="mr-2 mt-2 rounded-3xl bg-gray-200 px-2 py-1 text-sm font-normal text-black">
                    SaaS Sales
                  </div>
                  <div className="mr-2 mt-2 rounded-3xl bg-gray-200 px-2 py-1 text-sm font-normal text-black">
                    Inbound and Outbound Sales
                  </div>
                </div>
              </div>
              <div>
                <span className="text-md font-semibold">Hiring contact</span>
                <p>Steven Na</p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-gray-400 py-6 pl-4 pr-4">
            <PortableText
              components={TextEditSingleJobPage}
              value={data.AboutTheJob}
            />
            <div className="inline-block">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-gray-400 py-6 pb-0 pl-4 pr-4"></div>
        <div className="mb-6 mt-6 rounded-xl border border-gray-400 py-6 pl-4 pr-4"></div>
      </div>
      <Footer />
    </>
  );
}

export default SingleJobs;
