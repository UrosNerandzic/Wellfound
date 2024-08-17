"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Rank from "./Rank";
function encodeFilterValue(value) {
  return encodeURIComponent(value.replace(/ /g, "-"));
}
function CompanySection({ data }) {
  return (
    <section className="styles_component__tr5x6">
      <div className="styles_body__8_hGC">
        <div className="mr-4 mb-0">
          <Link href="" className="cursor-pointer ">
            <div className="overflow-hidden inline-flex flex-row items-center relative border border-gray-400 bg-gray-100 rounded-md h-18 w-18">
              <Image
                width={70}
                height={70}
                className="h-auto  w-auto"
                src={urlFor(data.LogoCompany).url()}
                alt="logoCity"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="styles_name__qn8jG">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <h3 className="styles-module_component__3ZI84 styles_companyHeader__OZlL0 text-xl font-medium">
                <div className="relative">
                  <Link
                    className="styles_component__UCLp3 styles_defaultLink__eZMqw styles_anchor__Zq69Z"
                    href={`/company/${encodeFilterValue(data.title)}`}>
                    {data.title}
                  </Link>
                </div>
              </h3>
            </div>
          </div>
          <h2 className="mt-1" style={{ color: "#616161" }}>
            {data.description}
          </h2>
        </div>
      </div>
      <Rank data={data} />
    </section>
  );
}

export default CompanySection;
