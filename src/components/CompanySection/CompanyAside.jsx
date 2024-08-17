"use client";

import Link from "next/link";
import { useState } from "react";

function CompanyAside({ data }) {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const remainingLocations = data.location.length - 3;
  return (
    <aside className="styles_sidebar__R5Ghc">
      <div className="styles_component__eH77m">
        <div className="styles_component__Wb41n styles_component__qhaPy styles_about__6dvji styles_white__yJuQK">
          <div className="flex flex-row justify-between">
            <h3 className="styles-module_component__3ZI84 styles-module_flow__FV70c styles_title__3CqM3 text-dark-a text-xl font-medium">
              ABOUT PEPPER
            </h3>
          </div>
          <dl>
            <dd>Website</dd>
            <dt className="flex">
              <div className="inline-block">
                <Link href={data.website} legacyBehavior>
                  <a
                    href={`https://${data.website}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="styles_websiteLink___Rnfc mb-4">
                      {data.website}
                    </button>
                  </a>
                </Link>
              </div>
            </dt>
            <dd className="font-medium">Locations</dd>
            <dt className="mb-4">
              <ul>
                {data.location
                  .slice(0, showAll ? data.location.length : 3)
                  .map((location, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="cursor-pointer color-link-a underline">
                        {location}
                      </a>
                    </li>
                  ))}
                {data.location.length > 3 && !showAll && (
                  <button
                    className="styles_component__7ZpRT"
                    type="button"
                    onClick={toggleShowAll}>
                    Show {remainingLocations} more
                  </button>
                )}
              </ul>
            </dt>
            <dd className="font-medium">Company size</dd>
            <dt className="mb-4">{data.companySize}</dt>
            <dd>Total raised</dd>
            <dt className="mb-4">{data.totalRaised}</dt>
            <dd className="mb-1 font-medium">Company type</dd>
            <dt className="mb-4">
              <span className=" inline-flex flex-row items-center mr-2 last:mr-0 rounded-full align-middle bg-gray-200 text-gray-700 gap-2 text-xs px-3 py-1">
                {data.companyType}
              </span>
            </dt>
            <dd className="styles_markets__vIr_1 font-medium"> Markets</dd>
            <dt className="styles_tags__y_J8v">
              {data.markets.map((market, key) => (
                <Link
                  key={key}
                  href=""
                  className="mb-1 underline inline-flex flex-row items-center mr-2 last:mr-0 rounded-full align-middle bg-gray-200 text-gray-700 gap-2 text-xs px-3 py-1">
                  {market}
                </Link>
              ))}
            </dt>
          </dl>
        </div>
        <div className="styles_component__Wb41n styles_component__E4nh5 styles_white__yJuQK">
          <h3 className="styles-module_component__3ZI84 styles-module_flow__FV70c styles_title__0bI1O text-dark-a text-xl font-medium">
            JOBS AT PEPPER
          </h3>
          <button
            className="styles_component__7ZpRT styles_anchor__j2Ytf w-full"
            type="button">
            <span className="styles_role__Se_a5">Engineering</span>
            <div className="styles_right__E6Pux">
              <span>3 jobs</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </button>
          <button
            className="styles_component__7ZpRT styles_anchor__j2Ytf w-full"
            type="button">
            <span className="styles_role__Se_a5">Operations</span>
            <div className="styles_right__E6Pux">
              <span>4 jobs</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </button>
          <button
            className="styles_component__7ZpRT styles_anchor__j2Ytf w-full"
            type="button">
            <span className="styles_role__Se_a5">Sales</span>
            <div className="styles_right__E6Pux">
              <span>4 jobs</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default CompanyAside;
