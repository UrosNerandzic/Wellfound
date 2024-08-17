"use client";
function decodeFilterValue(value) {
  return decodeURIComponent(value).replace(/-/g, " ");
}
import { usePathname } from "next/navigation";
const useInitialFilters = () => {
  const pathname = usePathname();

  const getInitialJob = () => {
    const segments = pathname.split("/");
    return segments.length > 2 && segments[1] !== "location"
      ? decodeFilterValue(segments[2])
      : "";
  };

  const getInitialCity = () => {
    const segments = pathname.split("/");
    return segments[1] === "location"
      ? decodeFilterValue(segments[2])
      : segments.length > 3
      ? decodeFilterValue(segments[3])
      : "";
  };

  return {
    pathname,
    getInitialJob,
    getInitialCity,
  };
};

export default useInitialFilters;
