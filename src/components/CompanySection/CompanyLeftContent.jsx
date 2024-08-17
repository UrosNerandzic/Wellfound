"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import PeoplePage from "./CompanyPage/PeoplePage";
import CultureAndBenefitsPage from "./CompanyPage/CultureAndBenefitsPage";
import FundingPage from "./CompanyPage/FundingPage";
import OverviewPage from "./CompanyPage/OverviewPage";

function encodeFilterValue(value) {
  return encodeURIComponent(value.replace(/ /g, "-"));
}
function CompanyLeftContent({ data, people }) {
  const currentPath = usePathname();
  const links = [
    { href: "", text: "Overview" },
    { href: "people", text: "People" },
    { href: "culture_and_benefits", text: "Culture and benefits" },
    { href: "funding", text: "Funding" },
    { href: "jobs", text: "Jobs" },
  ];

  return (
    <div className="w-full">
      <div className="styles_component__u4jsl">
        <div className="styles_component__Gq0Wb">
          <div className="styles_kebabAndShare__3SqTX">
            <div className="styles_component__AquWq">
              <button>Share</button>
            </div>
          </div>
          <div className="styles_ctaButtons__Z9CbA styles_desktop__2GkGf">
            <div className="inline-block w-full lg:w-auto">
              <Button className="ml-4 rounded border-solid border gap-x-2 whitespace-nowrap font-medium antialiased text-center text-sm no-underline cursor-pointer focus:outline-0 disabled:cursor-default disabled:pointer-events-none disabled:opacity-50 duration-200 px-4 py-2 bg-white border-black text-black disabled:bg-white disabled:border-gray-700 disabled:text-gray-700 bg-gtmblue-100 border-gtmblue-500 text-gtmblue-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3">
                  <path
                    d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
                    fill="currentColor"></path>
                </svg>
                Follow
              </Button>
            </div>
          </div>
        </div>
        <nav className="styles_component__g_SAM styles_tabGroup__VP9ZS styles_noMargin__GFiM_">
          {links.map(({ href, text }) => {
            const fullHref = `/company/${encodeFilterValue(data.title)}${
              href ? `/${href}` : ""
            }`;
            return (
              <Link
                key={text}
                href={fullHref}
                className={`pb-2 styles_component__UCLp3 styles_defaultLink__eZMqw styles_tabOverride__Hfd_D marginChild ${
                  currentPath === fullHref ? "linkCompanyNavActive" : ""
                }`}>
                <div className="flex flex-row items-center">
                  <span className="linkCompanyNav">{text}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="styles_profile__r_OKH">
        {currentPath === `/company/${encodeFilterValue(data.title)}` && (
          <OverviewPage data={data} />
        )}
        {currentPath === `/company/${encodeFilterValue(data.title)}/people` && (
          <PeoplePage people={people} data={data} />
        )}
      </div>
      {currentPath ===
        `/company/${encodeFilterValue(data.title)}/culture_and_benefits` && (
        <CultureAndBenefitsPage data={data} />
      )}
      {currentPath === `/company/${encodeFilterValue(data.title)}/funding` && (
        <FundingPage people={people} data={data} />
      )}
    </div>
  );
}

export default CompanyLeftContent;
