import getSingleCompany from "@/app/data/getSingleCompany";
import { getTeams } from "@/app/data/getTeams";
import AnotherNavbar from "@/components/AnotherNavbar";
import CompanyAside from "@/components/CompanySection/CompanyAside";
import CompanyLeftContent from "@/components/CompanySection/CompanyLeftContent";
import CompanyNavBar from "@/components/CompanySection/CompanyNavBar";
import CompanyNavBarBottom from "@/components/CompanySection/CompanyNavBarBottom";
import CompanySection from "@/components/CompanySection/CompanySection";
import Footer from "@/components/Footer";
import ListJobs from "@/components/ListJobs";

function decodeFilterValue(value) {
  return decodeURIComponent(value).replace(/-/g, " ");
}
async function page({ params }) {
  const company = params.company || [];
  const title = company.length > 0 ? decodeFilterValue(company[0]) : null;
  const data = await getSingleCompany(title);
  const people = await getTeams();
  return (
    <>
      <AnotherNavbar />
      <div className="styles_component__PNq1k">
        <div className="styles_wrapper__J5pNi">
          <div className="styles_box___OsDD">
            <CompanyNavBar />
            <div className="styles_content__pKhb0">
              <CompanySection data={data} />
              <div className="styles_main__EGHwE">
                <CompanyLeftContent people={people} data={data} />
                <CompanyAside data={data} />
              </div>
              <CompanyNavBarBottom data={data} />
              <ListJobs />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
