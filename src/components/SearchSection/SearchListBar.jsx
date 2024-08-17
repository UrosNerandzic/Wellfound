"use client";
import useInitialFilters from "@/components/Filters/Pathname";
import Link from "next/link";
import CitiesAndJobs from "./CitIesAndJobs";

function SearchListBar() {
  const [cities, jobs] = CitiesAndJobs();
  const { getInitialJob, getInitialCity } = useInitialFilters();
  const job = getInitialJob();
  const city = getInitialCity();

  return (
    <div className="resultSearchBarBar">
      {job && city ? (
        <>
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore other jobs in {city}
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {jobs.map((jobAndCity) => {
              const linkHref = `/role/${jobAndCity}/${city}`;
              if (job && city && jobAndCity === job) {
                return null;
              }
              return (
                <Link
                  key={jobAndCity}
                  className="styles_link_job"
                  href={linkHref}>
                  {jobAndCity} {city}
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
      {city ? (
        <>
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore remote jobs
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {jobs.map((jobAndRemote) => {
              const remoteHref = `/role/${jobAndRemote}/Remote`;
              if (city && jobAndRemote === job) {
                return null;
              }
              return (
                <Link
                  key={jobAndRemote}
                  className="styles_link_job"
                  href={remoteHref}>
                  {jobAndRemote} Remote
                </Link>
              );
            })}
          </div>
        </>
      ) : job ? (
        <div className="order-1">
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore remote jobs
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {jobs.map((jobAndRemote) => {
              const remoteHref = `/role/${jobAndRemote}/Remote`;
              if (city && jobAndRemote === job) {
                return null;
              }
              return (
                <Link
                  key={jobAndRemote}
                  className="styles_link_job"
                  href={remoteHref}>
                  {jobAndRemote} Remote
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
      {job && city ? (
        <>
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore tech jobs in other locations
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {cities.map((linkCity) => {
              const linkHref = `/location/${linkCity}`;
              if (city && linkCity === city) {
                return null;
              }
              return (
                <Link
                  key={linkCity}
                  className="styles_link_job"
                  href={linkHref}>
                  {linkCity}
                </Link>
              );
            })}
          </div>
        </>
      ) : city ? (
        <>
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore tech jobs in other locations
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {cities.map((linkCity) => {
              const linkHref = `/location/${linkCity}`;
              if (city && linkCity === city) {
                return null;
              }
              return (
                <Link
                  key={linkCity}
                  className="styles_link_job"
                  href={linkHref}>
                  {linkCity}
                </Link>
              );
            })}
          </div>
        </>
      ) : job ? (
        <>
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore {job} jobs in other places
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {cities.map((linkCity) => {
              const linkHref = job
                ? `/role/${job}/${linkCity}`
                : `/location/${linkCity}`;
              if (city && linkCity === city) {
                return null;
              }
              return (
                <Link
                  key={linkCity}
                  className="styles_link_job"
                  href={linkHref}>
                  {linkCity}
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
      {job && !city ? (
        <div className="order-2">
          <div className="flex flex-col mb-2">
            <h3 className="mb-[0.75rem] text-xl font-medium">
              Explore other roles
            </h3>
          </div>
          <div className="mb-8 flex flex-col">
            {jobs.map((linkJob) => {
              const linkHref = `/role/${linkJob}`;
              if (job === linkJob) {
                return null;
              }
              return (
                <Link key={linkJob} className="styles_link_job" href={linkHref}>
                  {linkJob}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default SearchListBar;
