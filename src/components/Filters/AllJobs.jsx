import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSingleJob } from "@/app/data/getSingleJob";
import { urlFor } from "@/app/lib/sanity";

async function AllJobs({ job, city, pageNum }) {
  const data = await getSingleJob(pageNum, job, city);
  const groupedPosts = data.reduce((acc, post) => {
    const company = post.nameCompany;
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(post);
    return acc;
  }, {});

  return (
    <div className="resultSearchBar">
      <div className="flex flex-col w-full">
        <div className="styles_results__ZQhDf">
          {Object.keys(groupedPosts).map((companyName) => (
            <div key={companyName} className="styles_result__rPRNG">
              <div className="styles_startupHeader__BGncB">
                <div className="styles_info__iM__u">
                  <Link href="">
                    <Image
                      width={46}
                      height={46}
                      className="h-[46px] xl:h-[46px] w-auto"
                      src={urlFor(
                        groupedPosts[companyName][0].logoCompany
                      ).url()}
                      alt="logoCity"
                      priority
                    />
                  </Link>
                  <div className="flex flex-col pl-4">
                    <Link href="">
                      <h4>{companyName}</h4>
                    </Link>
                    <span className="styles_subheader__WPhHT">
                      The most popular database for modern apps
                    </span>
                    <div className="styles_companySize__D_QfD"></div>
                  </div>
                </div>
              </div>
              <div className="styles_jobListingList__32RYX">
                {groupedPosts[companyName].map((post) => (
                  <div key={post.title} className="styles_jobListing__PLqQ_">
                    <div className="block min-h-0 min-w-0">
                      <Link href={`/jobs/${post.currentSlug}`}>
                        {post.title}
                      </Link>
                      <span className="styles_locationAndCompensation__vDfgW">
                        {post.city}
                        <span> • {post.salary}</span>
                      </span>
                    </div>
                    <div className="styles_apply__Xe_2M styles_tablet__gLL1e">
                      <span className="text-xs lowercase text-dark-aa hidden md:flex">
                        yesterday
                      </span>
                      <Button className=" ml-4 lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
                        Save
                      </Button>
                      <Button className=" ml-4 lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50  duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AllJobs;
