"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function encodeFilterValue(value) {
  return encodeURIComponent(value.replace(/ /g, "-"));
}

function CompanyNavBarBottom({ data }) {
  const pathname = usePathname();
  const paths = [
    {
      path: `/company/${encodeFilterValue(data.title)}`,
      label: "Overview",
    },
    {
      path: `/company/${encodeFilterValue(data.title)}/people`,
      label: "People",
    },
    {
      path: `/company/${encodeFilterValue(data.title)}/culture_and_benefits`,
      label: "Culture and benefits",
    },
    {
      path: `/company/${encodeFilterValue(data.title)}/funding`,
      label: "Funding",
    },
    {
      path: `/company/${encodeFilterValue(data.title)}/jobs`,
      label: "Jobs",
    },
  ];
  const currentIndex = paths.findIndex((p) => p.path === pathname);

  return (
    <div className="styles_component__oYgJw flex items-center justify-between">
      <div>
        {currentIndex > 0 && (
          <div className="styles_link__OiQgn">
            <Link
              href={paths[currentIndex - 1].path}
              className="styles_component__UCLp3 styles_anchor__Q35XJ">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="styles_icon__jIPpJ">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 21a.997.997 0 01-.707-.293l-8-8a.999.999 0 010-1.414l8-8a.999.999 0 111.414 1.414L9.414 12l7.293 7.293A.999.999 0 0116 21z"
                  fill="currentColor"></path>
              </svg>
              <div className="styles_text__JohsU">
                <strong>{paths[currentIndex - 1].label}</strong>
              </div>
            </Link>
          </div>
        )}
      </div>
      <div className="flex-1 text-center">
        {/* Možeš dodati neki sadržaj ili samo rezervisani prostor */}
      </div>
      <div>
        {currentIndex < paths.length - 1 && (
          <div className="styles_link__OiQgn">
            <Link
              href={paths[currentIndex + 1].path}
              className="styles_component__UCLp3 styles_anchor__Q35XJ">
              <div className="styles_text__JohsU">
                <strong>{paths[currentIndex + 1].label}</strong>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="styles_icon__jIPpJ">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
                  fill="currentColor"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyNavBarBottom;
