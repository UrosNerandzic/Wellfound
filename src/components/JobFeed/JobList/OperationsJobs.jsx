import { getJobOperations } from "@/app/data/getSingleJob";
import MapJob from "./MapJob";
import Link from "next/link";

async function OperationsJobs() {
  const data = await getJobOperations();
  const random = await data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <>
      <div className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Operations jobs</h3>
          <Link
            href="/role/Operations Manager"
            className="ml-auto text-black underline hover:text-gtmblue-500">
            View all operations jobs
          </Link>
        </div>
        <MapJob random={random} />
      </div>
    </>
  );
}

export default OperationsJobs;
