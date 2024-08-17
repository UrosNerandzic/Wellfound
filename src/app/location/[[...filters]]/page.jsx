import SearchListBar from "@/components/SearchSection/SearchListBar";
import AnotherNavbar from "@/components/AnotherNavbar";
import ResultSearchBar from "@/components/SearchSection/ResultSearchBar";
import { getSingleJob } from "@/app/data/getSingleJob";
import Footer from "@/components/Footer";
import PaginationSection from "@/components/Filters/PaginationSection";
import FilterSection from "@/components/Filters/FilterSection";
import AllJobs from "@/components/Filters/AllJobs";

function decodeFilterValue(value) {
  return decodeURIComponent(value).replace(/-/g, " ");
}
export default async function Page({ params, searchParams }) {
  const filters = params.filters || [];
  const job = filters.length > 1 ? decodeFilterValue(filters[1]) : null;
  const city = filters.length > 0 ? decodeFilterValue(filters[0]) : null;
  const pageNum = Number(searchParams?.page ?? 0);
  const data = await getSingleJob(pageNum, job, city);
  return (
    <>
      <AnotherNavbar />
      <div className="jobGroup">
        <div className="jobSearchBar">
          <FilterSection />
          <ResultSearchBar />
        </div>
        <AllJobs job={job} city={city} pageNum={pageNum} />
        <SearchListBar />
        <PaginationSection />
      </div>
      <Footer />
    </>
  );
}
