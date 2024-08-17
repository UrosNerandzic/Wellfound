import HomeSection from "@/components/JobFeed/HomeSection.jsx";
import CompanyBlogSection from "@/components/JobFeed/CompanyBlogSection.jsx";
import ListJobs from "@/components/JobFeed/JobList/JobsList.jsx";
import Aside from "@/components/JobFeed/Aside.jsx";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar";
import GetStarted from "@/components/JobFeed/GetStarted";

export default async function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HomeSection />
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
        <CompanyBlogSection />
        <div className="mb-2 flex w-full flex-col justify-items-stretch md:mb-16 md:flex-row md:gap-6">
          <ListJobs />
          <Aside />
        </div>
        <GetStarted />
      </div>
      <Footer />
    </>
  );
}
