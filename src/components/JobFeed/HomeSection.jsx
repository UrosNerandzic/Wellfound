import getJobFeed from "@/app/data/getJobFeed";
import { urlFor } from "@/app/lib/sanity.jsx";
import Image from "next/image";

async function HomeSection() {
  const data = await getJobFeed();
  return (
    <>
      {data.map((post, key) => (
        <div
          key={key}
          className="lg:w-max-full mb-6 mt-20 flex flex-row items-center justify-between md:mb-8 lg:mt-8 xl:mx-auto xl:max-w-screen-xxl">
          <div className="hidden shrink lg:block">
            <Image
              width={350}
              height={180}
              className="h-[180px] xl:h-[250px] w-auto"
              src={urlFor(post.coverImage1).url()}
              alt="image1"
              priority
            />
          </div>
          <div className="w-full shrink-0 px-10 text-center lg:w-auto xl:px-20">
            <h1 className="mb-4 mt-6 text-sm font-medium uppercase tracking-widest lg:mb-6">
              {post.descriptionOne}
            </h1>
            <h2 className="text-2xl font-bold !leading-[1.2] md:mb-10 md:text-5xl xxl:text-[4.5rem]">
              {post.title}
              <span className="text-red-600">:</span>
            </h2>
          </div>
          <div className="hidden shrink lg:block">
            <Image
              width={350}
              height={180}
              className="h-[180px] xl:h-[250px] w-auto"
              src={urlFor(post.coverImage2).url()}
              alt="image1"
              priority
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeSection;
