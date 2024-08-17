import { Card, CardHeader, CardContent } from "../ui/card";
import { client, urlFor } from "@/app/lib/sanity.jsx";
import Image from "next/image";
import Rank from "../CompanySection/Rank";
import Link from "next/link";

async function getBlogCompany() {
  const query = `
   *[_type == 'singleCompany']{
   LogoCompany,
   title,
   employeers,
   description,
   rank,
   location,
   companyType,
   totalRaised,
   companySize,
   overview
 }`;
  const data = await client.fetch(query);
  return data;
}
function encodeFilterValue(value) {
  return encodeURIComponent(value.replace(/ /g, "-"));
}
async function CompanyBlogSection() {
  const data = await getBlogCompany();
  const random = await data.sort(() => 0.4 - Math.random()).slice(0, 4);
  return (
    <div>
      <h2 className="my-8 text-xl font-bold md:text-2xl">
        Trending startups hiring now
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {random.map((type, key) => (
          <Card
            className="inline-flex flex-col overflow-hidden rounded-lg border border-gray-400"
            key={key}>
            <CardHeader className="flex  justify-between p-4">
              <div className="flex">
                <Image
                  width={48}
                  height={48}
                  className="mr-4  rounded-md object-contain"
                  src={urlFor(type.LogoCompany).url()}
                  alt="logo"
                />
                <div>
                  <div className="">
                    <Link
                      href={`/company/${encodeFilterValue(type.title)}`}
                      className="hover:underline">
                      <h3>{type.title}</h3>
                    </Link>
                    <span className="text-xs">{type.employeers}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-4">
              <span className="text-sm">{type.description}</span>
              <Rank data={type} />
            </CardContent>
            <div className="mt-auto border-t border-gray-400">
              <Link
                href={`/company/${encodeFilterValue(type.title)}`}
                className=" flex items-center  justify-between px-4 py-3 hover:bg-gray-100 hover:underline text-sm">
                <span>4 open positions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24">
                  <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                </svg>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default CompanyBlogSection;
