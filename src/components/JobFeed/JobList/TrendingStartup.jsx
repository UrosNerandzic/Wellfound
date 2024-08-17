import { getCategoryJob } from "@/app/data/getSingleJob";
import MapJob from "./MapJob";
import Link from "next/link";

async function TrendingStartup() {
  const data = await getCategoryJob();
  const random = await data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <>
      <div className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            Trending startup jobs
          </h2>
          <Link
            href="/location/United States"
            className="ml-auto text-black underline hover:text-gtmblue-500">
            View all jobs
          </Link>
        </div>
        <MapJob random={random} />
      </div>
    </>
  );
}

export default TrendingStartup;
