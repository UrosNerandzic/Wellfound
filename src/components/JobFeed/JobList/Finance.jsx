import { getJobFinance } from "@/app/data/getSingleJob";

import MapJob from "./MapJob";
import Link from "next/link";

async function FinanceJobs() {
  const data = await getJobFinance();
  const random = await data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <>
      <div className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Finance / Legal jobs</h3>
          <Link
            href="/role/Finance"
            className="ml-auto text-black underline hover:text-gtmblue-500">
            View all finance / legal jobs
          </Link>
        </div>
        <MapJob random={random} />
      </div>
    </>
  );
}

export default FinanceJobs;
