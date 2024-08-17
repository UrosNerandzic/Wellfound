import { getJobRecruiter } from "@/app/data/getSingleJob";
import MapJob from "./MapJob";
import Link from "next/link";

async function RecruitingJobs() {
  const data = await getJobRecruiter();
  const random = await data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <>
      <div className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">HR and recruiting jobs</h3>
          <Link
            href="/role/Recruiter"
            className="ml-auto text-black underline hover:text-gtmblue-500">
            View all hr and recruiting jobs
          </Link>
        </div>
        <MapJob random={random} />
      </div>
    </>
  );
}

export default RecruitingJobs;
