"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useInitialFilters from "@/components/Filters/Pathname";
import Select from "@/components/ui/select";
function decodeFilterValue(value) {
  return decodeURIComponent(value).replace(/-/g, " ");
}
function encodeFilterValue(value) {
  return encodeURIComponent(value.replace(/ /g, "-"));
}
function FilterSection() {
  const router = useRouter();
  const { pathname, getInitialJob, getInitialCity } = useInitialFilters();
  const [selectedJob, setSelectedJob] = useState(getInitialJob);
  const [selectedCity, setSelectedCity] = useState(getInitialCity);

  useEffect(() => {
    const segments = pathname.split("/");
    const job =
      segments.length > 2 && segments[1] !== "location"
        ? decodeFilterValue(segments[2])
        : "";
    const city =
      segments[1] === "location"
        ? decodeFilterValue(segments[2])
        : segments.length > 3
        ? decodeFilterValue(segments[3])
        : "";
    setSelectedJob(job);
    setSelectedCity(city);
  }, [pathname]);

  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleJobReset = () => {
    setSelectedJob("");
  };

  const handleCityReset = () => {
    setSelectedCity("");
  };

  const updateUrl = (job, city) => {
    let url = "/role";
    if (job && city) {
      url += `/${encodeFilterValue(job)}/${encodeFilterValue(city)}`;
    } else if (city) {
      url = `/location/${encodeFilterValue(city)}`;
    } else if (job) {
      url += `/${encodeFilterValue(job)}`;
    }
    router.push(url);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (selectedJob === "" && selectedCity === "") {
      alert("You cannot select 'Any' for both job and city.");
    } else {
      updateUrl(selectedJob, selectedCity);
    }
  };

  return (
    <div className="m-auto mb-8 w-full">
      <div className="m-auto items-center justify-center gap-4 space-y-4 text-center lg:flex lg:space-y-0">
        <header className="text-dark-aaaa font-medium antialiased text-xl">
          Show me
        </header>
        <div className="flex items-center justify-center gap-4 lg:flex-1">
          <div className="min-w-[200px] lg:flex-1 relative">
            <Select
              className="select__control css-yk16xz-control"
              value={selectedJob}
              onChange={handleJobChange}>
              <option value="">Any</option>
              <option value="Designer">Designer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Data Engineer">Data Engineer</option>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Recruiter">Recruiter</option>
            </Select>
            {selectedJob && (
              <button
                type="button"
                onClick={handleJobReset}
                className="select__indicator absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="css-19bqh2r">
                  <path
                    d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    fill="#717584"></path>
                </svg>
              </button>
            )}
          </div>
          <header className="text-dark-aaaa font-medium antialiased text-xl">
            roles,
          </header>
        </div>
        <div className="relative items-center justify-center md:flex lg:flex-1 lg:justify-start">
          <header className="text-dark-aaaa font-medium antialiased text-xl">
            hiring in
          </header>
          <div className="min-w-[200px] md:flex-1 relative">
            <Select
              value={selectedCity}
              className="select__control"
              onChange={handleCityChange}>
              <option value="">Any</option>
              <option value="New York">New York City</option>
              <option value="Burlingame">Burlingame</option>
              <option value="San Mateo">San Mateo</option>
              <option value="Mountain-View">Mountain View</option>
              <option value="United States">United States</option>
              <option value="Palo Alto">Palo Alto</option>
              <option value="Salt Lake City">Salt Lake City</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Remote">Remote</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Austin">Austin</option>
              <option value="Canada">Canada</option>
            </Select>
            {selectedCity && (
              <button
                type="button"
                onClick={handleCityReset}
                className="select__indicator absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false">
                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                </svg>
              </button>
            )}
          </div>
          <Button
            onClick={handleSearchClick}
            className="ml-4 lg:w-auto rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-2 bg-black border-black text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 hover-blue">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
