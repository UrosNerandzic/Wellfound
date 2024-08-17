import { getJobEngineer } from "@/app/data/getSingleJob";
import MapJob from "./MapJob";
import Link from "next/link";

async function EngineeringJobs() {
  const data = await getJobEngineer();
  const random = await data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <>
      <div className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Engineering jobs</h3>
          <Link
            href="/role/Software Engineer"
            className="ml-auto text-black underline hover:text-gtmblue-500">
            View all engineering jobs
          </Link>
        </div>
        <MapJob random={random} />
      </div>
    </>
  );
}

export default EngineeringJobs;
